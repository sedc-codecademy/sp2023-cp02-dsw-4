import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        showNotification: false,
        title: '',
        error: '',
        success: ''
    },
    reducers: {
        setShowNotification(state, action) {
            state.showNotification = action.payload
        },
        setNotificationData(state, action) {
            state.title = action.payload.title
            state.success = action.payload.success
            state.error = action.payload.error
        },
        clearNotification(state) {
            state.title = ''
            state.error = ''
            state.success = ''
        }
    },
})

export const { setShowNotification, setNotificationData, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer