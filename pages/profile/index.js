import Head from 'next/head'
import Companies from './Companies'
import Footer from '../components/Footer'
import styles from './ProfilePage.module.css'
import Modal from '../components/Modal'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function ProfilePage() {

    const isShown = useSelector((state) => state.auth.modal)

    useEffect(() => {}, [isShown])
    
    return (
        <div style={{ background: "#fff"}}>
          <Head>
            <title>Личный кабинет</title>
            <meta name="description" content="Личный кабинет пользователя" />
            <link rel="icon" href="/favicon.svg" />
            <link href="https://fonts.googleapis.com/css2?family=Bad+Script&amp;family=Montserrat:wght@400;600&amp;display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
          </Head>
          <div className={ styles.profile_container }>
            <Modal show={ isShown }></Modal>
              <div className={ styles.profile_tyteda_container }>
                  <div className={ styles.profile_tyteda }>TYT<br />EDA</div>
              </div>
              <div className={ styles.profile_header }>Добро Пожаловать!<br/><span className={ styles.profile_tyteda_header }>TYTEDA.СЕРВИС</span></div>
              <h1 className={ styles.profile_subheader }>Выберите вашу компанию</h1>
          </div>
          <div className={ styles.profile_container }>
            <Companies />
          </div>
          <Footer />
      </div>
          
      )
}