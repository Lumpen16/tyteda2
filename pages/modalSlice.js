import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false
}

export const modalSlice = createSlice({
    name: 'modal',
    inititalState: initialState,
    reducers: {
        toggleModal: (state) => {
            state.show = !state.show
        }
    }
})

export const { toggleModal } = modalSlice.actions 
export default modalSlice.reducer