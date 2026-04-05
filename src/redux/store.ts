import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './slices/userSlice' // Import your reducers here

// Configure the store with your reducers
const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

export default store