import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { setIsError, setIsFetching, setShowLoading } from "../../store/slices/loaderSlice/loaderSlice"
import { clearTokens, setAuthTokens, setRole, setUserId } from "../../store/slices/role/roleSlice"
import { createCardApi, deleteCardApi, deleteUserApi, getUser, logInApi, registerApi, subscribeApi, updateCardApi, updateUserApi } from '../API/user-api'
import { userLogIn, setUserCards, userLogOut } from "../../store/slices/user/userSlices"
import { clearCartCard, clearTempCards, setCreateCard, setTempCards } from "../../store/slices/cardSlice/cardSlice"
import { useNavigate } from 'react-router-dom'
import { setNotificationData, setShowNotification } from "../../store/slices/notificationSlice/notificationSlice"
import { createReviewApi, deleteReviewApi, updateReviewApi } from "../API/product-api"
import { acceptOrderApi, purchaseOrderApi, updateOrderApi } from "../API/order-api"
import { purchase } from "../../store/slices/cartSlice/cartSlice"
import { clearPasswordInfo, clearUser } from "../../store/slices/userSettings/userSettingsSlices"
import { createCategoryApi, deleteCategoryApi, updateCategoryApi } from "../API/category-api"
import { searchProductApi } from "../API/searchApi"

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
        queryFn: () => getUser(userid, tokens),
        enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
    })

    useEffect(() => {
        if (tokens?.accessToken && tokens?.refreshToken) {
            const { isLoading, isSuccess, isError, data } = userQuery
            if (isLoading) {
                dispatch(setIsFetching(true))
                if (!showLoading) dispatch(setShowLoading(true))
            }

            if (isError) {
                dispatch(setIsError(true))
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
    // const tokens = useSelector(state => state.role.authTokens)
    // const userid = useSelector(state => state.role.userid)
    // const logOutMutate = useMutation({ mutationFn: logOutApi })

    const logout = () => {
        // logOutMutate.mutate({ ID: userid, tokens }, {
        //     onError: (err) => {
        //         dispatch(setNotificationData({ title: 'Log-Out Error', success: '', error: err.message || 'Could not log out' }))
        //         dispatch(setShowNotification(true))
        //         
        //     },
        //     onSuccess: () => {
        //         dispatch(clearTokens())
        //         dispatch(userLogOut())
        //         queryClient.resetQueries(["userQuery"])
        //         dispatch(setShowLoading(true))
        //         navigateToHome(navigate)
        //         dispatch(setIsFetching(false))
        //         dispatch(userLogOut())
        //         dispatch(setRole('User'))
        //         dispatch(setTempCards([]))
        //     },
        // })
        dispatch(clearTokens())
        dispatch(userLogOut())
        queryClient.resetQueries(["userQuery"])
        dispatch(setShowLoading(true))
        navigateToHome(navigate)
        dispatch(setIsFetching(false))
        dispatch(userLogOut())
        dispatch(setRole('User'))
        dispatch(setTempCards([]))
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
                        dispatch(setNotificationData({ title: 'Login Error', success: '', error: err.message || 'Login has failed' }))
                        dispatch(setShowNotification(true))
                    },
                    onSuccess: (data) => {
                        dispatch(setAuthTokens({ accessToken: data.token, refreshToken: "dnb jakwbdjkwabjkdbjkwa" }))
                        dispatch(setUserId(data.id))
                        queryClient.resetQueries(["userQuery"])
                        navigateToHome(navigate)
                    },
                })
            return true
        } catch (error) {
            return false
        }
    }
    return login
}

export const useRegister = () => {
    const dispatch = useDispatch()
    const registerMutate = useMutation({ mutationFn: registerApi })

    const register = (credentials) => {
        registerMutate.mutate(credentials, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Register Error', success: '', error: err.message || 'Registration was not complete' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                dispatch(setNotificationData({ title: 'Register Succesfull', success: data, error: '' }))
                dispatch(setShowNotification(true))
            },
        })
    }
    return register
}

////// USER INFO
export const useUpdateUser = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateUserMutate = useMutation({ mutationFn: updateUserApi })
    const queryClient = useQueryClient()

    const updateUser = (updatedData) => {
        updateUserMutate.mutate({ updatedData, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error updating user', success: '', error: err.message || 'User has not been updated' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {

                dispatch(setNotificationData({ title: 'Succesfully Updated User', success: data, error: '' }))
                dispatch(setShowNotification(true))
                dispatch(clearUser())
                dispatch(clearPasswordInfo())
                queryClient.invalidateQueries(['userQuery'])
            },
        })
    }
    return updateUser
}

