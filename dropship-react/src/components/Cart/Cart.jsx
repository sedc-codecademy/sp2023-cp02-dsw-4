import React, { useState, useRef, useEffect } from "react"
import ImageLoader from "../ImageLoader/ImageLoader"
import { NavLink } from "react-router-dom"
import ProductCard from "../Product/ProductCard/ProductCard"
import { LoadingErrorDiv } from "../PageLoader/PageLoader"

import { useDispatch, useSelector } from "react-redux"

import {
    setCardFormValue,
    setCardType,
} from "../../store/slices/cardSlice/cardSlice"
import { formatAsMMYY } from "../CardHelper/CardFunctions"
import CardHelper from "../CardHelper/CardHelper"
import { DeliverySvg, EmptyCard } from "./delivery"

import { CSSTransition } from "react-transition-group"

import { useQuery } from "@tanstack/react-query"

import {
    changeItemAmount,
    // purchase,
    removeOrderItems,
    setFinalPaymentState,
    setOrderFormValue,
} from "../../store/slices/cartSlice/cartSlice"
import { getPopularProducts } from "../../helpers/API/product-api"
import { cardInfoValidity, getCardTypeEnum, isInfoValid, userInfoValidity } from "../UsefullComponents/Usefull"
import { usePurchaseOrder } from "../../helpers/UserHelper/UserHelper"
import { getUser } from "../../helpers/API/user-api"
import { setShowAccDropDown } from "../../store/slices/dropdowns/acDropDownSlice"

