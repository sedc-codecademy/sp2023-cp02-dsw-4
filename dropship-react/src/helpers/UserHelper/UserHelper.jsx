import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { setIsError, setIsFetching, setShowLoading } from "../../store/slices/loaderSlice/loaderSlice"
import { clearTokens, setAuthTokens, setRole, setUserId } from "../../store/slices/role/roleSlice"
import { createCardApi, deleteCardApi, deleteUserApi, getUser, logInApi, logOutApi, registerApi, updateCardApi, updateUserApi } from '../API/user-api'
import { userLogIn, setUserCards, userLogOut } from "../../store/slices/user/userSlices"
import { clearCartCard, clearTempCards, setCreateCard, setTempCards } from "../../store/slices/cardSlice/cardSlice"
import { useNavigate } from 'react-router-dom'
import { setNotificationData, setShowNotification } from "../../store/slices/notificationSlice/notificationSlice"
import { createReviewApi, deleteReviewApi, updateReviewApi } from "../API/product-api"
import { purchaseOrderApi, updateOrderApi } from "../API/order-api"
import { purchase } from "../../store/slices/cartSlice/cartSlice"
import { clearPasswordInfo, clearUser } from "../../store/slices/userSettings/userSettingsSlices"

const navigateToHome = (navigate) => {
    setTimeout(() => {
        navigate('/')
    }, 1000)
}
///// FETCH USER
export default function UserHelper() {
    const tokens = useSelector(state => state.role.authTokens)
    const userid = useSelector(state => state.role.userid)
    const showLoading = useSelector(state => state.loader.showLoading)
    const cardPatterns = useSelector((state) => state.card.cardPatterns)
    const dispatch = useDispatch()
    const userQuery = useQuery({
        queryKey: ['userQuery', userid],
        queryFn: () => getUser(userid),
        enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
    })

    useEffect(() => {
        if (tokens?.accessToken && tokens?.refreshToken) {
            const { isLoading, isSuccess, isError, data, error } = userQuery
            if (isLoading) {
                dispatch(setIsFetching(true))
                if (!showLoading) dispatch(setShowLoading(true))
            }

            if (isError) {
                dispatch(setIsError(true))
                console.log(error)
            }

            if (isSuccess) {
                dispatch(setIsFetching(false))
                dispatch(setRole(data.role))
                if (data.cards.length > 0) {
                    const tempCardsForSetUser = []
                    const tempCardsForSetTemp = []

                    data.cards.forEach((card) => {
                        const number = card.number.replace(/\D/g, '')
                        const matchedPattern = cardPatterns.find((pattern) => number.match(pattern.regex) !== null)
                        if (matchedPattern) {
                            let updatedCard = { ...card, type: matchedPattern }
                            if (updatedCard.cardStatus === 1) {
                                updatedCard.cardStatus = 'PRIMARY'
                            } else if (updatedCard.cardStatus === 2) {
                                updatedCard.cardStatus = 'SECONDARY'
                            }
                            tempCardsForSetUser.push(updatedCard)

                            const emptyCard = Object.keys(updatedCard).reduce((obj, key) => {
                                obj[key] = (key === 'id' || key === 'cardStatus' || key === 'type') ? updatedCard[key] : ''
                                return obj
                            }, {})

                            emptyCard.originalStatus = updatedCard.cardStatus

                            tempCardsForSetTemp.push({ ...emptyCard, removal: false })
                        }
                    })

                    dispatch(setUserCards(tempCardsForSetUser))
                    dispatch(setTempCards(tempCardsForSetTemp))
                }
                dispatch(userLogIn())
            }
        }
    }, [tokens, showLoading, dispatch, userQuery, cardPatterns])
}

