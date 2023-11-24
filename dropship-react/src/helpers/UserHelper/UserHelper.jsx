import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { setIsError, setIsFetching, setShowLoading } from "../../store/slices/loaderSlice/loaderSlice"
import { clearTokens, setRole } from "../../store/slices/role/roleSlice"
import { getUser, logInApi, logOutApi } from '../API/user-api'
import { userLogIn, setUserCards, userLogOut } from "../../store/slices/user/userSlices"
import { setTempCards } from "../../store/slices/cardSlice/cardSlice"
import { useNavigate } from 'react-router-dom'

const navigateToHome = (navigate) => {
    setTimeout(() => {
        navigate('/')
    }, 1000)
}

export default function UserHelper() {
    const tokens = useSelector(state => state.role.authTokens)
    const showLoading = useSelector(state => state.loader.showLoading)
    const cardPatterns = useSelector((state) => state.card.cardPatterns)
    const dispatch = useDispatch()
    const userQuery = useQuery({
        queryKey: ['userQuery'],
        queryFn: getUser,
        enabled: !!(tokens?.accessToken && tokens?.refreshToken)
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
                            const updatedCard = { ...card, type: matchedPattern }
                            tempCardsForSetUser.push(updatedCard)

                            const emptyCard = Object.keys(updatedCard).reduce((obj, key) => {
                                obj[key] = (key === 'id' || key === 'cardStatus' || key === 'type') ? updatedCard[key] : ''
                                return obj
                            }, {})

                            emptyCard.originalStatus = updatedCard.cardStatus;

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
    const logOutMutate = useMutation({ mutationFn: logOutApi, onSuccess: () => { queryClient.resetQueries(["userQuery"]); dispatch(setShowLoading(true)); navigateToHome(navigate) } })

    useEffect(() => {
        const { isError, error } = logOutMutate

        if (isError) {
            console.log(error)
        }
    }, [logOutMutate, dispatch])

    const logout = async () => {
        dispatch(clearTokens())
        await logOutMutate.mutateAsync()
        dispatch(setIsFetching(false))
        dispatch(userLogOut())
        dispatch(setRole('user'))
        dispatch(setTempCards([]))
    }

    return logout
}

export const useLogin = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const logInMutate = useMutation({ mutationFn: logInApi, onSuccess: () => { queryClient.resetQueries(["userQuery"]); navigateToHome(navigate) } })

    useEffect(() => {
        const { isError, error } = logInMutate

        if (isError) {
            dispatch(setIsError(true))
            console.log(error)
        }
    }, [logInMutate, dispatch])

    const login = async (credentials) => {
        return await logInMutate.mutateAsync(credentials)
    }

    return login
}