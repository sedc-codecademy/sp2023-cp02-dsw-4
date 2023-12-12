import React, { useEffect, useState } from "react"
import Stars, { EditStars } from "../Stars/Stars"
import { formatDate, addSpaceAfterComma } from "../UsefullComponents/Usefull"
import ImageLoader from "../ImageLoader/ImageLoader"
import { NavLink } from "react-router-dom"
import { EmptyReviewSvg } from "./review"
import { useDispatch } from "react-redux"
import { setNotificationData, setShowNotification } from "../../store/slices/notificationSlice/notificationSlice"
import { useCreateReview, useDeleteReview, useUpdateReview } from "../../helpers/UserHelper/UserHelper"

function Reviews(props) {
    return (
        <li className="review">
            <div className="review-header">
                <ImageLoader
                    url={props.review.image}
                    alt={props.review.name}
                    backupUrl="/imgs/404/user404.png"
                    backupAlt="Usere 404"
                ></ImageLoader>
                <div className="review-author-info">
                    <p className="review-author">{props.review.userFullName}</p>
                    <Stars
                        initialRating={props.review.rate}
                        id={props.review.id}
                        shouldHover={false}
                    ></Stars>
                </div>
                <p className="review-date">{formatDate(props.review.date)}</p>
            </div>
            <p className="review-body">{props.review.review}</p>
            {(props.review.pros.length > 0 || props.review.cons.length > 0) && (
                <div className="key-points">
                    {props.review.pros.length > 0 && (
                        <div className="good">
                            <svg viewBox="0 0 32 32" className="good">
                                <path
                                    fill="currentColor"
                                    d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                />
                            </svg>
                            <p>{addSpaceAfterComma(props.review?.pros || '')}</p>
                        </div>
                    )}
                    {props.review.cons.length > 0 && (
                        <div className="bad">
                            <svg viewBox="0 0 32 32" className="bad">
                                <path
                                    fill="currentColor"
                                    d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                />
                            </svg>
                            <p>{addSpaceAfterComma(props.review?.cons || '')}</p>
                        </div>
                    )}
                </div>
            )}
        </li>
    )
}