export const useDeleteUser = () => {
    const logout = useLogout()
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const deleteUserMutate = useMutation({ mutationFn: deleteUserApi })
    const deleteUser = (userData) => {
        deleteUserMutate.mutate({ ID: userData.id, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error deleting User', success: '', error: err.message || 'User has not been deleted' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                logout()
                setTimeout(() => {
                    dispatch(setNotificationData({ title: 'Successfully Deleted User', success: data, error: '' }))
                    dispatch(setShowNotification(true))
                }, 2000)
            },
        })
    }
    return deleteUser
}

///// CARDS
export const useCreateCard = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const createCardMutate = useMutation({ mutationFn: createCardApi })
    const queryClient = useQueryClient()

    const createCard = (cardData, userID) => {
        createCardMutate.mutate({ cardData, userID, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error creating card', success: '', error: err.message || 'Card has not been created' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                dispatch(setNotificationData({ title: 'Succesfully Created Card', success: data, error: '' }))
                dispatch(setShowNotification(true))
                dispatch(setCreateCard(false))
                queryClient.invalidateQueries(['userQuery'])
            },
        })
    }
    return createCard
}

export const useUpdateCard = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateCardMutate = useMutation({ mutationFn: updateCardApi })
    const queryClient = useQueryClient()

    const updateCard = (updatedData) => {
        updateCardMutate.mutate({ updatedData, tokens },
            {
                onError: (err) => {
                    dispatch(setNotificationData({ title: 'Error updating card', success: '', error: err.message || 'Card has not been updated' }))
                    dispatch(setShowNotification(true))
                },
                onSuccess: (data) => {
                    dispatch(setNotificationData({ title: 'Succesfully Updated Card', success: data, error: '' }))
                    dispatch(setShowNotification(true))
                    dispatch(clearTempCards())
                    queryClient.invalidateQueries(['userQuery'])
                },
            })
    }
    return updateCard
}

export const useDeleteCard = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const deleteCardMutate = useMutation({ mutationFn: deleteCardApi })
    const queryClient = useQueryClient()

    const deleteCard = (ID) => {
        deleteCardMutate.mutate({ ID, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error deleting card', success: '', error: err.message || 'Card has not been deleted' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                dispatch(setNotificationData({ title: 'Successfully Deleted Card', success: data, error: '' }))
                dispatch(setShowNotification(true))
                queryClient.invalidateQueries(['userQuery'])
            },
        })
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
                        dispatch(setNotificationData({ title: 'Error creating review', success: '', error: err.message || 'Review has not been created' }))
                        dispatch(setShowNotification(true))
                    },
                    onSuccess: (data) => {
                        dispatch(setNotificationData({ title: 'Succesfully Created Review', success: data || 'The page will update soon, refresh if it does not', error: '' }))
                        dispatch(setShowNotification(true))
                        queryClient.invalidateQueries(['productQuery', reviewData.productId])
                    },
                })
            return true
        } catch (error) {
            return false
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
            await updateReviewMutate.mutateAsync({ updatedData, tokens }, {
                onError: (err) => {
                    dispatch(setNotificationData({ title: 'Error updating review', success: '', error: err.message || 'Review has not been updated' }))
                    dispatch(setShowNotification(true))
                },
                onSuccess: (data) => {
                    dispatch(setNotificationData({ title: 'Succesfully Updated Review', success: data || 'The page will update soon, refresh if it does not', error: '' }))
                    dispatch(setShowNotification(true))
                    queryClient.invalidateQueries(['productQuery', updatedData.productid])
                },
            })
            return true
        } catch (error) {
            return false
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
            await deleteReviewMutate.mutateAsync({ ratingId: reviewData.id, userId: reviewData.userId, tokens }, {
                onError: (err) => {
                    dispatch(setNotificationData({ title: 'Error deleting review', success: '', error: err.message || 'Review has not been deleted' }))
                    dispatch(setShowNotification(true))
                },
                onSuccess: (data) => {
                    dispatch(setNotificationData({ title: 'Successfully Deleted Review', success: data || 'The page will update soon, refresh if it does not', error: '' }))
                    dispatch(setShowNotification(true))
                    queryClient.invalidateQueries([['productQuery', reviewData.productId], 'userQuery'])
                },
            })
            return true
        } catch (error) {
            return false
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
                        dispatch(setNotificationData({ title: 'Error confirming purchase', success: '', error: err.message || 'Purchase has not been completed' }))
                        dispatch(setShowNotification(true))

                    },
                    onSuccess: (data) => {
                        dispatch(setNotificationData({ title: 'Succesfully Made Purchase', success: data || 'View the progress of your order in user settings', error: '' }))
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

    const updateOrder = (orderId) => {
        updateOrderMutate.mutate({ orderId, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error updating order', success: '', error: err.message || 'Order has not been updated' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                dispatch(setNotificationData({ title: 'Succesfully Updated', success: data || 'Order has beeen succesfully updated', error: '' }))
                dispatch(setShowNotification(true))
                queryClient.invalidateQueries(['userQuery'])
            },
        })
    }
    return updateOrder
}

