import { createSlice } from "@reduxjs/toolkit"

const shippingSlice = createSlice({
    name: "shipping",
    initialState: {
        shippingLocation: 'Skopje',
        shippingArray: ['Skopje', 'Prilep', "Kumanovo", 'Bitola', 'Ohrid', 'Strumica', 'Gevgelija','Shtip','Debar']
    },
    reducers: {
        setShippingLocation(state, action) {
            state.shippingLocation = action.payload
        },
    },
})

export const { setShippingLocation, setShowShipping } = shippingSlice.actions

export default shippingSlice.reducer