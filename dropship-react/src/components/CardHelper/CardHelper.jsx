import React, { useState, useEffect } from "react"
import Card, { NewCard } from "../Cart/Card/Card"
import { formatAsMMYY, formatNumberWithSpaces } from "./CardFunctions"
import { CardSvg } from "../Cart/Card/CardSvgs"
import { setCardFormValueID, setCardStatusID, setCardTypeID, setCreateCard, setNewCardFormValue, setNewCardType, setRemoveCardID } from "../../store/slices/cardSlice/cardSlice"

import { useSelector, useDispatch } from "react-redux"
import { cardInfoValidity, isInfoValid } from "../UsefullComponents/Usefull"

function CardHelper({ card, handleCardNumberChange, handleDateChange, handleSetInputValue }) {
    const [flipped, setFlipped] = useState(false)

    const flipCard = () => {
        setFlipped(!flipped)
    }

    const handleFocus = (e) => {
        const { name } = e.target
        if (name === 'cvc') {
            setFlipped(true)
        } else if (flipped) setFlipped(false)
    }

    return (
        <>
            <div className="cardContainer">
                <Card cardFlipped={flipped} flipCard={flipCard} card={card} originalCard={card}></Card>
            </div>
            <div className="inputContainer">
                <input
                    name="holder"
                    maxLength="20"
                    minLength="6"
                    pattern="[a-zA-Z ]+"
                    type="text"
                    required
                    placeholder=""
                    value={card.holder}
                    onFocus={e => handleFocus(e)}
                    onChange={(e) => handleSetInputValue(e)}
                ></input>
                <label htmlFor="holder">Card Holder</label>
            </div>
            <div className="inputContainer">
                <input
                    name="number"
                    type="text"
                    pattern="^[0-9 ]*[0-9]$"
                    inputMode="decimal"
                    maxLength={19}
                    minLength={19}
                    required
                    placeholder=""
                    onFocus={e => handleFocus(e)}
                    value={formatNumberWithSpaces(card.number)}
                    onChange={(e) => handleCardNumberChange(e)}
                ></input>
                <CardSvg small={true} cardType={card.type}></CardSvg>
                <label htmlFor="number">Card Number</label>
            </div>
            <div className="lastInputContainer">
                <div>
                    <input
                        name="date"
                        type="text"
                        pattern="[0-9\/]*"
                        inputMode="numeric"
                        required
                        placeholder=""
                        onFocus={e => handleFocus(e)}
                        value={formatAsMMYY(card.date)}
                        maxLength={5}
                        minLength={5}
                        onChange={(e) => handleDateChange(e)}
                    ></input>
                    <label htmlFor="date">Expiration (mm/yy)</label>
                </div>
                <div>
                    <input
                        name="cvc"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        maxLength={4}
                        minLength={3}
                        required
                        placeholder=""
                        onFocus={e => handleFocus(e)}
                        onChange={(e) => handleSetInputValue(e)}
                    ></input>
                    <label htmlFor="cvc">Security Code</label>
                </div>
            </div>
        </>
    )
}

