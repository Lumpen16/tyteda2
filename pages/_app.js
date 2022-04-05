import '../styles/globals.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import modalReducer from './modalSlice'
import { useEffect } from 'react'


const store = configureStore({
  reducer: {
      auth: authReducer,
  }
})






export default function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   const anchors = document.querySelectorAll('a[href*="#"]')

  //   for (let anchor of anchors) {
  //       anchor.addEventListener('click', function (e) {
  //           e.preventDefault()
    
  //           const blockID = anchor.getAttribute('href').substr(1)
    
  //           document.getElementById(blockID).scrollIntoView({
  //               behavior: 'smooth',
  //               block: 'start'
  //           })
  //       })
  //   }
  // }, [])
  return (
    <Provider store= { store }>
      <Component {...pageProps} />
    </Provider>
  )
}

