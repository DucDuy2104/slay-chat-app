import { createSlice } from "@reduxjs/toolkit"
import { login } from "./UserAPI"

const initialState = {
    user: null,
    state: null,
    errMessage: null,
    listFriends: []
}


const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setErrorMessage(state, action) {
            state.errMessage = action.payload
        },
        logout(state, action) {
            state.user = null
        },
        updateUser(state, action) {
            state.user = action.payload
        },
        addOrRemoveListFriends(state, action) {
            console.log(action.payload)
            console.log(state.listFriends)
            const index = state.listFriends.indexOf(action.payload)
            console.log('index: ', index)
            if (index === -1) {
                state.listFriends = [...state.listFriends, action.payload]
            } else {
                state.listFriends = state.listFriends.filter(friend => friend !== action.payload)
            }
        },
        resetListFriends(state, action) {
            state.listFriends = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.state = 'loading'
        }),
            builder.addCase(login.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.user = action.payload.data
                    state.errMessage = null
                } else {
                    state.user = null
                    state.errMessage = action.payload.message
                }
                state.state = null
            }),
            builder.addCase(login.rejected, (state, action) => {
                state.errMessage = action.payload
                state.state = null
            })
    }
})

export const { setErrorMessage, logout, updateUser, addOrRemoveListFriends, resetListFriends } = AppSlice.actions
export default AppSlice.reducer