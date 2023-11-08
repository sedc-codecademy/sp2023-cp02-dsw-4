import React, { useState } from "react"
import Stars, { EditStars } from "../Stars/Stars"
import { formatDate, addSpaceAfterComma } from "../UsefullComponents/Usefull"
import ImageLoader from "../ImageLoader/ImageLoader"
import { NavLink } from "react-router-dom"

function Reviews(props) {
    return (
        <li className="review">
            <div className="review-header">
                <ImageLoader
                    url={props.review.image || ""}
                    alt={props.review.title || ""}
                    backupUrl="/imgs/404/user404.png"
                    backupAlt="Usere 404"
                ></ImageLoader>
                <div className="review-author-info">
                    <p className="review-author">{props.review.author}</p>
                    <Stars
                        initialRating={props.review.rate}
                        id={props.review.id}
                        shouldHover={false}
                    ></Stars>
                </div>
                <p className="review-date">{formatDate(props.review.date)}</p>
            </div>
            <p className="review-body">{props.review.body}</p>
            {(props.review.good.length > 0 || props.review.bad.length > 0) && (
                <div className="key-points">
                    {props.review.good.length > 0 && (
                        <div className="good">
                            <svg viewBox="0 0 32 32" className="good">
                                <path
                                    fill="currentColor"
                                    d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                />
                            </svg>
                            <p>{addSpaceAfterComma(props.review.good)}</p>
                        </div>
                    )}
                    {props.review.bad.length > 0 && (
                        <div className="bad">
                            <svg viewBox="0 0 32 32" className="bad">
                                <path
                                    fill="currentColor"
                                    d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                />
                            </svg>
                            <p>{addSpaceAfterComma(props.review.bad)}</p>
                        </div>
                    )}
                </div>
            )}
        </li>
    )
}

export function EditReview(props) {
    const [body, setBody] = useState(props.review.body)
    const [date, setDate] = useState(formatDate(props.review.date))
    const [bad, setBad] = useState(addSpaceAfterComma(props.review.bad))
    const [good, setGood] = useState(addSpaceAfterComma(props.review.good))
    const [rating, setRating] = useState(props.review.rate)
    const [edit, setEdit] = useState(false)

    const handleResetReview = () => {
        setBody(props.review.body)
        setBad(props.review.bad)
        setGood(props.review.good)
        setRating(props.review.rate)
    }

    const handleKeys = (e) => {
        const { name, value } = e.target
        if (name === "bad") {
            setBad(addSpaceAfterComma(value))
        } else if (name === "good") {
            setGood(addSpaceAfterComma(value))
        } else {
            setBody(value)
        }
    }

    const handleSetDate = () => {
        if (!edit) {
            setDate(formatDate(props.review.date))
        } else {
            setDate(formatDate())
        }
    }

    const handleEdit = () => {
        setEdit(!edit)
        handleSetDate()
    }

    const handleSetRating = (e) => {
        setRating(Number(e))
    }
    const handleSave = () => {
        console.log('Should request to update')
    }

    return (
        <li className="review editReview">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div className="review-header">
                    <ImageLoader
                        url={props.review.image || ""}
                        alt={props.review.title || ""}
                        backupUrl="/imgs/404/user404.png"
                        backupAlt="Usere 404"
                    ></ImageLoader>
                    <div className="review-author-info">
                        <p className="review-author">{props.review.author}</p>
                        {edit ? (
                            <EditStars
                                initialRating={rating}
                                id={props.review.id}
                                onClick={handleSetRating}
                            ></EditStars>
                        ) : (
                            <Stars
                                initialRating={props.review.rate}
                                id={props.review.id}
                            ></Stars>
                        )}
                    </div>
                    <p className="review-date">{date}</p>
                </div>
                {edit ? (
                    <textarea
                        className="review-textArea"
                        name="body"
                        type="text"
                        value={body}
                        onChange={(e) => handleKeys(e)}
                        pattern="[a-zA-Z, ]+"
                        required
                        placeholder="Good sides for this product seperated by commas"
                    ></textarea>
                ) : (
                    <p className="review-body">{props.review.body}</p>
                )}
                <div className="editFooter">
                    {(props.review.good.length > 0 || props.review.bad.length > 0) && (
                        <div className="key-points">
                            {props.review.good.length > 0 && (
                                <div className="good">
                                    <svg viewBox="0 0 32 32" className="good">
                                        <path
                                            fill="currentColor"
                                            d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                        />
                                    </svg>
                                    {edit ? (
                                        <input
                                            name="good"
                                            type="text"
                                            value={good}
                                            onChange={(e) => handleKeys(e)}
                                            pattern="[a-zA-Z0-9, ]+"
                                            required
                                            placeholder="Good sides for this product seperated by commas"
                                        ></input>
                                    ) : (
                                        <p>{good}</p>
                                    )}
                                </div>
                            )}
                            {props.review.bad.length > 0 && (
                                <div className="bad">
                                    <svg viewBox="0 0 32 32" className="bad">
                                        <path
                                            fill="currentColor"
                                            d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                        />
                                    </svg>
                                    {edit ? (
                                        <input
                                            name="bad"
                                            type="text"
                                            value={bad}
                                            onChange={(e) => handleKeys(e)}
                                            pattern="[a-zA-Z0-9, ]+"
                                            required
                                            placeholder="Good sides for this product seperated by commas"
                                        ></input>
                                    ) : (
                                        <p>{bad}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                    <div className="editButtons">
                        {edit ? (<>
                            <button onClick={handleEdit}>Cancel</button>
                            <button onClick={handleResetReview}>Reset</button>
                            <button onClick={handleSave}>Save</button>
                        </>) : (<button className="editButton" onClick={handleEdit}>Edit</button>)}
                    </div>
                </div>
            </form>
        </li>
    )
}

export function UserReviews(props) {
    const [body, setBody] = useState(props.review.body)
    const [date, setDate] = useState(formatDate(props.review.date))
    const [bad, setBad] = useState(addSpaceAfterComma(props.review.bad))
    const [good, setGood] = useState(addSpaceAfterComma(props.review.good))
    const [rating, setRating] = useState(props.review.rate)
    const [edit, setEdit] = useState(false)

    const handleResetReview = () => {
        setBody(props.review.body)
        setBad(props.review.bad)
        setGood(props.review.good)
        setRating(props.review.rate)
    }

    const handleKeys = (e) => {
        const { name, value } = e.target
        if (name === "bad") {
            setBad(addSpaceAfterComma(value))
        } else if (name === "good") {
            setGood(addSpaceAfterComma(value))
        } else {
            setBody(value)
        }
    }

    const handleSetDate = () => {
        if (!edit) {
            setDate(formatDate(props.review.date))
        } else {
            setDate(formatDate())
        }
    }

    const handleEdit = () => {
        setEdit(!edit)
        handleSetDate()
    }

    const handleSetRating = (e) => {
        setRating(Number(e))
    }
    const handleSave = () => {
        console.log('Should request to update')
    }
    return (
        <li className="review userReview editReview">
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className="contentDiv">
                    <div className="review-header">
                        <ImageLoader
                            url={props.review.image || ""}
                            alt={props.review.title || ""}
                            backupUrl="/imgs/404/user404.png"
                            backupAlt="Usere 404"
                        ></ImageLoader>
                        <div className="review-author-info">
                            <p className="review-author">{props.review.author}</p>
                            {edit ? (
                                <EditStars
                                    initialRating={rating}
                                    id={props.review.id}
                                    onClick={handleSetRating}
                                ></EditStars>
                            ) : (
                                <Stars
                                    initialRating={props.review.rate}
                                    id={props.review.id}
                                ></Stars>
                            )}
                        </div>
                        <p className="review-date">{formatDate(props.review.date)}</p>
                    </div>
                    {edit ? (
                        <textarea
                            className="review-textArea"
                            name="body"
                            type="text"
                            value={body}
                            onChange={(e) => handleKeys(e)}
                            pattern="[a-zA-Z, ]+"
                            required
                            placeholder="Good sides for this product seperated by commas"
                        ></textarea>
                    ) : (
                        <p className="review-body">{props.review.body}</p>
                    )}
                    <div className="editFooter">
                        {(props.review.good.length > 0 || props.review.bad.length > 0) && (
                            <div className="key-points">
                                {props.review.good.length > 0 && (
                                    <div className="good">
                                        <svg viewBox="0 0 32 32" className="good">
                                            <path
                                                fill="currentColor"
                                                d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                            />
                                        </svg>
                                        {edit ? (
                                            <input
                                                name="good"
                                                type="text"
                                                value={good}
                                                onChange={(e) => handleKeys(e)}
                                                pattern="[a-zA-Z0-9, ]+"
                                                required
                                                placeholder="Good sides for this product seperated by commas"
                                            ></input>
                                        ) : (
                                            <p>{good}</p>
                                        )}
                                    </div>
                                )}
                                {props.review.bad.length > 0 && (
                                    <div className="bad">
                                        <svg viewBox="0 0 32 32" className="bad">
                                            <path
                                                fill="currentColor"
                                                d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                            />
                                        </svg>
                                        {edit ? (
                                            <input
                                                name="bad"
                                                type="text"
                                                value={bad}
                                                onChange={(e) => handleKeys(e)}
                                                pattern="[a-zA-Z0-9, ]+"
                                                required
                                                placeholder="Good sides for this product seperated by commas"
                                            ></input>
                                        ) : (
                                            <p>{bad}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="editButtons">
                            {edit ? (<>
                                <button onClick={handleEdit}>Cancel</button>
                                <button onClick={handleResetReview}>Reset</button>
                                <button onClick={handleSave}>Save</button>
                            </>) : (<button className="editButton" onClick={handleEdit}>Edit</button>)}
                        </div>
                    </div>
                </div>
            </form>
            <NavLink
                to={`/productDetails/${props.review.product.id}`}
                className="product"
            >
                <ImageLoader
                    url={props.review.product.image || ""}
                    alt={props.review.product.title || ""}
                    backupUrl="/imgs/404/product404.png"
                    backupAlt="Product 404"
                ></ImageLoader>
                <p>{props.review.product.title}</p>
            </NavLink>
        </li>
    )
}

export default Reviews
