'use client'
import store from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const ReduxWrapper = ({children} : {children : React.ReactNode}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

// Middleware for proxying requests to the backend server
export default ReduxWrapper