import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import ImageLoader from "../ImageLoader/ImageLoader"
import { OrderSvg, UserOrder } from "../Order/Order"
import { NavLink } from "react-router-dom"
import { UserReviews } from "../Reviews/Reviews"
import { ReviewSvg } from "../Reviews/review"
import { CSSTransition } from "react-transition-group"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../helpers/API/user-api"

function User() {
  const [showDraft, setShowDraft] = useState(true)
  const [showPending, setShowPending] = useState(false)
  const [showCompleted, setShowCompleted] = useState(false)

  const orderInfo = useSelector((state) => state.cart.orderInfo)
  const orderItems = useSelector((state) => state.cart.orderItems)

  const tokens = useSelector(state => state.role.authTokens)
  const userid = useSelector(state => state.role.userid)

  const { data } = useQuery({
    queryKey: ['userQuery', userid],
    queryFn: () => getUser(userid),
    enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
  })

  const draftref = useRef()
  const pendingref = useRef()
  const completedref = useRef()

  if (data) {
    const completed = data.orders?.filter(order => order.status === 'Delivered')
    const pending = data.orders?.filter(order => order.status === 'OnTheWay' || order.status === 'Purchased')

    return (
      <main className="user-main">
        <div className="user-parent-info">
          <div className="user-image">
            <ImageLoader
              url={data.image}
              alt={data.name}
              backupUrl="/imgs/404/user404.png"
              backupAlt="User 404"
            ></ImageLoader>
          </div>

          <div className="user-info">
            <div className="nameDiv">
              <h3>
                <span>{data.firstName}</span> <span>{data.lastName}</span>
              </h3>
              <p>{data.role}</p>
            </div>
            <div className="contactDiv">
              <div>
                <svg viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="M18 30h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2zm-5-18a.94.94 0 0 0-1 1v6h2v9h4v-9h2v-6a.94.94 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2z"
                  />
                </svg>
                <h3>Contact</h3>
              </div>
              <ul>
                <li>
                  <svg viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M16 3A12.92 12.92 0 0 0 3 16v1a13 13 0 0 0 13 13h7v-2h-7A11 11 0 0 1 5 17v-1A10.94 10.94 0 0 1 16 5a10.64 10.64 0 0 1 11 11c0 3.59-1.4 5-3.66 5c-1.58 0-2.34-1.29-2.34-3v-8h-2v1.94A3.84 3.84 0 0 0 15.5 10a5.48 5.48 0 0 0-5.5 5.44v2.12A5.48 5.48 0 0 0 15.5 23a4.28 4.28 0 0 0 4-2.46A4.35 4.35 0 0 0 23.41 23c3.07 0 5.59-2 5.59-7A12.72 12.72 0 0 0 16 3Zm3 14.56a3.5 3.5 0 0 1-7 0v-2.12a3.5 3.5 0 0 1 7 0Z"
                    />
                  </svg>
                  <p>{data.email}</p>
                </li>
                <li className="info-bubble">
                  <svg viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3ZM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5Z"
                    />
                  </svg>
                  <p>{data.phoneNumber}</p>
                </li>
              </ul>
            </div>
            <div className="adressDiv">
              <div>
                <svg viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="M20 19h-2v-2h-4v2h-2v-2a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2zm-4-5a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1a1.001 1.001 0 0 0-1-1z"
                  />
                  <path
                    fill="currentColor"
                    d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 0 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
                  />
                </svg>
                <h3>Address</h3>
              </div>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M15 23h-2v-2h2v2m4-2h-2v2h2v-2m-4-4h-2v2h2v-2m-8 4H5v2h2v-2m0-4H5v2h2v-2m12 0h-2v2h2v-2m-4-4h-2v2h2v-2m4 0h-2v2h2v-2m2-4a2 2 0 0 1 2 2v12h-2V11H11v12H9v-8H3v8H1v-8a2 2 0 0 1 2-2h6v-2a2 2 0 0 1 2-2V7a2 2 0 0 1 2-2h2V1h2v4h2a2 2 0 0 1 2 2v2m-2 0V7h-6v2h6Z"
                    />
                  </svg>
                  <p>City: {data.city}</p>
                </li>
                <li>
                  <svg viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 0 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
                    />
                    <path
                      fill="currentColor"
                      d="M21 18h-2v-8h-6v8h-2v-8a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2Z"
                    />
                    <path fill="currentColor" d="M15 16h2v2h-2zm0-4h2v2h-2z" />
                  </svg>
                  <p>Postal Code: {data.postalCode}</p>
                </li>
                <li>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M2 2h20v20H2V2Zm2 2v16h16V4H4Zm6.177 2.216l-2.393 11.96l-1.96-.391L8.215 5.823l1.96.393Zm5.607-.393l2.393 11.962l-1.962.392l-2.392-11.961l1.961-.393ZM13 7v3h-2V7h2Zm0 4v3h-2v-3h2Zm0 4v3h-2v-3h2Z"
                    />
                  </svg>
                  <p>Street: {data.address}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block-header">
          <div>
            <h1>User Orders</h1>
            <NavLink to={'/cart'}>
              <p>View Cart</p>
              <svg viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="m30 28.586l-4.689-4.688a8.028 8.028 0 1 0-1.414 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zM2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"
                />
              </svg>
            </NavLink>
          </div>
        </div>
        {data.orders?.length || orderItems?.length ? (
          <div className="ordersDiv">
            {orderItems?.length > 0 &&
              <div className="draftDiv orderCo">
                <button onClick={() => setShowDraft(!showDraft)} className={`titleButton ${!showDraft && 'hidden'}`}>
                  <h2>Current Order</h2>
                  <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" /></svg>
                </button>
                <CSSTransition
                  in={showDraft}
                  timeout={200}
                  classNames="orderUL"
                  unmountOnExit
                  nodeRef={draftref}>
                  <ul className="orderUL single" ref={draftref}>
                    <UserOrder order={{ ...orderInfo, orderItems: [...orderItems] }} />
                  </ul>
                </CSSTransition>
              </div>}
            {pending?.length > 0 &&
              <div className="pendingOrders orderCo">
                <button onClick={() => setShowPending(!showPending)} className={`titleButton ${!showPending && 'hidden'}`}>
                  <h2>Pending Order</h2>
                  <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" /></svg>
                </button>
                <CSSTransition
                  in={showPending}
                  timeout={200}
                  classNames="orderUL"
                  unmountOnExit
                  nodeRef={pendingref}>
                  <ul className="orderUL" ref={pendingref}>
                    {pending.map((e) => (
                      <UserOrder key={e.id} order={e} />
                    ))}
                  </ul>
                </CSSTransition>
              </div>}
            {completed?.length > 0 &&
              <div className="completedOrders orderCo">
                <button onClick={() => setShowCompleted(!showCompleted)} className={`titleButton ${!showCompleted && 'hidden'}`}>
                  <h2>Completed Order</h2>
                  <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" /></svg>
                </button>
                <CSSTransition
                  in={showCompleted}
                  timeout={200}
                  classNames="orderUL"
                  unmountOnExit
                  nodeRef={completedref}>
                  <ul className={`orderUL ${completed.length === 1 && 'single'}`} ref={completedref}>
                    {completed.map((e) => (
                      <UserOrder key={e.id} order={e} />
                    ))}
                  </ul>
                </CSSTransition>
              </div>}
          </div>
        ) : (
          <div className="noDataIllustration">
            <OrderSvg></OrderSvg>
            <div>
              <h3>No orders found.</h3>
              <p>Completed, pending and drafted orders show up here</p>
            </div>
          </div>
        )}

        <div className="block-header">
          <div>
            <h1>User Reviews</h1>
            <NavLink to={'/'}>
              <p>Browse Products</p>
              <svg viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="m30 28.586l-4.689-4.688a8.028 8.028 0 1 0-1.414 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zM2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"
                />
              </svg>
            </NavLink>
          </div>
        </div>
        {data.ratings?.length ? (
          <div className="reviews">
            <ul className="reviews-ul">
              {data.ratings.map((e) => (
                <UserReviews key={e.id} review={e} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="noDataIllustration">
            <ReviewSvg></ReviewSvg>
            <div>
              <h3>No reviews found.</h3>
              <p>Reviews for products you've reviewd will show up here</p>
            </div>
          </div>
        )}
      </main>
    )
  }
}

export default User
