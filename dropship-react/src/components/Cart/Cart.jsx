import React, { useState } from "react"
import ImageLoader from "../ImageLoader/ImageLoader"
import { NavLink } from "react-router-dom"
import ProductCard from "../Product/ProductCard/ProductCard"

import { useDispatch, useSelector } from "react-redux"
import { selectProducts } from "../../store/selectors/productSelector"
import { setCardFormValue, setCardFormNumber, setCardType, setCardDate, flipCard } from "../../store/slices/cardSlice/cardSlice"
import Card from "./Card/Card"
import { CardSvg } from "./Card/CardSvgs"

function Cart() {
    const [cartState, setCartState] = useState("payment")
    const [showCards, setShowCards] = useState(false)

    const cardType = useSelector((state) => state.card.cardType)
    const cardObject = useSelector((state) => state.card.cardObject)
    const cardPatterns = useSelector((state) => state.card.cardPatterns)
    const cardFlipped = useSelector((state) => state.card.flipped)
    const dispatch = useDispatch()

    function formatNumberWithSpaces(input) {
        const value = input.replace(/\D/g, '')
        const formattedValue = value.replace(/(.{4})/g, '$1 ')
        return formattedValue.trim()
    }

    function formatAsMMYY(date) {
        const value = date.replace(/\D/g, '')

        const matches = value.match(/^(\d{1,2})(\d{0,2})$/)

        if (!matches) {
            return value.slice(0, -1)
        }
        
        // eslint-disable-next-line
        let [_, month, year] = matches

        if (year) {
            if (value.length === 3) {
                if (year !== '2') {
                    return value.slice(0, -1)
                }
            } else if (value.length === 4) {
                const secondYearDigit = parseInt(year[1], 10);
                if (secondYearDigit < 4 || secondYearDigit > 9) {
                    return month + (year ? '/' + year : '').slice(0, -1)
                }
            }
        }

        if (month && value.length >= 2) {
            month = parseInt(month, 10)
            if (month < 1 || month > 12) {
                return value.slice(0, -1)
            }
            month = month.toString().padStart(2, '0')
        }

        return month + (year ? '/' + year : '')
    }

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

    const handleCardInputChange = (e) => {
        const { name, value } = e.target
        dispatch(setCardFormValue({ name, value }))
    }

    const handleCardNumberChange = (e) => {
        const { value } = e.target
        const number = value.replace(/\D/g, '');

        const matchedPattern = cardPatterns.find((pattern) => number.match(pattern.regex) !== null)

        dispatch(setCardType(matchedPattern))
        dispatch(setCardFormNumber(value))
    }

    const handleDateChange = (e) => {
        dispatch(setCardDate(formatAsMMYY(e.target.value)))
    }

    const handleFocus = (e) => {
        const { name } = e.target
        if (name === 'cvc') {
            dispatch(flipCard(true))
        } else {
            if (cardFlipped) dispatch(flipCard(false))
        }
    }

    const products = useSelector(selectProducts)
    return (
        <main className="cartMain">
            <div className="cart">
                {cartState !== "default" && (
                    <div className="checkout">
                        <h2 className="mastertitle">
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
                            <button className="titleButton" onClick={handleCollectionClick} disabled={cartState === "collection"}>
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
                            {cartState === "collection" && (
                                <form action="">
                                    <h4>
                                        Personal Info
                                        <button>
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
                                        <div className="fname">
                                            <input
                                                type="text"
                                                maxLength="25"
                                                minLength="4"
                                                name="fname"
                                                required
                                                placeholder=""
                                            ></input>
                                            <label htmlFor="fname">First Name</label>
                                        </div>
                                        <div className="lname">
                                            <input
                                                type="text"
                                                maxLength="25"
                                                minLength="4"
                                                name="lname"
                                                required
                                                placeholder=""
                                            ></input>
                                            <label htmlFor="lname">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="inputContainer ePhone">
                                        <div className="fname">
                                            <input
                                                type="email"
                                                maxLength="25"
                                                minLength="8"
                                                name="email"
                                                required
                                                placeholder=""
                                            ></input>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="lname">
                                            <input
                                                name="phone"
                                                type="text"
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                                required
                                                placeholder=""
                                            ></input>
                                            <label htmlFor="phone">Phone Number</label>
                                        </div>
                                    </div>
                                    <h4>
                                        Shipping Address
                                        <button>
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
                                                maxLength="22"
                                                minLength="8"
                                                name="street"
                                                required
                                                placeholder=""
                                            ></input>
                                            <label htmlFor="street">Street Address</label>
                                        </div>
                                    </div>
                                    <div className="inputContainer cityAddress">
                                        <div className="city">
                                            <input
                                                type="text"
                                                maxLength="22"
                                                minLength="8"
                                                name="city"
                                                required
                                                placeholder=""
                                            ></input>
                                            <label htmlFor="city">City</label>
                                        </div>
                                        <div className="pCode">
                                            <input
                                                name="postal"
                                                type="text"
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                                required
                                                placeholder=""
                                            ></input>
                                            <label htmlFor="postal">Postal Code</label>
                                        </div>
                                    </div>
                                    <button className="nextButton" onClick={handlePaymentClick}>
                                        Next
                                    </button>
                                </form>
                            )}
                        </div>
                        <div className="payment">
                            <button className="titleButton" onClick={handlePaymentClick}>
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
                                    <svg viewBox="0 0 32 32">
                                        <path
                                            fill="currentColor"
                                            d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                                        />
                                    </svg>
                                </h3>
                            </button>
                            {cartState === "payment" && (
                                <form>
                                    <h4>Payment Method</h4>
                                    <div className="paymethod">
                                        <button>Pre-paid</button>
                                        <button disabled>On Delivery</button>
                                    </div>
                                    <h4>
                                        Card Info
                                        <button onClick={handleCardAutofill}>
                                            <span>Autofill</span>
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29c-.26 0-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7l1.41 1.41L14.41 11L13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11L13 12.41l-7.17 7.18z"
                                                />
                                            </svg>
                                        </button>
                                        {showCards &&
                                            <ul className="autoCards">
                                                <li>
                                                    <button>
                                                        <p>John Doe</p>
                                                        <p>06/35</p>
                                                        <p>3056 930902 5904</p>
                                                        <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" /></svg>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button disabled>
                                                        <p>Doe John</p>
                                                        <p>06/29</p>
                                                        <p>6759 6498 2643 8453</p>
                                                        <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" /></svg>
                                                    </button>
                                                </li>
                                            </ul>
                                        }
                                    </h4>
                                    <div className="cardContainer">
                                        <Card></Card>
                                    </div>
                                    <div className="inputContainer">
                                        <input
                                            name="holder"
                                            maxLength="20"
                                            type="text"
                                            required
                                            placeholder=""
                                            onFocus={e => handleFocus(e)}
                                            onChange={(e) => handleCardInputChange(e)}
                                        ></input>
                                        <label htmlFor="holder">Card Holder</label>
                                    </div>
                                    <div className="inputContainer">
                                        <input
                                            name="number"
                                            type="text"
                                            pattern="[0-9 ]*"
                                            inputMode="decimal"
                                            maxLength={19}
                                            required
                                            placeholder=""
                                            onFocus={e => handleFocus(e)}
                                            value={formatNumberWithSpaces(cardObject.number)}
                                            onChange={(e) => handleCardNumberChange(e)}
                                        ></input>
                                        <CardSvg small={true} cardType={cardType}></CardSvg>
                                        <label htmlFor="number">Card Number</label>
                                    </div>
                                    <div className="lastInputContainer">
                                        <div>
                                            <input
                                                name="date"
                                                type="text"
                                                pattern="[0-9/]*"
                                                inputMode="numeric"
                                                required
                                                placeholder=""
                                                onFocus={e => handleFocus(e)}
                                                value={formatAsMMYY(cardObject.date)}
                                                maxLength={5}
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
                                                required
                                                placeholder=""
                                                onFocus={e => handleFocus(e)}
                                                onChange={(e) => handleCardInputChange(e)}
                                            ></input>
                                            <label htmlFor="cvc">Security Code</label>
                                        </div>
                                    </div>
                                    <button className="saveCardButton">
                                        <svg viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
                                            />
                                            <path
                                                fill="none"
                                                d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
                                            />
                                        </svg>
                                        <p>Save Card</p>
                                    </button>
                                    <button className="nextButton">Confirm Purchase</button>
                                </form>
                            )}
                        </div>
                    </div>
                )}

                <div className="cart-items">
                    <h2>Cart Items</h2>
                    <ul className="itemUl">
                        <li className={`itemLi ${cartState !== "default" && "concise"}`}>
                            <ImageLoader
                                url={""}
                                alt={""}
                                backupUrl="/imgs/404/product404.png"
                                backupAlt="Product Image 404"
                            ></ImageLoader>
                            <div className="itemInfo">
                                <h3 className="title">Rainbow High</h3>
                                <ul>
                                    <li>
                                        <span>Price:</span>
                                        <p>75.99$</p>
                                        <h3>35.99$</h3>
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 32 32">
                                            <circle cx="16" cy="16" r="14" fill={"red"} />
                                        </svg>
                                        <p>{"red"}</p>
                                    </li>
                                    <li>
                                        <span>Size:</span>
                                        <p>{"large"}</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p>Amount: {cartState !== "default" && <span>1</span>}</p>
                                        {cartState === "default" && (
                                            <div>
                                                <button>-</button>
                                                <h3>2</h3>
                                                <button>+</button>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <h3 className="totalPrice">
                                            <span>Total:</span> 70.99$
                                        </h3>
                                    </li>
                                    {cartState === "default" && (
                                        <li>
                                            <button className="remove">
                                                <svg viewBox="0 0 32 32">
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 12h2v12h-2zm6 0h2v12h-2z"
                                                    />
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
                        <li className={`itemLi ${cartState !== "default" && "concise"}`}>
                            <ImageLoader
                                url={""}
                                alt={""}
                                backupUrl="/imgs/404/product404.png"
                                backupAlt="Product Image 404"
                            ></ImageLoader>
                            <div className="itemInfo">
                                <h3 className="title">Rainbow High World Tour Bus and Stage</h3>
                                <ul>
                                    <li>
                                        <span>Price:</span>
                                        <p>75.99$</p>
                                        <h3>35.99$</h3>
                                    </li>
                                    {cartState === "default" && (
                                        <>
                                            <li>
                                                <svg viewBox="0 0 32 32">
                                                    <circle cx="16" cy="16" r="14" fill={"red"} />
                                                </svg>
                                                <p>{"red"}</p>
                                            </li>
                                            <li>
                                                <span>Size:</span>
                                                <p>{"large"}</p>
                                            </li>
                                        </>
                                    )}
                                </ul>
                                <ul>
                                    <li>
                                        <p>Amount: {cartState !== "default" && <span>1</span>}</p>
                                        {cartState === "default" && (
                                            <div>
                                                <button>-</button>
                                                <h3>2</h3>
                                                <button>+</button>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <h3 className="totalPrice">
                                            <span>Total:</span> 70.99$
                                        </h3>
                                    </li>
                                    {cartState === "default" && (
                                        <li>
                                            <button className="remove">
                                                <svg viewBox="0 0 32 32">
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 12h2v12h-2zm6 0h2v12h-2z"
                                                    />
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
                    </ul>
                    {cartState !== "default" && (
                        <ul className="pricesUl">
                            <li>
                                <p>Subtotal</p>
                                <h4>399.99$</h4>
                            </li>
                            <li>
                                <p>Shipping</p>
                                <h4>25$</h4>
                            </li>
                            <li>
                                <p>Total</p>
                                <h3>
                                    <span>-39.99$</span>
                                    <span>400.99$</span>
                                </h3>
                            </li>
                        </ul>
                    )}
                </div>

                {cartState === "default" && (
                    <div className="summary">
                        <h2 className="title">Summary</h2>
                        <ul className="pricesUl">
                            <li>
                                <p>Subtotal</p>
                                <h4>399.99$</h4>
                            </li>
                            <li>
                                <p>Shipping</p>
                                <h4>25$</h4>
                            </li>
                            <li>
                                <p>Total</p>
                                <h3>
                                    <span>-39.99$</span>
                                    <span>400.99$</span>
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

            <div className="block-header">
                <div>
                    <h1>Related products</h1>
                    <NavLink>
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
            <div className="related-products">
                {products.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    )
}

export default Cart