///// AUTH
export const useLogout = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const userid = useSelector(state => state.role.userid)
    const logOutMutate = useMutation({ mutationFn: logOutApi })

    const logout = async () => {
        try {
            await logOutMutate.mutateAsync({ ID: userid, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Log-Out Error', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: () => {
                        dispatch(clearTokens())
                        queryClient.resetQueries(["userQuery"])
                        dispatch(setShowLoading(true))
                        navigateToHome(navigate)
                        dispatch(setIsFetching(false))
                        dispatch(userLogOut())
                        dispatch(setRole('user'))
                        dispatch(setTempCards([]))
                    },
                })
        } catch (error) {
        }
    }
    return logout
}

export const useLogin = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const logInMutate = useMutation({ mutationFn: logInApi })

    const login = async (credentials) => {
        try {
            await logInMutate.mutateAsync(credentials,
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Login Error', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setAuthTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken }))
                        dispatch(setUserId(data.userid))
                        queryClient.resetQueries(["userQuery"])
                        navigateToHome(navigate)
                    },
                })
        } catch (error) {
        }
    }
    return login
}

export const useRegister = () => {
    const dispatch = useDispatch()
    const registerMutate = useMutation({ mutationFn: registerApi })

    const register = async (credentials) => {
        try {
            await registerMutate.mutateAsync(credentials,
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Register Error', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Register Succesfull', success: data.message, error: '' }))
                        dispatch(setShowNotification(true))
                    },
                })
        } catch (error) {
        }
    }
    return register
}

////// USER INFO
export const useUpdateUser = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateUserMutate = useMutation({ mutationFn: updateUserApi })
    const queryClient = useQueryClient()

    const updateUser = async (updatedData) => {
        try {
            await updateUserMutate.mutateAsync({ updatedData, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error updating user', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Succesfully Updated User', success: data.message, error: '' }))
                        dispatch(setShowNotification(true))
                        dispatch(clearUser())
                        dispatch(clearPasswordInfo())
                        queryClient.invalidateQueries(['userQuery'])
                    },
                })
        } catch (error) {
        }
    }
    return updateUser
}

export const useDeleteUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const deleteUserMutate = useMutation({ mutationFn: deleteUserApi })
    const queryClient = useQueryClient()
    const deleteUser = async (userData) => {
        try {
            await deleteUserMutate.mutateAsync({ ID: userData.id, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error deleting User', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(clearTokens())
                        queryClient.resetQueries(["userQuery"])
                        dispatch(setShowLoading(true))
                        navigateToHome(navigate)
                        dispatch(setIsFetching(false))
                        dispatch(userLogOut())
                        dispatch(setRole('user'))
                        dispatch(setTempCards([]))
                        setTimeout(() => {
                            dispatch(setNotificationData({ title: 'Successfully Deleted User', success: data.message, error: '' }))
                            dispatch(setShowNotification(true))
                        }, 2000);
                    },
                })
        } catch (error) {
        }
    }
    return deleteUser
} //Only for testing purposes

///// CARDS
export const useCreateCard = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const createCardMutate = useMutation({ mutationFn: createCardApi })
    const queryClient = useQueryClient()

    const createCard = async (cardData, userID) => {
        try {
            await createCardMutate.mutateAsync({ cardData, userID, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error creating card', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Succesfully Created Card', success: data.message, error: '' }))
                        dispatch(setShowNotification(true))
                        dispatch(setCreateCard(false))
                        queryClient.invalidateQueries(['userQuery'])
                    },
                })
        } catch (error) {
        }
    }
    return createCard
}

export const useUpdateCard = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateCardMutate = useMutation({ mutationFn: updateCardApi })
    const queryClient = useQueryClient()

    const updateCard = async (updatedData) => {
        try {
            await updateCardMutate.mutateAsync({ updatedData, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error updating card', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Succesfully Updated Card', success: data.message, error: '' }))
                        dispatch(setShowNotification(true))
                        dispatch(clearTempCards())
                        queryClient.invalidateQueries(['userQuery'])
                    },
                })
        } catch (error) {
        }
    }
    return updateCard
}

