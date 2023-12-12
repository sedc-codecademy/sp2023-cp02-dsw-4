import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    orderItems: localStorage.getItem("orderItems") ? JSON.parse(localStorage.getItem("orderItems")) : [],
    orderInfo: localStorage.getItem("orderInfo") ? JSON.parse(localStorage.getItem("orderInfo")) : {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "Skopje",
        postalCode: "",
        paymentMethod: "prepaid",
        note: "",
        total: 0,
        orderStatus: "draft",
        saveCard: false,
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
                    item.quantity = action.payload.quantity
                    localStorage.setItem("orderItems", JSON.stringify(state.orderItems))
                }
            })
        },

        purchase(state) {
            localStorage.removeItem("orderItems")
            localStorage.removeItem("orderInfo")
            state.orderInfo = {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                address: "",
                city: "Skopje",
                postalCode: "",
                paymentMethod: "prepaid",
                note: "",
                total: 0,
                orderStatus: "draft",
                saveCard: false,
            }
            state.orderItems = []
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
