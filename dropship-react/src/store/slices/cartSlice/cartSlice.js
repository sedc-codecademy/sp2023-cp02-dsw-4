import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    orderItems: JSON.parse(localStorage.getItem("orderItems")) || [],
    orderInfo: JSON.parse(localStorage.getItem("orderInfo")) || {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        street: "",
        city: "",
        postalCode: "",
        paymentMethod: "prepaid",
        note: "",
        total: "",
        orderStatus: "draft",
    },
    finalPayment: false,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addOrderItems(state, action) {
            const itemExists = state.orderItems.some(item => item.id === action.payload.id)

            if (!itemExists) {
                state.orderItems.push(action.payload)
                localStorage.setItem("orderItems", JSON.stringify(state.orderItems))
            }
        },

        setOrderFormValue: (state, action) => {
            const { name, value } = action.payload
            state.orderInfo[name] = value
            localStorage.setItem("orderInfo", JSON.stringify(state.orderInfo))
        },

        removeOrderItems(state, action) {
            const payloadIds = action.payload
            if (
                payloadIds.every((id) =>
                    state.orderItems.some((item) => item.id === id)
                ) &&
                payloadIds.length === state.orderItems.length
            ) {
                state.orderItems = []
                localStorage.removeItem("orderItems")
            } else {
                state.orderItems = state.orderItems.filter(
                    (item) => !payloadIds.includes(item.id)
                )
                localStorage.setItem("orderItems", JSON.stringify(state.orderItems))
            }
        },

        setFinalPaymentState(state, action) {
            state.finalPayment = action.payload
        },

        changeItemAmount(state, action) {
            state.orderItems.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.amount = action.payload.amount
                    localStorage.setItem("orderItems", JSON.stringify(state.orderItems))
                }
            })
        },

        purchase() {
            localStorage.removeItem("orderItems")
            localStorage.removeItem("orderInfo")
            return initialState
        },
    },
})

export const {
    addOrderItems,
    removeOrderItems,
    setOrderFormValue,
    setFinalPaymentState,
    purchase,
    changeItemAmount,
} = cartSlice.actions

export default cartSlice.reducer
