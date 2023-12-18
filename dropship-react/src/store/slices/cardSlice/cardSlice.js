import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartCard:
    {
        holder: ``,
        number: ``,
        cvc: '',
        date: '',
        type: {
            mask: '0000 0000 0000 0000',
            cardtype: 'unknown',
            light: '#bdbdbd',
            dark: '#616161'
        },
    },
    tempCards: [],
    newCard: {
        holder: ``,
        number: ``,
        cvc: '',
        date: '',
        type: {
            mask: '0000 0000 0000 0000',
            cardtype: 'unknown',
            light: '#bdbdbd',
            dark: '#616161'
        },
    },
    cardPatterns: [
        {
            regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
            mask: '0000 0000 0000 0000',
            cardtype: 'mastercard',
            light: '#03A9F4',
            dark: '#0288D1'
        },
        {
            regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
            mask: '0000 0000 0000 0000',
            cardtype: 'maestro',
            light: '#ffeb3b',
            dark: '#f9a825',
        },
        {
            regex: '^4\\d{0,15}',
            mask: '0000 0000 0000 0000',
            cardtype: 'visa',
            light: '#d4e157',
            dark: '#afb42b'
        },
        // {
        //     mask: '0000 0000 0000 0000',
        //     regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
        //     cardtype: 'discover',
        //     light: '#ab47bc',
        //     dark: '#7b1fa2'
        // },
        // {
        //     mask: '0000 0000 0000 0000',
        //     regex: '^(?:35\\d{0,2})\\d{0,12}',
        //     cardtype: 'jcb',
        //     light: '#ef5350',
        //     dark: '#d32f2f'
        // },
        // {
        //     mask: '0000 0000 0000 0000',
        //     regex: '^62\\d{0,14}',
        //     cardtype: 'unionpay',
        //     light: '#26c6da',
        //     dark: '#0097a7'
        // },
        {
            mask: '0000 0000 0000 0000',
            cardtype: 'unknown',
            light: '#bdbdbd',
            dark: '#616161'
        },
    ],
    createCard: false,
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCardFormValue: (state, action) => {
            const { name, value } = action.payload
            state.cartCard[name] = value
        },
        setNewCardFormValue: (state, action) => {
            const { name, value } = action.payload
            state.newCard[name] = value
        },
        setCardFormValueID: (state, action) => {
            const { name, value, cardID } = action.payload
            const cardIndex = state.tempCards.findIndex(card => card.id === cardID)
            if (cardIndex !== -1) {
                state.tempCards[cardIndex][name] = value
            }
        },
        setCardType: (state, action) => {
            state.cartCard['type'] = action.payload
        },
        setNewCardType: (state, action) => {
            state.newCard['type'] = action.payload
        },
        setCardTypeID: (state, action) => {
            const { cardID, matchedPattern } = action.payload
            const cardIndex = state.tempCards.findIndex(card => card.id === cardID)

            if (cardIndex !== -1) {
                state.tempCards[cardIndex].type = matchedPattern
            }
        },
        setCardStatusID: (state, action) => {
            const cardIndex = state.tempCards.findIndex(card => card.id === action.payload)

            if (cardIndex !== -1) {
                state.tempCards[cardIndex].cardStatus = "PRIMARY"

                state.tempCards.forEach((card, index) => {
                    if (index !== cardIndex && card.cardStatus !== "SECONDARY") {
                        state.tempCards[index].cardStatus = "SECONDARY"
                    }
                })
            }
        },
        setRemoveCardID: (state, action) => {
            const cardIndex = state.tempCards.findIndex(card => card.id === action.payload)
            if (cardIndex !== -1) {
                if (!state.tempCards[cardIndex].removal) {
                    state.tempCards[cardIndex].removal = true
                    if (state.tempCards[cardIndex].cardStatus === 'PRIMARY') {
                        const firstNonRemovedIndex = state.tempCards.findIndex(card => !card.removal)
                        if (firstNonRemovedIndex !== -1) {
                            state.tempCards[firstNonRemovedIndex].cardStatus = "PRIMARY"
                        }
                    }
                } else {
                    state.tempCards[cardIndex].removal = false
                    if (state.tempCards[cardIndex].cardStatus === 'PRIMARY') {
                        state.tempCards.forEach((card, index) => {
                            if (index !== cardIndex && card.cardStatus !== "SECONDARY") {
                                state.tempCards[index].cardStatus = "SECONDARY"
                            }
                        })
                    }
                }
            }
        },
        setCreateCard: (state, action) => {
            state.createCard = action.payload
        },
        setTempCards: (state, action) => {
            state.tempCards = action.payload
        },
        clearTempCards: (state) => {
            state.tempCards.forEach(e => {
                e.holder = ''
                e.number = ''
                e.cvc = ''
                e.date = ''
                e.type = state.cardPatterns[state.cardPatterns.length - 1]
                if (e.removal) e.removal = false
                e.cardStatus = e.originalStatus
            })
        },
        clearNewCard: (state) => {
            state.newCard = initialState.newCard
        },
        clearCartCard: (state) => {
            state.cartCard = initialState.cartCard
        }
    },
})

export const { setCardFormValue, setCardType, setCardTypeID, setCardStatusID, setRemoveCardID, setCardFormValueID, setNewCardFormValue, setNewCardType, setCreateCard, setTempCards, clearTempCards, clearNewCard, clearCartCard } = cardSlice.actions

export default cardSlice.reducer