function Cart() {
    const dispatch = useDispatch()
    const purchaseOrder = usePurchaseOrder()
    const tokens = useSelector((state) => state.role.authTokens)
    const userid = useSelector(state => state.role.userid)

    const { data: userData } = useQuery({
        queryKey: ['userQuery', userid],
        queryFn: () => getUser(userid, tokens),
        enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
    })

    const [fieldMapping] = useState({
        address: ["address", "city", "postalCode"],
        userInfo: ["firstName", "lastName", "email", "phoneNumber"],
    })

    const [cartState, setCartState] = useState("default")
    const [showCards, setShowCards] = useState(false)
    const [collectionFormValid, setCollectionFormValid] = useState(false)
    const [paymentFormValid, setPaymentFormValid] = useState(false)
    const [existingCard, setExistingCard] = useState(null)

    const cardObject = useSelector((state) => state.card.cartCard)
    const cardPatterns = useSelector((state) => state.card.cardPatterns)

    const paymentref = useRef()
    const collectionref = useRef()
    const finalref = useRef()

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const orderInfo = useSelector((state) => state.cart.orderInfo)
    const orderItems = useSelector((state) => state.cart.orderItems)
    const finalPayment = useSelector((state) => state.cart.finalPayment)
    const shippingLocation = useSelector((state) => state.shipping.shippingLocation)
    const shippingArray = useSelector((state) => state.shipping.shippingArray)

    const [subtotal, setSubtotal] = useState(0)
    const [shippingCost, setShippingCost] = useState(0)
    const [total, setTotal] = useState(0)

    const [xAndY, setXandY] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (orderInfo) {
            const keysToCheck = Object.keys(orderInfo).filter((key) => key !== "id")
            const isOrderValid = isInfoValid(userInfoValidity, orderInfo, keysToCheck)
            setCollectionFormValid(isOrderValid)
        }

        const keysToCheck = Object.keys(cardObject).filter((key) => key !== "id")
        let isCardValid = isInfoValid(cardInfoValidity, cardObject, keysToCheck)
        if (existingCard && Object.keys(existingCard).length > 0) {
            if (cardObject.cvc !== existingCard.cvc) {
                isCardValid = false
            }
        }
        if (orderInfo.paymentMethod === "ondelivery") isCardValid = true

        setPaymentFormValid(isCardValid)

    }, [orderInfo, cardObject, collectionFormValid, existingCard])

    useEffect(() => {
        if (finalPayment && cartState === "final") {
            finalref.current.showModal()
        }
    }, [finalPayment, cartState])

    useEffect(() => {
        const calculatedSubtotal = orderItems.reduce(
            (sum, item) => sum + item.total * item.quantity,
            0
        )
        setSubtotal(calculatedSubtotal.toFixed())

        let calculatedShippingCost = 0

        if (orderInfo.city.toLowerCase() === 'skopje') {
            calculatedShippingCost = 0;
            // } else if (["prilep", "kumanovo", "shtip", "veles"].includes(orderInfo.city.toLowerCase())) {
            //     calculatedShippingCost = 130;
        } else {
            calculatedShippingCost = 150;
        }

        if (shippingLocation && !orderInfo.city) {
            if (shippingLocation.toLowerCase() === "Skopje") {
                calculatedShippingCost = 0;
                // } else if (["Prilep", "Kumanovo", "Shtip", "Veles"].includes(shippingLocation.toLowerCase())) {
                //     calculatedShippingCost = 130;
            } else {
                calculatedShippingCost = 150;
            }
        }

        setShippingCost(calculatedShippingCost)

        const calculatedTotal = calculatedSubtotal + calculatedShippingCost
        setTotal(calculatedTotal.toFixed())
        dispatch(setOrderFormValue({ name: "total", value: calculatedTotal }))
    }, [orderItems, orderInfo, shippingLocation, dispatch])

    useEffect(() => {
        if (orderInfo) {
            const saveCardActive = userData?.cards.some(
                (card) =>
                    card.holder === cardObject.holder &&
                    card.number === cardObject.number &&
                    card.date === cardObject.date
            ) || !paymentFormValid
            if (saveCardActive) {
                dispatch(setOrderFormValue({ name: "saveCard", value: false }))
            }
        }
    }, [orderInfo, cardObject, paymentFormValid, userData, dispatch])

    useEffect(() => {
        const existingCard = userData?.cards.find(
            (card) =>
                card.holder === cardObject.holder &&
                card.number === cardObject.number &&
                card.date === cardObject.date
        )
        setExistingCard(existingCard || null)

    }, [userData, cardObject])

    const handleCollectionClick = () => {
        setCartState("collection")
    }

    const handlePaymentClick = () => {
        setCartState("payment")
    }

    const handleBackClick = () => {
        setCartState("default")
    }

    const handleCardAutofill = (e) => {
        e.preventDefault()
        setShowCards(!showCards)
    }

    const handleInputEdit = (e) => {
        e.preventDefault()
        dispatch(setOrderFormValue({ name: e.target.name, value: e.target.value }))
    }

    const handlePaymentMethodChange = (e) => {
        e.preventDefault()
        dispatch(
            setOrderFormValue({ name: "paymentMethod", value: e.currentTarget.name })
        )
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        if (e.target.name === "collectionForm" && collectionFormValid) {
            setCartState("payment")
        } else if (e.target.name === "paymentForm" && paymentFormValid) {
            if (collectionFormValid && paymentFormValid) {
                if (isLoggedIn && userData) {
                    dispatch(setFinalPaymentState(true))
                    setCartState("final")
                } else {
                    dispatch(setShowAccDropDown(true))
                }
            }
        }
    }

    const handleCollectionAutofill = (e) => {
        e.preventDefault()
        if (fieldMapping[e.currentTarget.name]) {
            fieldMapping[e.currentTarget.name].forEach((field) => {
                if (userData?.[field]) {
                    dispatch(
                        setOrderFormValue({ name: field, value: userData?.[field] })
                    )
                }
            })
        }
    }

    const handleAutoFillCards = (e) => {
        if (e.holder) dispatch(setCardFormValue({ name: "holder", value: e.holder }))
        if (e.number) {
            const number = e.number.replace(/\D/g, "")

            const matchedPattern = cardPatterns.find(
                (pattern) => number.match(pattern.regex) !== null
            )

            dispatch(setCardType(matchedPattern))
            dispatch(setCardFormValue({ name: "number", value: e.number }))
        }
        if (e.date) dispatch(setCardFormValue({ name: "date", value: formatAsMMYY(e.date) }))
        setShowCards(false)
    }

    const handleSetInputValue = (e) => {
        const { name, value } = e.target
        dispatch(setCardFormValue({ name, value }))
    }

    const handleCardNumberChange = (e) => {
        const { name, value } = e.target
        const number = value.replace(/\D/g, "")

        const matchedPattern = cardPatterns.find(
            (pattern) => number.match(pattern.regex) !== null
        )

        dispatch(setCardType(matchedPattern))
        dispatch(setCardFormValue({ name, value: number }))
    }

    const handleDateChange = (e) => {
        const { name } = e.target
        let value = formatAsMMYY(e.target.value)
        dispatch(setCardFormValue({ name, value }))
    }

    const handlePurchase = async () => {

        const orderData = {
            orderItems: orderItems?.map(item => ({
                quantity: item.quantity,
                productSizeId: item.id
            })),
            userId: userData.id,
            address: orderInfo.address,
            postalCode: orderInfo.postalCode,
            city: orderInfo.city,
            phoneNumber: orderInfo.phoneNumber,
            note: orderInfo.note || '',
            // paymentStatus: 2,
            saveCard: orderInfo.saveCard
        }

        if (orderInfo.paymentMethod !== "ondelivery") {
            orderData.cardType = getCardTypeEnum(cardObject.type.cardtype)
            orderData.cardHolder = cardObject.holder
            orderData.cardNumber = cardObject.number
            orderData.expirationDate = cardObject.date
            orderData.securityCode = cardObject.cvc
            orderData.paymentStatus = 1
            // orderData.existingCardId = existingCard && Object.keys(existingCard).length > 0 ? existingCard.id : ''
        } else {
            orderData.paymentStatus = 2
        }

        const purchaseStatus = await purchaseOrder(orderData)
        if (purchaseStatus === 'error') {
            setCartState("payment")
            dispatch(setFinalPaymentState(false))
        } else if (purchaseStatus === 'ok') {
            setCartState("default")
            dispatch(setFinalPaymentState(false))
        }
    }

    const handleCancel = () => {
        setCartState("payment")
        dispatch(setFinalPaymentState(false))
    }

    const handleRemoveOrderItem = (e) => {
        dispatch(removeOrderItems(e))
    }

    const handleChangeOrderAmount = (e) => {
        dispatch(changeItemAmount(e))
    }

    const handleSaveCard = () => {
        dispatch(setOrderFormValue({ name: "saveCard", value: !orderInfo.saveCard }))
    }

    const handleOnMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setXandY({ x: `${x}px`, y: `${y}px` })
    }

    const {
        data: popularProducts,
        error: popularError,
        isError: popularIsError,
        isPending: popularIsPending,
        isSuccess: popularSuccess,
        refetch: popularRefetch,
    } = useQuery({
        queryKey: ["popularQuery"],
        queryFn: getPopularProducts,
    })

    return (
        <main className="cartMain">
            {orderItems.length > 0 ? (
                <div className="cart">
                    {cartState !== "default" && (
                        <div className="checkout">
                            <h2 className="mastertitle subTitle">
                                <span>Checkout</span>
                                <button onClick={handleBackClick}>
                                    <svg viewBox="0 0 32 32">
                                        <path
                                            fill="currentColor"
                                            d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8l8-8z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
                                        />
                                    </svg>
                                    <span>Back to Cart</span>
                                </button>
                            </h2>
                            <div className="collection">
                                <button
                                    className="titleButton"
                                    onClick={handleCollectionClick}
                                    disabled={cartState === "collection"}
                                >
                                    <h3>
                                        <span>
                                            <svg viewBox="0 0 32 32">
                                                <path
                                                    fill="currentColor"
                                                    d="m29.92 16.61l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.08-.39ZM23 11h2.34l2.14 5H23ZM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm10.14-3h-6.28a4 4 0 0 0-7.72 0H4V8h17v12.56A4 4 0 0 0 19.14 23ZM23 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm5-3h-1.14A4 4 0 0 0 23 20v-2h5Z"
                                                />
                                            </svg>
                                            <span>Collection & Address</span>
                                        </span>
                                        <svg className="arrow" viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                                            />
                                        </svg>
                                    </h3>
                                </button>
                                <CSSTransition
                                    in={cartState === "collection"}
                                    timeout={200}
                                    classNames="checkoutForm"
                                    unmountOnExit
                                    nodeRef={collectionref}
                                >
                                    <form
                                        className="checkoutForm"
                                        ref={collectionref}
                                        name="collectionForm"
                                        onSubmit={(e) => handleSubmitForm(e)}
                                    >
                                        <h4>
                                            Personal Info
                                            <button
                                                name="userInfo"
                                                onClick={(e) => handleCollectionAutofill(e)}
                                                disabled={!isLoggedIn}
                                            >
                                                <span>Autofill</span>
                                                <svg viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29c-.26 0-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7l1.41 1.41L14.41 11L13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11L13 12.41l-7.17 7.18z"
                                                    />
                                                </svg>
                                            </button>
                                        </h4>
                                        <div className="inputContainer fullname">
                                            <div>
                                                <input
                                                    type="text"
                                                    maxLength="30"
                                                    minLength="2"
                                                    pattern="^[a-zA-Z\\s ]*$"
                                                    name="firstName"
                                                    value={orderInfo.firstName}
                                                    onChange={(e) => handleInputEdit(e)}
                                                    required
                                                    placeholder=""
                                                ></input>
                                                <label htmlFor="firstName">First Name</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    maxLength="30"
                                                    minLength="2"
                                                    name="lastName"
                                                    pattern="^[a-zA-Z\\s ]*$"
                                                    value={orderInfo.lastName}
                                                    onChange={(e) => handleInputEdit(e)}
                                                    required
                                                    placeholder=""
                                                ></input>
                                                <label htmlFor="lastName">Last Name</label>
                                            </div>
                                        </div>
                                        <div className="inputContainer ePhone">
                                            <div>
                                                <input
                                                    type="email"
                                                    maxLength="40"
                                                    minLength="9"
                                                    name="email"
                                                    pattern="^[a-zA-Z0-9+._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
                                                    value={orderInfo.email}
                                                    onChange={(e) => handleInputEdit(e)}
                                                    required
                                                    placeholder=""
                                                ></input>
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div>
                                                <input
                                                    name="phoneNumber"
                                                    type="tel"
                                                    pattern="^0\d+$"
                                                    maxLength={9}
                                                    minLength={9}
                                                    inputMode="numeric"
                                                    value={orderInfo.phoneNumber}
                                                    onChange={(e) => handleInputEdit(e)}
                                                    required
                                                    placeholder=""
                                                ></input>
                                                <label htmlFor="phoneNumber">Phone Number</label>
                                            </div>
                                        </div>
                                        <h4>
                                            Ship To
                                            <button
                                                name="address"
                                                onClick={(e) => handleCollectionAutofill(e)}
                                                disabled={!isLoggedIn || (!userData.adress && !userData.city && !userData.postalCode)}
                                            >
                                                <span>Autofill</span>
                                                <svg viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29c-.26 0-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7l1.41 1.41L14.41 11L13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11L13 12.41l-7.17 7.18z"
                                                    />
                                                </svg>
                                            </button>
                                        </h4>
                                        <div className="inputContainer streetAddress">
                                            <div className="street">
                                                <input
                                                    type="text"
                                                    maxLength="30"
                                                    minLength="3"
                                                    name="address"
                                                    value={orderInfo.address}
                                                    onChange={(e) => handleInputEdit(e)}
                                                    required
                                                    placeholder=""
                                                ></input>
                                                <label htmlFor="address">Address</label>
                                            </div>
                                        </div>
                                        <div className="inputContainer cityAddress">
                                            <div className="city">
                                                <select
                                                    className="citySelect"
                                                    name="city"
                                                    onChange={handleInputEdit}
                                                    value={orderInfo.city}
                                                >
                                                    {shippingArray.map((e, i) => (
                                                        <option key={i} value={e} name={e} >
                                                            {e}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="pCode">
                                                <input
                                                    name="postalCode"
                                                    type="text"
                                                    minLength={4}
                                                    maxLength={4}
                                                    pattern="[0-9]*"
                                                    inputMode="numeric"
                                                    value={orderInfo.postalCode}
                                                    onChange={(e) => handleInputEdit(e)}
                                                    required
                                                    placeholder=""
                                                ></input>
                                                <label htmlFor="postalCode">Postal Code</label>
                                            </div>
                                        </div>
                                        <button
                                            className="nextButton"
                                            disabled={!collectionFormValid}
                                        >
                                            Next
                                        </button>
                                    </form>
                                </CSSTransition>
                            </div>
                            <div className="payment">
                                <button
                                    className={`titleButton ${!collectionFormValid && "inactive"
                                        }`}
                                    onClick={handlePaymentClick}
                                    disabled={cartState === "payment" || !collectionFormValid}
                                >
                                    <h3>
                                        <span>
                                            <svg viewBox="0 0 256 256">
                                                <path
                                                    fill="currentColor"
                                                    d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 16v24H32V64Zm0 128H32v-88h192v88Zm-16-24a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Zm-64 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Z"
                                                />
                                            </svg>
                                            <span>Payment Info</span>
                                        </span>
                                        <svg className="arrow" viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                                            />
                                        </svg>
                                    </h3>
                                </button>
                                <CSSTransition
                                    in={cartState === "payment"}
                                    timeout={200}
                                    classNames="checkoutForm"
                                    unmountOnExit
                                    nodeRef={paymentref}
                                >
                                    <form
                                        className="checkoutForm"
                                        ref={paymentref}
                                        name="paymentForm"
                                        onSubmit={(e) => handleSubmitForm(e)}
                                    >
                                        <h4>Payment Method</h4>
                                        <div className="paymethod">
                                            <button
                                                disabled={orderInfo.paymentMethod === "prepaid"}
                                                name="prepaid"
                                                onClick={handlePaymentMethodChange}
                                            >
                                                Pre-paid
                                            </button>
                                            <button
                                                disabled={orderInfo.paymentMethod === "ondelivery"}
                                                name="ondelivery"
                                                onClick={handlePaymentMethodChange}
                                            >
                                                On Delivery
                                            </button>
                                        </div>
                                        {orderInfo.paymentMethod === "prepaid" ? (
                                            <>
                                                <h4>
                                                    Card Info
                                                    <button disabled={!isLoggedIn || userData?.cards.length < 1} onClick={handleCardAutofill}>
                                                        <span>Autofill</span>
                                                        <svg viewBox="0 0 24 24">
                                                            <path
                                                                fill="currentColor"
                                                                d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29c-.26 0-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7l1.41 1.41L14.41 11L13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11L13 12.41l-7.17 7.18z"
                                                            />
                                                        </svg>
                                                    </button>
                                                    {showCards && (
                                                        <ul className="autoCards">
                                                            {userData?.cards.map((card) => (
                                                                <li key={card.id}>
                                                                    <button
                                                                        disabled={
                                                                            cardObject.number === card.number &&
                                                                            cardObject.holder === card.holder &&
                                                                            cardObject.date === card.date
                                                                        }
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            handleAutoFillCards(card)
                                                                        }}
                                                                    >
                                                                        <p>{card.holder}</p>
                                                                        <p>{card.date}</p>
                                                                        <p>{card.number}</p>
                                                                        <svg viewBox="0 0 32 32">
                                                                            <path
                                                                                fill="currentColor"
                                                                                d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                                                                            />
                                                                            <path
                                                                                fill="currentColor"
                                                                                d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z"
                                                                            />
                                                                        </svg>
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </h4>
                                                <CardHelper
                                                    card={cardObject}
                                                    handleSetInputValue={handleSetInputValue}
                                                    handleCardNumberChange={handleCardNumberChange}
                                                    handleDateChange={handleDateChange}
                                                ></CardHelper>
                                                <button
                                                    type="button"
                                                    className={`saveCardButton ${orderInfo.saveCard && "active"}`}
                                                    disabled={
                                                        userData?.cards.some(
                                                            (card) =>
                                                                card.holder === cardObject.holder &&
                                                                card.number === cardObject.number &&
                                                                card.date === cardObject.date
                                                        ) || !paymentFormValid || userData?.cards.length >= 2 || !isLoggedIn
                                                    }
                                                    onClick={handleSaveCard}
                                                >
                                                    <svg viewBox="0 0 32 32">
                                                        <path
                                                            fill="currentColor"
                                                            d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z"
                                                        />
                                                    </svg>
                                                    <p>Save Card</p>
                                                    <p>
                                                        Check this to save current card to your account.
                                                    </p>
                                                </button>
                                            </>
                                        ) : (
                                            <div className="onDeliveryDiv">
                                                <h3>In-Person Payment</h3>
                                                <DeliverySvg></DeliverySvg>
                                                <p>The payment method relies on the courier.</p>
                                            </div>
                                        )}
                                        <div
                                            className={`nextButtondiv ${(!collectionFormValid || !paymentFormValid) &&
                                                "disabled"
                                                }`}
                                            onMouseMove={handleOnMouseEnter}
                                            style={{
                                                "--x": xAndY.x,
                                                "--y": xAndY.y,
                                            }}
                                        >
                                            <button
                                                className="nextButton"
                                                disabled={!collectionFormValid || !paymentFormValid}
                                            >
                                                Confirm Purchase
                                            </button>
                                        </div>
                                    </form>
                                </CSSTransition>
                            </div>
                        </div>
                    )}

                    <div className="cart-items">
                        <h2 className="subTitle">Cart Items</h2>
                        {cartState !== "default" && (
                            <ul className="pricesUl">
                                <li>
                                    <p>Subtotal</p>
                                    <h4>{subtotal}$</h4>
                                </li>
                                <li>
                                    <p>Shipping</p>
                                    <h4>{(shippingCost && `${shippingCost}$`) || "Free"}</h4>
                                </li>
                                <li>
                                    <p>Total</p>
                                    <h3>
                                        <span>{total}$</span>
                                    </h3>
                                </li>
                            </ul>
                        )}

                        <ul className="itemUl">
                            {orderItems?.map((e) => (
                                <CartItem
                                    key={e.id}
                                    item={e}
                                    cartState={cartState}
                                    handleChangeOrderAmount={handleChangeOrderAmount}
                                    handleRemove={handleRemoveOrderItem}
                                ></CartItem>
                            ))}
                        </ul>
                    </div>

                    {cartState === "default" && (
                        <div className="summary subTitle">
                            <h2 className="title">Summary</h2>
                            <ul className="pricesUl">
                                <li>
                                    <p>Subtotal</p>
                                    <h4>{subtotal}$</h4>
                                </li>
                                <li>
                                    <p>Shipping</p>
                                    <h4>{(shippingCost && `${shippingCost}$`) || "Free"}</h4>
                                </li>
                                <li>
                                    <p>Total</p>
                                    <h3>
                                        <span>{total}$</span>
                                    </h3>
                                </li>
                            </ul>
                            <ul className="infoUl">
                                <li>
                                    <h4>
                                        <svg viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M10.95 15.55L16.6 9.9l-1.425-1.425L10.95 12.7l-2.1-2.1l-1.425 1.425l3.525 3.525ZM12 22q-3.475-.875-5.737-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Z"
                                            />
                                        </svg>
                                        <span>C&S+ buyer protection</span>
                                    </h4>
                                    <p>
                                        We guarantee that you will receive your order or get your
                                        money back. Learn More
                                    </p>
                                </li>
                                <li>
                                    <button onClick={handleCollectionClick}>Checkout</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div className="cartEmptyDiv">
                    <EmptyCard></EmptyCard>
                    <NavLink to={"/"}>
                        <h1>your cart is empty</h1>
                        <p>add items to your cart, no need for an account</p>
                    </NavLink>
                </div>
            )}

            <div className="block-header">
                <div>
                    <h1>Popular products</h1>
                    <NavLink to={'/'}>
                        <p>Browse All</p>
                        <svg viewBox="0 0 32 32">
                            <path
                                fill="currentColor"
                                d="m30 28.586l-4.689-4.688a8.028 8.028 0 1 0-1.414 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zM2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"
                            />
                        </svg>
                    </NavLink>
                </div>
            </div>

            {popularIsPending || popularIsError ? (
                <LoadingErrorDiv
                    isError={popularIsError}
                    classTitle={"popularProductsMain"}
                    errorMessage={popularError?.message}
                    refetch={popularRefetch}
                    loadMessage={"Loading Popular Products"}
                ></LoadingErrorDiv>
            ) : popularSuccess ? (
                <div className="related-products">
                    {popularProducts.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (<></>)}

            <CSSTransition
                in={finalPayment && cartState === "final"}
                timeout={300}
                classNames="finalPayment"
                unmountOnExit
                nodeRef={finalref}
            >
                <dialog className="finalPayment" ref={finalref}>
                    <h1>
                        <span>Confirm Purchase</span>
                        <button onClick={handleCancel}>Cancel</button>
                    </h1>
                    <div className="orderDiv">
                        <h3>
                            Order Items<span>Total Price:</span>
                            <span>{orderInfo?.total.toFixed()}$</span>
                        </h3>
                        <ul className="itemUl">
                            {orderItems?.map((e) => (
                                <CartItem
                                    key={e.id}
                                    item={e}
                                    cartState={cartState}
                                    handleChangeOrderAmount={handleChangeOrderAmount}
                                    handleRemove={handleRemoveOrderItem}
                                ></CartItem>
                            ))}
                        </ul>
                    </div>
                    <div className="specialRequest">
                        <h3>
                            Special Message <span>(Optional)</span>
                        </h3>
                        <textarea
                            name="note"
                            cols="30"
                            rows="10"
                            placeholder=""
                            value={orderInfo.note}
                            onChange={handleInputEdit}
                        ></textarea>
                    </div>
                    <button onClick={handlePurchase}>Purchase</button>
                </dialog>
            </CSSTransition>
        </main>
    )
}

const CartItem = ({
    cartState,
    item,
    handleChangeOrderAmount,
    handleRemove,
}) => {
    return (
        <li className={`itemLi ${cartState !== "default" && "concise"}`}>
            <ImageLoader
                url={item.image}
                alt={item.name}
                backupUrl="/imgs/404/product404.png"
                backupAlt="Product Image 404"
            ></ImageLoader>
            <div className="itemInfo">
                <h3 className="title">{item.name}</h3>
                <ul>
                    <li>
                        <span>Price:</span>
                        {item.discount > 1 && <p>{item.price.toFixed()}$</p>}
                        <h3>{item.total.toFixed()}$</h3>
                    </li>
                    {item.color && (
                        <li>
                            <svg viewBox="0 0 32 32">
                                <circle cx="16" cy="16" r="14" fill={item.color} />
                            </svg>
                            <p>{item.color}</p>
                        </li>
                    )}
                    {item.size && (
                        <li>
                            <span>Size:</span>
                            <p>{item.size}</p>
                        </li>
                    )}
                </ul>
                <ul>
                    <li>
                        <p>
                            Amount: {cartState !== "default" && <span>{item.quantity}</span>}
                        </p>
                        {cartState === "default" && (
                            <div>
                                <button
                                    disabled={item.quantity <= 1}
                                    onClick={() =>
                                        handleChangeOrderAmount({
                                            id: item.id,
                                            quantity: item.quantity - 1,
                                        })
                                    }
                                >
                                    -
                                </button>
                                <h3>{item.quantity}</h3>
                                <button
                                    disabled={item.quantity >= item.stock}
                                    onClick={() =>
                                        handleChangeOrderAmount({
                                            id: item.id,
                                            quantity: item.quantity + 1,
                                        })
                                    }
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </li>
                    <li>
                        <h3 className="totalPrice">
                            <span>Total:</span> {(item.total * item.quantity).toFixed()}$
                        </h3>
                    </li>
                    {cartState === "default" && (
                        <li>
                            <button
                                className="remove"
                                onClick={() => handleRemove([item.id])}
                            >
                                <svg viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z" />
                                    <path
                                        fill="currentColor"
                                        d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"
                                    />
                                </svg>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </li>
    )
}

export default Cart
