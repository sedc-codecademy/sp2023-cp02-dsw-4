import React, { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { clearNotification, setShowNotification } from "../../store/slices/notificationSlice/notificationSlice"

function Notification() {
    const dispatch = useDispatch()
    const notificationRef = useRef()
    const showNotification = useSelector((state) => state.notification.showNotification)
    const notificationTitle = useSelector((state) => state.notification.title)
    const notificationSuccess = useSelector((state) => state.notification.success)
    const notificationError = useSelector((state) => state.notification.error)

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                dispatch(setShowNotification(false))
                dispatch(clearNotification())
            }, 2700)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [showNotification, dispatch])

    const handleNotificationClick = () => dispatch(setShowNotification(false))

    return (
        <CSSTransition
            in={!!(showNotification && notificationTitle)}
            timeout={200}
            classNames="notification"
            unmountOnExit
            nodeRef={notificationRef}
        >
            <div ref={notificationRef} className={`notification ${notificationError ? "errorNotify" : "successNotify"}`} onClick={handleNotificationClick}>
                <h3>
                    {notificationError ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12" /><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z" /><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12" /></svg>
                    }
                    <span>{notificationTitle}</span>
                </h3>
                <p>{notificationError || notificationSuccess}</p>
            </div>
        </CSSTransition>
    )
}

export function LoginNotification() {
    const dispatch = useDispatch()
    const loginnotificationRef = useRef()
    const showNotification = useSelector((state) => state.notification.showNotification)
    const notificationTitle = useSelector((state) => state.notification.title)
    const notificationSuccess = useSelector((state) => state.notification.success)
    const notificationError = useSelector((state) => state.notification.error)

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                dispatch(setShowNotification(false))
                dispatch(clearNotification())
            }, 2700)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [showNotification, dispatch])

    const handleNotificationClick = () => {
        dispatch(setShowNotification(false))
        dispatch(clearNotification())
    }

    return (
        <CSSTransition
            in={!!(showNotification && notificationTitle)}
            timeout={200}
            classNames="notificationLogin"
            unmountOnExit
            nodeRef={loginnotificationRef}
        >
            <div ref={loginnotificationRef} className={`notificationLogin ${notificationError ? "errorNotify" : "successNotify"}`} onClick={handleNotificationClick}>
                <h3>
                    {notificationError ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12" /><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z" /><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12" /></svg>
                    }
                    <span>{notificationTitle}</span>
                </h3>
                <p>{notificationError || notificationSuccess}</p>
            </div>
        </CSSTransition>
    )
}

export default Notification