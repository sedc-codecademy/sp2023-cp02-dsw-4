import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { setIsError, setIsFetching, setShowLoading } from "../../store/slices/loaderSlice/loaderSlice"
import { clearTokens, setAuthTokens, setRole, setUserId } from "../../store/slices/role/roleSlice"
import { getUser, logInApi, logOutApi, registerApi } from '../API/user-api'
import { userLogIn, setUserCards, userLogOut } from "../../store/slices/user/userSlices"
import { setTempCards } from "../../store/slices/cardSlice/cardSlice"
import { useNavigate } from 'react-router-dom'
import { setNotificationData, setShowNotification } from "../../store/slices/notificationSlice/notificationSlice"

const navigateToHome = (navigate) => {
    setTimeout(() => {
        navigate('/')
    }, 1000)
}

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

export const useLogout = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const logOutMutate = useMutation({ mutationFn: logOutApi })

    useEffect(() => {
        const { isError, error } = logOutMutate

        if (isError) {
            console.log(error)
        }
    }, [logOutMutate, dispatch])

    const logout = async () => {
        try {
            await logOutMutate.mutateAsync({}, {
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
        } catch (e) {
            console.log(e)
        }
    }
    return logout
}

export const useLogin = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const logInMutate = useMutation({ mutationFn: logInApi })

    useEffect(() => {
        const { isError, error } = logInMutate

        if (isError) {
            dispatch(setIsError(true))
            console.log(error)
        }
    }, [logInMutate, dispatch])

    const login = async (credentials) => {

        await logInMutate.mutateAsync(credentials,
            {
                onSuccess: (data) => {
                    console.log(data)
                    dispatch(setAuthTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken }))
                    dispatch(setUserId(data.userid))
                    queryClient.resetQueries(["userQuery"])
                    navigateToHome(navigate)
                },
            })

    }
    return login
}

export const useRegister = () => {
    const dispatch = useDispatch()
    const registerMutate = useMutation({ mutationFn: registerApi })

    useEffect(() => {
        const { isError, error } = registerMutate

        if (isError) {
            dispatch(setNotificationData({ title: 'Register Succesfull', success: '', error: error.message }))
            dispatch(setShowNotification(true))
            console.log(error)
        }
    }, [registerMutate, dispatch])

    const register = async (credentials) => {

        await registerMutate.mutateAsync(credentials,
            {
                onSuccess: (data) => {
                    console.log(data)
                    dispatch(setNotificationData({ title: 'Register Succesfull', success: data.message, error: '' }))
                    dispatch(setShowNotification(true))
                },
            })
    }
    return register
}