export const useAcceptOrder = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateOrderMutate = useMutation({ mutationFn: acceptOrderApi })
    const queryClient = useQueryClient()

    const acceptOrder = (orderData) => {
        updateOrderMutate.mutate({ orderData, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error accepting order', success: '', error: err.message || 'Order has not been accepted' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                dispatch(setNotificationData({ title: 'Succesfully Accepted', success: data || 'This Order will be moved to pending orders', error: '' }))
                dispatch(setShowNotification(true))
                queryClient.invalidateQueries(['purchasedOrders, userQuery'])
            },
        })
    }
    return acceptOrder
}

//// CATEGORY

export const useCreateCategory = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const createCategoryMutate = useMutation({ mutationFn: createCategoryApi })
    const queryClient = useQueryClient()

    const createCategory = (catData) => {
        createCategoryMutate.mutate({ catData, tokens },
            {
                onError: (err) => {
                    dispatch(setNotificationData({ title: 'Error creating category', success: '', error: err.message || 'Category has not been created' }))
                    dispatch(setShowNotification(true))
                    console.log(err)
                },
                onSuccess: (data) => {
                    dispatch(setNotificationData({ title: 'Succesfully Created Category', success: data || 'The page will update soon, refresh if it does not', error: '' }))
                    dispatch(setShowNotification(true))
                    queryClient.invalidateQueries([['categoryQuery', catData.id], 'categoriesQuery'])
                },
            })
    }
    return createCategory
}

export const useUpdateCategory = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const updateCategoryMutate = useMutation({ mutationFn: updateCategoryApi })
    const queryClient = useQueryClient()

    const updateOrder = (catData) => {
        updateCategoryMutate.mutate({ catData, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error updating category', success: '', error: err.message || 'Category has not been updated' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                dispatch(setNotificationData({ title: 'Succesfully Updated', success: data || 'Order has beeen succesfully updated', error: '' }))
                dispatch(setShowNotification(true))
                queryClient.invalidateQueries([['categoryQuery', catData.id], 'categoriesQuery'])
            },
        })
    }
    return updateOrder
}

export const useDeleteCategory = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const deleteCategoryMutate = useMutation({ mutationFn: deleteCategoryApi })
    const queryClient = useQueryClient()

    const deleteReview = (id) => {
        deleteCategoryMutate.mutate({ ID: id, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error deleting category', success: '', error: err.message || 'Category has not been deleted' }))
                dispatch(setShowNotification(true))
            },
            onSuccess: (data) => {
                dispatch(setNotificationData({ title: 'Successfully Deleted Category', success: data || 'The page will update soon, refresh if it does not', error: '' }))
                dispatch(setShowNotification(true))
                queryClient.invalidateQueries([['categoryQuery', id], 'categoriesQuery'])
            },
        })
    }
    return deleteReview
}

//// SEARCH PRODUCT 

export const useSearchProduct = () => {
    const dispatch = useDispatch()
    const tokens = useSelector(state => state.role.authTokens)
    const searchProductMutate = useMutation({ mutationFn: searchProductApi })

    const searchProduct = (ID) => {
        searchProductMutate.mutate({ ID, tokens }, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error finding product', success: '', error: err.message || 'Item has not been found please try again' }))
                dispatch(setShowNotification(true))
            },
        })
    }
    return searchProduct
}

//// SEARCH PRODUCT 

export const useSubscribe = () => {
    const dispatch = useDispatch()
    const useSubscribeMutate = useMutation({ mutationFn: subscribeApi })

    const subscribe = (subscriberData) => {
        useSubscribeMutate.mutate(subscriberData, {
            onError: (err) => {
                dispatch(setNotificationData({ title: 'Error subscribing', success: '', error: err.message || 'You have not been subscribed to our newsletter' }))
                dispatch(setShowNotification(true))
            },
        })
    }
    return subscribe
}