export function SettingsCardHelper({ cardID }) {
    const [flipped, setFlipped] = useState(false)
    const dispatch = useDispatch()
    const cardPatterns = useSelector((state) => state.card.cardPatterns)
    const card = useSelector((state) => state.card.tempCards.find(card => card.id === cardID))
    const originalCard = useSelector((state) => state.user.userCards.find(card => card.id === cardID))

    const handleSetInputValue = (e) => {
        const { name, value } = e.target
        dispatch(setCardFormValueID({ name, value, cardID }))
    }

    const handleCardNumberChange = (e) => {
        const { name, value } = e.target
        const number = value.replace(/\D/g, "")

        const matchedPattern = cardPatterns.find(
            (pattern) => number.match(pattern.regex) !== null
        )

        dispatch(setCardTypeID({ cardID, matchedPattern }))
        dispatch(setCardFormValueID({ name, value: number, cardID }))
    }

    const handleDateChange = (e) => {
        const { name } = e.target
        let value = formatAsMMYY(e.target.value)
        dispatch(setCardFormValueID({ name, value, cardID }))
    }

    const setStatus = () => {
        dispatch(setCardStatusID(cardID))
    }

    const setRemoval = () => {
        dispatch(setRemoveCardID(cardID))
    }

    const flipCard = () => {
        setFlipped(!flipped)
    }

    const handleFocus = (e) => {
        const { name } = e.target
        if (name === 'cvc') {
            setFlipped(true)
        } else if (flipped) setFlipped(false)
    }

    return (
        <>
            <div className={`cardInfoDiv ${card.removal === true && 'setRemoval'}`}>
                <div className="cardContainer">
                    <Card cardFlipped={flipped} flipCard={flipCard} card={card} originalCard={originalCard}></Card>
                </div>
                <div className="inputContainer">
                    <p>Card holder: {originalCard.holder}</p>
                    <div>
                        <input
                            name="holder"
                            maxLength="20"
                            minLength={6}
                            pattern="[a-zA-Z ]+"
                            type="text"
                            required
                            placeholder=""
                            value={card.holder}
                            onFocus={e => handleFocus(e)}
                            onChange={(e) => handleSetInputValue(e)}
                            disabled={card.removal}
                        ></input>
                        <label htmlFor="holder">Card Holder</label>
                    </div>
                </div>
                <div className="inputContainer">
                    <p>Card number: {originalCard.number}</p>
                    <div>
                        <input
                            name="number"
                            type="text"
                            pattern="[0-9 ]*"
                            inputMode="decimal"
                            maxLength={19}
                            minLength={19}
                            required
                            placeholder=""
                            onFocus={e => handleFocus(e)}
                            value={formatNumberWithSpaces(card.number)}
                            onChange={(e) => handleCardNumberChange(e)}
                            disabled={card.removal}
                        ></input>
                        <CardSvg small={true} cardType={card.type}></CardSvg>
                        <label htmlFor="number">Card Number</label>
                    </div>
                </div>
                <div className="inputContainer lastInputContainer">
                    <div className="inpuptDIv">
                        <p>Card date: {originalCard.date}</p>
                        <div>
                            <input
                                name="date"
                                type="text"
                                pattern="[0-9\/]*"
                                required
                                placeholder=""
                                onFocus={e => handleFocus(e)}
                                value={formatAsMMYY(card.date)}
                                maxLength={5}
                                onChange={(e) => handleDateChange(e)}
                                disabled={card.removal}
                            ></input>
                            <label htmlFor="date">Expiration (mm/yy)</label>
                        </div>
                    </div>
                    <div className="inpuptDIv">
                        <p>Card cvc: {originalCard.cvc}</p>
                        <div>
                            <input
                                name="cvc"
                                type="text"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                maxLength={4}
                                minLength={3}
                                required
                                placeholder=""
                                value={card.cvc}
                                onFocus={e => handleFocus(e)}
                                onChange={(e) => handleSetInputValue(e)}
                                disabled={card.removal}
                            ></input>
                            <label htmlFor="cvc">Security Code</label>
                        </div>
                    </div>
                </div>
                <div className="cardButtons">
                    <button type="button" onClick={setStatus} disabled={card.cardStatus === 'PRIMARY'} className={`cardStatus ${card.removal ? 'active' : ''}`} >
                        <p>Primary card</p>
                        <svg viewBox="0 0 32 32">
                            <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
                            <path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" />
                        </svg>
                    </button>
                    <button type="button" onClick={setRemoval} className={`removeCard ${card.removal ? 'active' : ''}`}>
                        <p>Remove card</p>
                        <svg viewBox="0 0 32 32"><path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z" /><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z" /></svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export function NewCardHelper({ data }) {
    const [flipped, setFlipped] = useState(false)
    const dispatch = useDispatch()
    const cardPatterns = useSelector((state) => state.card.cardPatterns)
    const card = useSelector((state) => state.card.newCard)
    const userCards = useSelector((state) => state.user.userCards)

    const [newModifiedCard, setNewModifiedCard] = useState(null)
    const [newCardValid, setNewCardValid] = useState(false)

    useEffect(() => {
        let modifiedCard = {}
        for (let key in card) {
            if (card[key] !== '' && key !== 'id') {
                let isSameInAnyOriginalCard = data?.cards?.some(originalCard => card[key] === originalCard[key])
                if (isSameInAnyOriginalCard) {
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

        console.log(modifiedCard) ////////////////
        setNewModifiedCard(modifiedCard || null)
    }, [card, data])

    useEffect(() => {
        if (newModifiedCard) {
            setNewCardValid(isInfoValid(cardInfoValidity, newModifiedCard, ['holder', 'number', 'cvc', 'date']))
        }
    }, [newModifiedCard])

    const handleSetInputValue = (e) => {
        const { name, value } = e.target
        dispatch(setNewCardFormValue({ name, value }))
    }

    const handleCardNumberChange = (e) => {
        const { name, value } = e.target
        const number = value.replace(/\D/g, '')

        const matchedPattern = cardPatterns.find((pattern) => number.match(pattern.regex) !== null)
        dispatch(setNewCardType(matchedPattern))
        dispatch(setNewCardFormValue({ name, value: number }))
    }

    const handleDateChange = (e) => {
        const { name } = e.target
        let value = formatAsMMYY(e.target.value)
        dispatch(setNewCardFormValue({ name, value }))
    }

    const flipCard = () => {
        setFlipped(!flipped)
    }

    const handleFocus = (e) => {
        const { name } = e.target
        if (name === 'cvc') {
            setFlipped(true)
        } else if (flipped) setFlipped(false)
    }

    function checkForSimilarProperties(array, objectToCheck) {
        for (let obj of array) {
            if (obj.number === objectToCheck.number && obj.date === objectToCheck.date) {
                return true
            }
        }
        return false
    }

    const handleSaveCard = () => {
        if (newCardValid) {
            if (userCards.length > 0) {
                const hasMatchingProperties = checkForSimilarProperties(userCards, { number: card.number, date: card.date })
                if (hasMatchingProperties) return console.log('Card already exists')
                console.log('Should create card')
                dispatch(setCreateCard(false))
            } else {
                console.log('Should create card')
                dispatch(setCreateCard(false))
            }
        } else {
            console.log('Fill out all properties')
        }
    }

    const handleCancel = () => {
        dispatch(setCreateCard(false))
    }

    return (
        <>
            <div className="cardInfoDiv createCard">
                <div className="cardContainer">
                    <NewCard cardFlipped={flipped} flipCard={flipCard} card={card}></NewCard>
                </div>
                <div className="inputContainer">
                    <div>
                        <input
                            name="holder"
                            pattern="[a-zA-Z ]+"
                            type="text"
                            required
                            placeholder=""
                            maxLength="20"
                            minLength={6}
                            value={card.holder}
                            onFocus={e => handleFocus(e)}
                            onChange={(e) => handleSetInputValue(e)}
                        ></input>
                        <label htmlFor="holder">Card Holder</label>
                    </div>
                </div>
                <div className="inputContainer">
                    <div>
                        <input
                            name="number"
                            type="text"
                            pattern="[0-9 ]*"
                            inputMode="decimal"
                            maxLength={19}
                            minLength={19}
                            required
                            placeholder=""
                            onFocus={e => handleFocus(e)}
                            value={formatNumberWithSpaces(card.number)}
                            onChange={(e) => handleCardNumberChange(e)}
                        ></input>
                        <CardSvg small={true} cardType={card.type}></CardSvg>
                        <label htmlFor="number">Card Number</label>
                    </div>
                </div>
                <div className="inputContainer lastInputContainer">
                    <div className="inpuptDIv">
                        <div>
                            <input
                                name="date"
                                type="text"
                                pattern="[0-9\/]*"
                                required
                                placeholder=""
                                onFocus={e => handleFocus(e)}
                                value={formatAsMMYY(card.date)}
                                maxLength={5}
                                minLength={5}
                                onChange={(e) => handleDateChange(e)}
                            ></input>
                            <label htmlFor="date">Expiration (mm/yy)</label>
                        </div>
                    </div>
                    <div className="inpuptDIv">
                        <div>
                            <input
                                name="cvc"
                                type="text"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                maxLength={4}
                                minLength={3}
                                required
                                placeholder=""
                                value={card.cvc}
                                onFocus={e => handleFocus(e)}
                                onChange={(e) => handleSetInputValue(e)}
                            ></input>
                            <label htmlFor="cvc">Security Code</label>
                        </div>
                    </div>
                </div>
                <div className="cardButtons">
                    <button onClick={handleCancel}>
                        <p>Cancel</p>
                    </button>
                    <button onClick={handleSaveCard} disabled={!newCardValid}>
                        <p>Create</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardHelper