import Head from 'next/head'
import outerStyles from '../profile/ProfilePage.module.css'
import Footer from '../components/Footer'
import DishesList from './dishesList'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from './UserProfile.module.css'

export default function UserProfile() {

    const [fio, setFio] = useState('')
    const userImage = './ava.svg'
    const router = useRouter()


    async function getUser() {
        const { bio } =  await axios.get(`https://sleepy-crag-49787.herokuapp.com/user/getOne?id=${localStorage.getItem('_id')}`).then(res => res.data)
        setFio(bio)
    }

    function checkAuth() {
        if (localStorage.getItem('role') !== 'User') {
            router.push('/profile')
        }
    }

    useEffect(() => {
        checkAuth()
        getUser()
        localStorage.setItem('order', JSON.stringify([]))
    }, [])


    function exit() {
        localStorage.setItem('_id', '')
        localStorage.setItem('access_token', '')
        localStorage.setItem('company_id', '')
        localStorage.setItem('role', '')
        router.push('/profile')
    }

    const tomorrow = new Date()
    tomorrow.setDate((new Date()).getDate() + 1)
    return (
        <div style={{ background: "#fff"}}>
          <Head>
            <title>Личный кабинет</title>
            <meta name="description" content="Личный кабинет пользователя" />
            <link rel="icon" href="/favicon.svg" />
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&amp;family=Montserrat:wght@400;600&amp;display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          </Head>
          <div className={ outerStyles.profile_container } style={{ marginBottom: '25px'}}>
              <div className={ outerStyles.profile_tyteda_container }>
                  <div className={ outerStyles.profile_tyteda }>TYT<br />EDA</div>
                  
              </div>
              <div style={{ display: 'flex', justifyContent: 'center'}}><span style={{ cursor: 'pointer' }} onClick={ exit }>Выход</span></div>
          </div>
          
          <div className={ styles.user_container }>
              <div className={ styles.user_subcontainer }>
                  <img src={userImage}></img>
                  <div className={ styles.user_header }>{fio}</div>
              </div>
              <img />
          </div>
          <div>
              <h1 className={ styles.user_tomorrow_header }>Заказы на завтра принимаются до 20:00</h1>
              <h1 className={ styles.user_tomorrow_subheader }>Выберите меню на {tomorrow.toLocaleDateString()}</h1>
          </div>
          <DishesList />
        
          <Footer />
      </div>
          
      )
}