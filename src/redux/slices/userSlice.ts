import { IUser } from '@/models/user.model'
import { createSlice } from '@reduxjs/toolkit'

interface IUserSliceState {
    userData: IUser | null // Replace 'any' with the actual type of your user data
}

const initialState : IUserSliceState = {
    userData: null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const { setUserData } = userSlice.actions //export alll reducer actions here
export default userSlice.reducer //export the reducer to be used in the store