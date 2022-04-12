import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authorized: false,
    modal: false,
    adminModal: false,
    userModal: false,
    reqModal: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth: (state) => {
            state.authorized = true
        },
        setUnauth: (state) => {
            state.authorized = false
        },
        toggleModal: (state) => {
            state.modal = !state.modal
        },
        toggleAdminModal: (state) => {
            state.adminModal = !state.adminModal
        },
        toggleUserModal: (state) => {
            state.userModal = !state.userModal
        },
        toggleReqModal: (state) => {
            state.reqModal = !state.reqModal
        }
    }
})

export const { setAuth, setUnauth, toggleModal, toggleAdminModal, toggleUserModal, toggleReqModal } = authSlice.actions
export default authSlice.reducer