export const useDeleteCard = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const deleteCardMutate = useMutation({ mutationFn: deleteCardApi })
    const queryClient = useQueryClient()

    const deleteCard = async (ID) => {
        try {
            await deleteCardMutate.mutateAsync({ ID, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error deleting card', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Successfully Deleted Card', success: data.message, error: '' }))
                        dispatch(setShowNotification(true))
                        queryClient.invalidateQueries(['userQuery'])
                    },
                })
        } catch (error) {
        }
    }
    return deleteCard
}

///// REVIEWS
export const useCreateReview = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const createReviewMutate = useMutation({ mutationFn: createReviewApi })
    const queryClient = useQueryClient()

    const createReview = async (reviewData) => {
        try {
            await createReviewMutate.mutateAsync({ reviewData, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error creating review', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Succesfully Created Review', success: data.message || 'The page will update soon, refresh if it does not', error: '' }))
                        dispatch(setShowNotification(true))
                        queryClient.invalidateQueries(['productQuery', reviewData.productId])
                    },
                })
        } catch (e) {
        }
    }
    return createReview
}

export const useUpdateReview = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateReviewMutate = useMutation({ mutationFn: updateReviewApi })
    const queryClient = useQueryClient()

    const updateReview = async (updatedData) => {
        try {
            await updateReviewMutate.mutateAsync({ updatedData, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error updating review', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Succesfully Updated Review', success: data.message || 'The page will update soon, refresh if it does not', error: '' }))
                        dispatch(setShowNotification(true))
                        queryClient.invalidateQueries(['productQuery', updatedData.productid])
                    },
                })
        } catch (e) {
        }
    }
    return updateReview
}

export const useDeleteReview = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const deleteReviewMutate = useMutation({ mutationFn: deleteReviewApi })
    const queryClient = useQueryClient()

    const deleteReview = async (reviewData) => {
        try {
            await deleteReviewMutate.mutateAsync({ ID: reviewData.id, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error deleting review', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Successfully Deleted Review', success: data.message || 'The page will update soon, refresh if it does not', error: '' }))
                        dispatch(setShowNotification(true))
                        queryClient.invalidateQueries([['productQuery', reviewData.productId], 'userQuery']);
                    },
                })
        } catch (e) {
        }
    }
    return deleteReview
}

//// ORDERS
export const usePurchaseOrder = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const purchaseOrderMutate = useMutation({ mutationFn: purchaseOrderApi })
    const queryClient = useQueryClient()

    const purchaseOrder = async (orderData) => {
        try {
            await purchaseOrderMutate.mutateAsync({ orderData, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error confirming purchase', success: '', error: err.message }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Succesfully Made Purchase', success: data.message || 'View the progress of your order in user settings', error: '' }))
                        dispatch(setShowNotification(true))
                        dispatch(clearCartCard())
                        dispatch(purchase())
                        queryClient.invalidateQueries(['productQuery', 'userQuery'])
                    },
                })
            return 'ok'
        } catch (error) {
            return 'error'
        }
    }
    return purchaseOrder
}

export const useUpdateOrder = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateOrderMutate = useMutation({ mutationFn: updateOrderApi })
    const queryClient = useQueryClient()

    const updateOrder = async (orderData) => {
        try {
            await updateOrderMutate.mutateAsync({ orderData, tokens },
                {
                    onError: (err) => {
                        dispatch(setNotificationData({ title: 'Error updating order', success: '', error: err.message || 'Order has not been updated' }))
                        dispatch(setShowNotification(true))
                        console.log(err)
                    },
                    onSuccess: (data) => {
                        console.log(data)
                        dispatch(setNotificationData({ title: 'Succesfully Updated', success: data.message || 'Order has beeen succesfully updated', error: '' }))
                        dispatch(setShowNotification(true))
                        queryClient.invalidateQueries(['userQuery'])
                    },
                })
        } catch (e) {
        }
    }
    return updateOrder
}





