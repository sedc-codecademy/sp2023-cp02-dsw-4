import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import ProfilePicture from "./PictureFolder/PPicture"
import UserInfoForm from "./InfoFolder/UInfo"
import AddressInfoForm from "./AddressFolder/ADInfo"
import PasswordInfoForm from "./PasswordFolder/PInfo"

import { NewCardHelper, SettingsCardHelper } from "../CardHelper/CardHelper"
import { NoCardSvg } from "../Cart/Card/CardSvgs"
import {
  clearTempCards,
  setCreateCard,
} from "../../store/slices/cardSlice/cardSlice"

import { useDeleteCard, useLogout, useUpdateCard, useUpdateUser } from "../../helpers/UserHelper/UserHelper"

import {
  clearPasswordInfo,
  clearUser,
  updatePasswordInfo,
  updateUserInfo,
} from "../../store/slices/userSettings/userSettingsSlices"
import {
  cardInfoValidity,
  getCardStatusEnum,
  getCardTypeEnum,
  isInfoValid,
  passwordInfoValidity,
  userInfoValidity,
} from "../UsefullComponents/Usefull"
import { getUser } from "../../helpers/API/user-api"

function UserSettings() {
  const dispatch = useDispatch()
  const logout = useLogout()
  const updateUser = useUpdateUser()
  const updateCard = useUpdateCard()
  const removeCard = useDeleteCard()
  const role = useSelector((state) => state.role.role)
  const tokens = useSelector((state) => state.role.authTokens)
  const userid = useSelector(state => state.role.userid)
  const userCards = useSelector((state) => state.user.userCards)
  const createCard = useSelector((state) => state.card.createCard)
  const tempCards = useSelector((state) => state.card.tempCards)
  const userInfo = useSelector((state) => state.userSettings.userInfo)
  const userPassword = useSelector((state) => state.userSettings.passwordInfo)
  const [currentPage, setCurrentPage] = useState("accountInfo")

  const [modifiedCards, setModifiedCards] = useState([])
  const [modifiedUser, setModifiedUser] = useState(null)
  const [modifiedPassword, setModifiedPassword] = useState(null)

  const [updateCardsValid, setUpdateCardsValid] = useState(false)
  const [userInfoValid, setUserInfoValid] = useState(false)
  const [userPasswordValid, setUserPasswordValid] = useState(false)

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const [isClearButtonDisabled, setIsClearButtonDisabled] = useState(true)

  const { data } = useQuery({
    queryKey: ['userQuery', userid],
    queryFn: () => getUser(userid, tokens),
    enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
  })

  useEffect(() => {
    if (data) {
      let modifiedTempUser = {}
      for (let key in userInfo) {
        if (userInfo[key] !== "" && userInfo[key] !== data[key] && key !== 'image') {
          modifiedTempUser[key] = userInfo[key]
        }
      }
      setModifiedUser(modifiedTempUser)
    }
  }, [userInfo, data])

  useEffect(() => {
    if (userPassword) setModifiedPassword(userPassword)
  }, [userPassword])

  useEffect(() => {
    if (
      modifiedPassword && modifiedPassword?.password === modifiedPassword?.cpassword
    ) {
      setUserPasswordValid(
        isInfoValid(passwordInfoValidity, modifiedPassword, [
          "password",
          "originalPassword",
          "cpassword",
        ])
      )
    } else {
      setUserPasswordValid(false)
    }
  }, [modifiedPassword, data])

  useEffect(() => {
    let modifiedTempCards = tempCards?.map((card) => {
      let modifiedCard = {}
      let originalCard = data?.cards.find((c) => c.id === card.id)
      for (let key in card) {
        if (card[key] !== "" && key !== "originalStatus") {
          if ((key === "cardStatus" && card[key] === card.originalStatus) ||
            (originalCard && card[key] === originalCard[key] && key !== "id")
          ) {
            continue
          }

          modifiedCard[key] = card[key]
        }
      }

      if (modifiedCard.number) {
        modifiedCard.type = modifiedCard.type.cardtype
      } else {
        delete modifiedCard.type
      }

      return modifiedCard
    })
    setModifiedCards(modifiedTempCards || [])
  }, [tempCards, data])

  useEffect(() => {
    if (
      modifiedCards?.some(
        (e) => e.holder || e.number || e.cardStatus || e.cvc || e.date || e.removal
      )
    ) {
      const allCardsValid = modifiedCards.every((modifiedCard) => {
        const keysToCheck = Object.keys(modifiedCard).filter(
          (key) => key !== "id" && key !== "type"
        )

        return isInfoValid(cardInfoValidity, modifiedCard, keysToCheck)
      })

      setUpdateCardsValid(allCardsValid)
    } else {
      setUpdateCardsValid(false)
    }
  }, [modifiedCards])

  useEffect(() => {
    if (modifiedUser) {
      const keysToCheck = Object.keys(modifiedUser)

      const hasNonEmptyKey = keysToCheck.some(
        (key) => modifiedUser[key] !== ""
      )

      if (hasNonEmptyKey) {
        setUserInfoValid(
          isInfoValid(userInfoValidity, modifiedUser, keysToCheck)
        )
      } else {
        setUserInfoValid(false)
      }
    }
  }, [modifiedUser])

  useEffect(() => {
    switch (currentPage) {
      case "accountInfo":
        setIsSubmitButtonDisabled(!userInfoValid)
        break
      case "security":
        setIsSubmitButtonDisabled(!userPasswordValid)
        break
      case "payment":
        setIsSubmitButtonDisabled(!updateCardsValid)
        break
      default:
        setIsSubmitButtonDisabled(true)
    }
  }, [currentPage, updateCardsValid, userInfoValid, userPasswordValid])

  useEffect(() => {
    switch (currentPage) {
      case "accountInfo":
        setIsClearButtonDisabled(
          !(modifiedUser
            ? Object.keys(modifiedUser).some((key) => modifiedUser[key] !== "")
            : false)
        )
        break
      case "security":
        setIsClearButtonDisabled(!userPassword)
        break
      case "payment":
        setIsClearButtonDisabled(
          !modifiedCards?.some(
            (e) => e.holder || e.number || e.cardStatus || e.cvc || e.date
          )
        )
        break
      default:
        setIsClearButtonDisabled(true)
    }
  }, [currentPage, modifiedCards, modifiedUser, userPassword])

  const showSubmitDiv = () => {
    if (currentPage === "manage") {
      return false
    } else if (currentPage === "payment") {
      if (createCard || !userCards?.length) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  function handleClearClick() {
    switch (currentPage) {
      case "accountInfo":
        dispatch(clearUser())
        break
      case "security":
        dispatch(clearPasswordInfo())
        break
      case "payment":
        dispatch(clearTempCards())
        break
      default:
        return
    }
  }

  const handleSubmitUserInfo = () => {
    let tempImage
    if (modifiedUser?.image?.base64) {
      const byteArray = new Uint8Array(atob(modifiedUser.image.base64).split("").map(char => char.charCodeAt(0)))
      tempImage = byteArray
    }

    const tempUser = {
      FirstName: modifiedUser.firstName || '',
      LastName: modifiedUser.lastName || '',
      Username: modifiedUser.username || '',
      Password: '',
      ConfirmationPassword: '',
      Email: modifiedUser.email || '',
      PhoneNumber: modifiedUser.phoneNumber || '',
      Address: modifiedUser.address || '',
      PostalCode: modifiedUser.postalCode || '',
      City: modifiedUser.city || '',
      Image: tempImage || '',
      id: data.id
    }
    updateUser(tempUser)
  }

  const handleSubmitUserCards = () => {
    const tempAsyncCards = modifiedCards.slice()
    tempAsyncCards.forEach(card => {
      if (card.removal) {
        removeCard(card.id)
      } else {
        if (card.type || card.cardStatus || card.number || card.holder || card.cvc) {
          const tempCard = {
            Id: card.id,
            CardType: card.type ? getCardTypeEnum(card.type) : null,
            CardStatus: card.cardStatus ? getCardStatusEnum(card.cardStatus) : null,
            CardNumber: card.number || null,
            CardHolder: card.holder || null,
            ExpirationDate: card.date || null,
            SecurityCode: card.cvc || null,
            UserId: data.id,
          }
          updateCard(tempCard)
        }
      }
    })
  }

  const handleSubmitUserPassword = () => {
    if (
      modifiedPassword && modifiedPassword?.password === modifiedPassword?.cpassword
    ) {
      const tempUser = {
        FirstName: '',
        LastName: '',
        Username: '',
        Password: modifiedPassword.password,
        ConfirmationPassword: modifiedPassword.originalPassword,
        // OriginalPassword: modifiedPassword.orignalPassword,
        Email: '',
        PhoneNumber: '',
        Address: '',
        PostalCode: '',
        City: '',
        Image: '',
        id: data.id
      }

      updateUser(tempUser)
    }
  }

  function handleSubmitClick() {
    switch (currentPage) {
      case "accountInfo":
        handleSubmitUserInfo()
        break
      case "security":
        handleSubmitUserPassword()
        break
      case "payment":
        handleSubmitUserCards()
        break
      default:
        return
    }
  }

  const handleLogOutClick = () => {
    logout()
  }

  const handleInputEdit = (e) => {
    dispatch(updateUserInfo({ name: e.target.name, value: e.target.value }))
  }

  const handleInputImage = ({ name, value }) => {
    dispatch(updateUserInfo({ name, value }))
  }

  const handlePasswordChange = (e) => {
    dispatch(
      updatePasswordInfo({ name: e.target.name, value: e.target.value })
    )
  }

  if (data) {
    return (
      <main className="user-settings-main">
        <nav>
          <ul>
            <li>
              <button
                onClick={() => setCurrentPage("accountInfo")}
                disabled={currentPage === "accountInfo"}
              >
                <h3>Account Info</h3>
                <svg viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                  />
                  <path
                    fill="currentColor"
                    d="M6 10h7v2H6zm0 4h4v2H6zm17 4h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3zm-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2z"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("security")}
                disabled={currentPage === "security"}
              >
                <h3>Password And Security</h3>
                <svg viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2Zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18Z"
                  />
                  <circle cx="22" cy="10" r="2" fill="currentColor" />
                </svg>
              </button>
            </li>
            {role === 'User' &&
              <li>
                <button
                  onClick={() => setCurrentPage("payment")}
                  disabled={currentPage === "payment"}
                >
                  <h3>Cards and Payment</h3>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M21 8V6H7v2h14m0 8v-5H7v5h14m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h14M3 20h15v2H3a2 2 0 0 1-2-2V9h2v11Z"
                    />
                  </svg>
                </button>
              </li>
            }
            <li>
              <button
                onClick={() => setCurrentPage("manage")}
                disabled={currentPage === "manage"}
              >
                <h3>Manage Account</h3>
                <svg viewBox="0 0 14 14">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="5" cy="2.75" r="2.25" />
                    <path d="M5 12.5H.5V11a4.5 4.5 0 0 1 6.73-3.91m6.27 2.17L9.26 13.5m0-4.24l4.24 4.24" />
                  </g>
                </svg>
              </button>
            </li>
          </ul>
          <button className="logOutButton" onClick={handleLogOutClick}>
            <h4>Log out</h4>
            <svg viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z"
              />
              <path
                fill="currentColor"
                d="M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z"
              />
            </svg>
          </button>
        </nav>
        <div className="dataParent">
          {currentPage === "accountInfo" ? (
            <AccountInfoFu
              user={data}
              userInfo={userInfo}
              handleInputEdit={handleInputEdit}
              handleInputImage={handleInputImage}
            ></AccountInfoFu>
          ) : currentPage === "security" ? (
            <SecurityFu
              handlePasswordChange={handlePasswordChange}
              passwordInfo={userPassword}
              user={data}
            ></SecurityFu>
          ) : currentPage === "payment" ? (
            <PaymentFu
              userCards={userCards}
              data={data}
            ></PaymentFu>
          ) : (
            <ManageFu></ManageFu>
          )}
          {showSubmitDiv() && (
            <div className="submitDiv">
              <p>Empty fields wont be changed.</p>
              <button
                className="clearButton"
                disabled={isClearButtonDisabled}
                onClick={handleClearClick}
              >
                Clear
              </button>
              <button
                className="saveButton"
                disabled={isSubmitButtonDisabled}
                onClick={handleSubmitClick}
              >
                <span>Save</span> <span>Changes</span>
              </button>
            </div>
          )}
        </div>
      </main>
    )
  }
}

const AccountInfoFu = ({
  user,
  userInfo,
  handleInputEdit,
  handleInputImage,
}) => {
  return (
    <div className="dataContainer">
      <h2 className="subTitle">Profile Picture</h2>
      <ProfilePicture
        handleInputEdit={handleInputImage}
        userInfo={userInfo}
        image={{ alt: `${user.firstName} ${user.lastName}`, url: user.image }}
      ></ProfilePicture>
      <h2 className="subTitle">Credentials</h2>
      <UserInfoForm
        user={user}
        userInfo={userInfo}
        handleInputEdit={handleInputEdit}
      ></UserInfoForm>
      <h2 className="subTitle">Address</h2>
      <AddressInfoForm
        user={user}
        userInfo={userInfo}
        handleInputEdit={handleInputEdit}
      ></AddressInfoForm>
    </div>
  )
}

const SecurityFu = ({ handlePasswordChange, passwordInfo }) => {
  return (
    <div className="dataContainer">
      <h2 className="subTitle">Change Password</h2>
      <PasswordInfoForm
        handlePasswordChange={handlePasswordChange}
        passwordInfo={passwordInfo}
      ></PasswordInfoForm>
      {/* <h2 className="subTitle">Security Settings</h2> */}
      {/* <button className="checkButton stayButton">
        <p>Stay logged in</p>
        <svg viewBox="0 0 150 150">
          <path
            d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z"
            fill="currentColor"
          />
          <rect
            x="40"
            y="40"
            width="70"
            height="70"
            rx="5"
            fill="currentColor"
          />
        </svg>
      </button> */}
    </div>
  )
}

const PaymentFu = ({ userCards, data }) => {
  const dispatch = useDispatch()
  const createCard = useSelector((state) => state.card.createCard)
  const handleCreateCard = () => {
    dispatch(setCreateCard(true))
  }

  return (
    <div className="dataContainer">
      <h2 className="subTitle">
        <span>Edit Payment Info</span>{" "}
        <button
          className="createCardButton"
          disabled={createCard}
          onClick={handleCreateCard}
        >
          Create Card
        </button>
      </h2>
      <form
        className="dataForm paymentForm"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        {userCards?.length > 0 &&
          !createCard &&
          userCards.map((card) => (
            <SettingsCardHelper
              key={card.id}
              cardID={card.id}
            ></SettingsCardHelper>
          ))}
        {!userCards?.length > 0 && !createCard && (
          <div className="noCardFound">
            <NoCardSvg></NoCardSvg>
            <h1>no cards found</h1>
            <p>save a card for easy access when making a purchase</p>
          </div>
        )}
        {createCard && <NewCardHelper data={data}></NewCardHelper>}
      </form>
    </div>
  )
}

const ManageFu = () => {
  const shippingArray = useSelector((state) => state.shipping.shippingArray)
  return (
    <>
      <div className="dataContainer">
        <h2 className="subTitle">Apply for Courier</h2>
        <form
          className="dataForm courierForm"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="inputContainer">
            <p>Choose the City you will cover</p>
            <select id="cars" name="cars">
              {shippingArray.map((e) => (
                <option key={e} value="e">
                  {e}
                </option>
              ))}
            </select>
            <button>Apply</button>
          </div>
          <p className="improtant">
            Courier accounts cannot access unrelated <span>C&S</span> services.
          </p>
        </form>
        <h2 className="subTitle">Delete Account</h2>
        <form
          className="dataForm deleteAccForm"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="inputContainer">
            <p>Tell us why you're removing your account.</p>
            <select id="cars" name="cars">
              <option value="1">I have no use for it anymore</option>
              <option value="1">Click & Ship is too expensive</option>
              <option value="1">There's too much ads</option>
              <option value="1">For demonstration purposes</option>
            </select>
            <button>Delete</button>
          </div>
          <p className="improtant two">
            Once a delete request has been made, you will be able to cancel
            removal by simply signing in with this account in the next 30 days.
          </p>
          <h3>Deleted accounts cannot be recovered</h3>
        </form>
      </div>
    </>
  )
}

export default UserSettings