export function EditReview(props) {
    const dispatch = useDispatch()
    const deleteReview = useDeleteReview()
    const createReview = useCreateReview()
    const updateReview = useUpdateReview()
    const [body, setBody] = useState(props.review.review || '')
    const [cons, setCons] = useState(addSpaceAfterComma(props.review.cons || ''))
    const [pros, setPros] = useState(addSpaceAfterComma(props.review.pros || ''))
    const [rating, setRating] = useState(props.review.rate || 1)
    const [edit, setEdit] = useState(props.shouldEdit || false)
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        setIsEmpty(!props.review.cons && !props.review.pros && !props.review.review)
    }, [props.review])

    const handleResetReview = () => {
        setBody(props.review.review)
        setCons(props.review.cons)
        setPros(props.review.pros)
        setRating(props.review.rate)
    }

    const handleKeys = (e) => {
        const { name, value } = e.target
        if (name === "bad") {
            setCons(addSpaceAfterComma(value))
        } else if (name === "good") {
            setPros(addSpaceAfterComma(value))
        } else {
            setBody(value)
        }
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleSetRating = (e) => {
        setRating(Number(e))
    }

    const handleSave = async () => {
        if (rating > 0) {
            if (props.new) {
                const createReviewData = {
                    Review: body || '',
                    Pros: pros || '',
                    Cons: cons || '',
                    Rate: rating,
                    ProductId: props.productId,
                    UserId: props.userId,
                    Date: ''
                }
                const reviewStatus = await createReview(createReviewData)
                if (reviewStatus) {
                    props.handleCancel()
                    setEdit(!edit)
                }
            } else {
                const updateReviewData = {
                    id: props.review.id,
                    review: body || '',
                    pros: pros || '',
                    cons: cons || '',
                    rate: rating,
                    productId: props.productId,
                    userId: props.userId,
                    // Date: '',
                }
                const reviewStatus = await updateReview(updateReviewData)
                if (reviewStatus) setEdit(!edit)
            }
            return
        }
        dispatch(setNotificationData({ title: 'Please leave a rating', success: '', error: 'Click on the stars to change the rating' }))
        dispatch(setShowNotification(true))
    }

    const handleDelete = async () => {
        const deleteStatus = await deleteReview({ id: props.review.id, userId: props.userId })
        if (deleteStatus) setEdit(!edit)
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
                        url={props.review.image}
                        alt={props.review.name}
                        backupUrl="/imgs/404/user404.png"
                        backupAlt="Usere 404"
                    ></ImageLoader>
                    <div className="review-author-info">
                        <p className="review-author">{props.review.author || props.review.userFullName}</p>
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
                    <p className="review-date">{edit ? formatDate() : formatDate(props.review.date)}</p>
                </div>
                {edit ? (
                    <textarea
                        className="review-textArea"
                        name="body"
                        type="text"
                        value={body}
                        onChange={(e) => handleKeys(e)}
                        placeholder="Write about your experience with this product"
                    ></textarea>
                ) : (
                    <>
                        {isEmpty ?
                            <div className="emptyDiv">
                                <EmptyReviewSvg></EmptyReviewSvg>
                                <button onClick={handleEdit}>
                                    <h3>Review Empty</h3>
                                    <p>Write something nice about this product</p>
                                </button>
                            </div>
                            : <p className="review-body">{props.review.review}</p>}
                    </>
                )}
                <div className="editFooter">
                    {edit ? (
                        <>
                            <div className="key-points">
                                <div className="good">
                                    <svg viewBox="0 0 32 32" className="good">
                                        <path
                                            fill="currentColor"
                                            d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                        />
                                    </svg>
                                    <input
                                        name="good"
                                        type="text"
                                        value={pros}
                                        onChange={(e) => handleKeys(e)}
                                        pattern="[a-zA-Z0-9, ]+"
                                        placeholder="Good sides for this product seperated by commas"
                                    ></input>
                                </div>
                                <div className="bad">
                                    <svg viewBox="0 0 32 32" className="bad">
                                        <path
                                            fill="currentColor"
                                            d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                        />
                                    </svg>
                                    <input
                                        name="bad"
                                        type="text"
                                        value={cons}
                                        onChange={(e) => handleKeys(e)}
                                        pattern="[a-zA-Z0-9, ]+"
                                        placeholder="Good sides for this product seperated by commas"
                                    ></input>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {(props.review.pros.length > 0 ||
                                props.review.cons.length > 0) && (
                                    <div className="key-points">
                                        {props.review.pros.length > 0 && (
                                            <div className="good">
                                                <svg viewBox="0 0 32 32" className="good">
                                                    <path
                                                        fill="currentColor"
                                                        d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                                    />
                                                </svg>
                                                <p>{props.review.pros}</p>
                                            </div>
                                        )}
                                        {props.review.cons.length > 0 && (
                                            <div className="bad">
                                                <svg viewBox="0 0 32 32" className="bad">
                                                    <path
                                                        fill="currentColor"
                                                        d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                                    />
                                                </svg>
                                                <p>{props.review.cons}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                        </>
                    )}
                    {(!isEmpty || edit) &&
                        <div className="editButtons">
                            {edit ? (
                                <>
                                    <button type="button" onClick={props.handleCancel || handleEdit}>Cancel</button>
                                    <button type="button" onClick={handleResetReview}>Reset</button>
                                    {!props.new && <button type="button" className="deleteButton" onClick={handleDelete}>Delete</button>}
                                    <button type="button" onClick={handleSave}>Save</button>
                                </>
                            ) : (
                                <button type="button" className="editButton" onClick={handleEdit}>
                                    Edit
                                </button>
                            )}
                        </div>
                    }
                </div>
            </form>
        </li>
    )
}

export function UserReviews(props) {
    const dispatch = useDispatch()
    const deleteReview = useDeleteReview()
    const updateReview = useUpdateReview()
    const [body, setBody] = useState(props.review.review)
    const [date, setDate] = useState(formatDate(props.review.date))
    const [cons, setCons] = useState(addSpaceAfterComma(props.review.cons))
    const [pros, setPros] = useState(addSpaceAfterComma(props.review.pros))
    const [rating, setRating] = useState(props.review.rate)
    const [edit, setEdit] = useState(false)

    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        setIsEmpty(!props.review.cons && !props.review.pros && !props.review.review)
    }, [props.review])


    const handleResetReview = () => {
        setBody(props.review.review)
        setCons(props.review.cons)
        setPros(props.review.pros)
        setRating(props.review.rate)
    }

    const handleKeys = (e) => {
        const { name, value } = e.target
        if (name === "bad") {
            setCons(addSpaceAfterComma(value))
        } else if (name === "good") {
            setPros(addSpaceAfterComma(value))
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

    const handleSave = async () => {
        if (rating > 0) {
            const updateReviewData = {
                id: props.review.id,
                Review: body || '',
                Pros: pros || '',
                Cons: cons || '',
                Rate: rating,
                ProductId: props.review.productId,
                UserId: props.userId,
                Date: ''
            }
            const updateStatus = await updateReview(updateReviewData)
            if (updateStatus) setEdit(!edit)
            return
        }
        dispatch(setNotificationData({ title: 'Please leave a rating', success: '', error: 'Click on the stars to change the rating' }))
        dispatch(setShowNotification(true))
    }

    const handleDelete = () => {
        deleteReview({ id: props.review.id, productid: props.review.productId })
    }

    return (
        <li className="review userReview editReview">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div className="contentDiv">
                    <div className="review-header">
                        <ImageLoader
                            url={props.review.image}
                            alt={props.review.name}
                            backupUrl="/imgs/404/user404.png"
                            backupAlt="Usere 404"
                        ></ImageLoader>
                        <div className="review-author-info">
                            <p className="review-author">{props.userName}</p>
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
                        <p className="review-date">{edit ? date : formatDate(props.review.date)}</p>
                    </div>
                    {edit ? (
                        <textarea
                            className="review-textArea"
                            name="body"
                            type="text"
                            value={body}
                            onChange={(e) => handleKeys(e)}
                            placeholder="Write about your experience with this product"
                        ></textarea>
                    ) : (
                        <>
                            {isEmpty ?
                                <div className="emptyDiv">
                                    <EmptyReviewSvg></EmptyReviewSvg>
                                    <button onClick={handleEdit}>
                                        <h3>Review Empty</h3>
                                        <p>Write something nice about this product</p>
                                    </button>
                                </div>
                                : <p className="review-body">{props.review.review}</p>}
                        </>
                    )}
                    <div className="editFooter">
                        {edit ? (
                            <>
                                <>
                                    <div className="key-points">
                                        <div className="good">
                                            <svg viewBox="0 0 32 32" className="good">
                                                <path
                                                    fill="currentColor"
                                                    d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                                />
                                            </svg>
                                            <input
                                                name="good"
                                                type="text"
                                                value={pros}
                                                onChange={(e) => handleKeys(e)}
                                                pattern="[a-zA-Z0-9, ]+"
                                                placeholder="Good sides for this product seperated by commas"
                                            ></input>
                                        </div>
                                        <div className="bad">
                                            <svg viewBox="0 0 32 32" className="bad">
                                                <path
                                                    fill="currentColor"
                                                    d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                                />
                                            </svg>
                                            <input
                                                name="bad"
                                                type="text"
                                                value={cons}
                                                onChange={(e) => handleKeys(e)}
                                                pattern="[a-zA-Z0-9, ]+"
                                                placeholder="Bad sides for this product seperated by commas"
                                            ></input>
                                        </div>
                                    </div>
                                </>
                            </>
                        ) : (
                            <>
                                {(props.review.pros.length > 0 ||
                                    props.review.cons.length > 0) && (
                                        <div className="key-points">
                                            {props.review.pros.length > 0 && (
                                                <div className="good">
                                                    <svg viewBox="0 0 32 32" className="good">
                                                        <path
                                                            fill="currentColor"
                                                            d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                                        />
                                                    </svg>
                                                    <p>{props.review.pros}</p>
                                                </div>
                                            )}
                                            {props.review.cons.length > 0 && (
                                                <div className="bad">
                                                    <svg viewBox="0 0 32 32" className="bad">
                                                        <path
                                                            fill="currentColor"
                                                            d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                                        />
                                                    </svg>
                                                    <p>{props.review.cons}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                            </>
                        )}
                        <div className="editButtons">
                            {edit ? (
                                <>
                                    <div className="key-points">
                                        <div className="good">
                                            <svg viewBox="0 0 32 32" className="good">
                                                <path
                                                    fill="currentColor"
                                                    d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                                />
                                            </svg>
                                            <input
                                                name="good"
                                                type="text"
                                                value={pros}
                                                onChange={(e) => handleKeys(e)}
                                                pattern="[a-zA-Z0-9, ]+"
                                                placeholder="Good sides for this product seperated by commas"
                                            ></input>
                                        </div>
                                        <div className="bad">
                                            <svg viewBox="0 0 32 32" className="bad">
                                                <path
                                                    fill="currentColor"
                                                    d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                                />
                                            </svg>
                                            <input
                                                name="bad"
                                                type="text"
                                                value={cons}
                                                onChange={(e) => handleKeys(e)}
                                                pattern="[a-zA-Z0-9, ]+"
                                                placeholder="Good sides for this product seperated by commas"
                                            ></input>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {(props.review.pros.length > 0 ||
                                        props.review.cons.length > 0) && (
                                            <div className="key-points">
                                                {props.review.pros.length > 0 && (
                                                    <div className="good">
                                                        <svg viewBox="0 0 32 32" className="good">
                                                            <path
                                                                fill="currentColor"
                                                                d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                                            />
                                                        </svg>
                                                        <p>{props.review.pros}</p>
                                                    </div>
                                                )}
                                                {props.review.cons.length > 0 && (
                                                    <div className="bad">
                                                        <svg viewBox="0 0 32 32" className="bad">
                                                            <path
                                                                fill="currentColor"
                                                                d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"
                                                            />
                                                        </svg>
                                                        <p>{props.review.cons}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                </>
                            )}
                            {(!isEmpty || edit) &&
                                <div className="editButtons">
                                    {edit ? (
                                        <>
                                            <button type="button" onClick={props.handleCancel || handleEdit}>Cancel</button>
                                            <button type="button" onClick={handleResetReview}>Reset</button>
                                            {!props.new && <button type="button" className="deleteButton" onClick={handleDelete}>Delete</button>}
                                            <button type="button" onClick={handleSave}>Save</button>
                                        </>
                                    ) : (
                                        <button type="button" className="editButton" onClick={handleEdit}>
                                            Edit
                                        </button>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </form>
            <NavLink
                to={`/productDetails/${props.review.productId}`}
                className="product"
            >
                <ImageLoader
                    url={props.review.productImage}
                    alt={props.review.productName}
                    backupUrl="/imgs/404/product404.png"
                    backupAlt="Product 404"
                ></ImageLoader>
                <p>{props.review.productName}  <Stars
                    initialRating={props.review.productAvgRating}
                    id={props.review.productId}
                ></Stars></p>
            </NavLink>
        </li>
    )
}

export default Reviews
