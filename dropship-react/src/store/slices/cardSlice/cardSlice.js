import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cardObject:
    {
        holder: ``,
        number: ``,
        cvc: '',
        date: '',
    },
    cardType: null,
    flipped: false,
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
        {
            mask: '0000 0000 0000 0000',
            regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
            cardtype: 'discover',
            light: '#ab47bc',
            dark: '#7b1fa2'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^(?:35\\d{0,2})\\d{0,12}',
            cardtype: 'jcb',
            light: '#ef5350',
            dark: '#d32f2f'
        },
        {
            mask: '0000 0000 0000 0000',
            regex: '^62\\d{0,14}',
            cardtype: 'unionpay',
            light: '#26c6da',
            dark: '#0097a7'
        },
        {
            mask: '0000 0000 0000 0000',
            cardtype: 'unknown',
            light: '#bdbdbd',
            dark: '#616161'
        },
    ]
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCardFormValue: (state, action) => {
            const { name, value } = action.payload
            state.cardObject[name] = value
        },
        setCardFormNumber: (state, action) => {
            state.cardObject['number'] = action.payload
        },
        setCardDate: (state, action) => {
            state.cardObject['date'] = action.payload
        },
        setCardType: (state, action) => {
            state.cardType = action.payload
        },
        flipCard: (state, action) => {
            state.flipped = action.payload
        }
    },
})

export const { setCardFormValue, setCardFormNumber, setCardDate, setCardType,flipCard } = cardSlice.actions

export default cardSlice.reducer