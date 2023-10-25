import React from "react"
import Stars from "../Stars/Stars"
import { formatDate } from "../UsefullComponents/Usefull"

function KeyPoints(props) {
    return (
        <li>
            {props.point}
            {props.last ? "." : ","}
        </li>
    )
}

function Reviews(props) {
    return (
        <li className="review">
            <div className="review-header">
                <img src="/imgs/user.png" alt="Reviewer Avatar" className="review-avatar" />
                <div className="review-author-info">
                    <p className="review-author">{props.review.author}</p>
                    <p className="review-date">{formatDate(props.review.date)}</p>
                </div>
                <p className="verified">
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M10.95 15.55L16.6 9.9l-1.425-1.425L10.95 12.7l-2.1-2.1l-1.425 1.425l3.525 3.525ZM12 22q-3.475-.875-5.737-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Z"
                        />
                    </svg>
                    <span>Verified purchase</span>
                </p>
            </div>
            <div className="review-body">
                <h3>
                    <span>{props.review.title}</span>
                    <Stars initialRating={props.review.rate} id={props.review.id}></Stars>
                </h3>
                <p className="review-text">{props.review.body}</p>
            </div>

            {(props.review.good.length || props.review.bad.length) &&
                <div className="key-points">
                    {props.review.good.length > 0 &&
                        <ul>
                            <li>
                                <svg viewBox="0 0 32 32" className="good">
                                    <path
                                        fill="currentColor"
                                        d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z"
                                    />
                                </svg>
                            </li>
                            {props.review.good.map((point, index) => (
                                <KeyPoints
                                    key={index}
                                    point={point}
                                    last={index + 1 === props.review.good.length}
                                />
                            ))}
                        </ul>}
                    {props.review.bad.length > 0 &&
                        <ul>
                            <li>
                                <svg viewBox="0 0 32 32" className="bad"><path fill="currentColor" d="M30 16V9a7.008 7.008 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4ZM8 14H4V4h4Zm20 2a2.002 2.002 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z" /></svg>
                            </li>
                            {props.review.bad.map((point, index) => (
                                <KeyPoints
                                    key={index}
                                    point={point}
                                    last={index + 1 === props.review.bad.length}
                                />
                            ))}
                        </ul>
                    }
                </div>}
        </li>
    )
}

export default Reviews
