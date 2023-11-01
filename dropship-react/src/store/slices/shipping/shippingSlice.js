import { createSlice } from "@reduxjs/toolkit"

const shippingSlice = createSlice({
    name: "shipping",
    initialState: {
        showShipping: false,
        shippingLocation: 'Skopje',
        shippingArray: ['skopje', 'prilep', "kumanovo", 'bitola', 'ohrid', 'strumica', 'gevgelija']
    },
    reducers: {
        setShowShipping(state, action) {
            state.showShipping = action.payload
        },
        setShippingLocation(state, action) {
            state.shippingLocation = action.payload
        },
    },
})

export const { setShippingLocation, setShowShipping } = shippingSlice.actions

export default shippingSlice.reducer