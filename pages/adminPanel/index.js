import Head from 'next/head' 
import styles from './AdminLoginPage.module.css'
import { useRouter, Router } from 'next/router'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'
import AdminModal from './AdminModal'
import Orders from './Orders'
import Menu from './Menu'
import Companies from './Companies'
import Statistics from './Statistics'
import Script from 'next/script'


export default function AdminLoginPage({ fallback }) {
  
  const isShown = useSelector((state) => state.auth.modal)
  const isAdminModalShown = useSelector((state) => state.auth.adminModal)
  const [tab, setTab] = useState(0)
  const isAuth = useSelector((state) => state.auth.authorized)
  const router = useRouter()
  const [isMaster, setIsMaster] = useState(true)
  useEffect(() => {
    if (!(localStorage.getItem('role') === 'Admin')) { 
      router.push('/login')
    }
  })

  useEffect(() => {
    setIsMaster(localStorage.getItem('_id') === '623de8a980196580fc49b3e1')
  }, [])


  const componentsArr = [<Orders />, <Companies />, <Menu />, <Statistics />]

  function changeTab(tabNum) {
    if (tab === tabNum) {
      return undefined
    }
    else {
      setTab(tabNum)
    }
    
  }

  function exit() {
    localStorage.setItem('_id', '')
    localStorage.setItem('access_token', '')
    localStorage.setItem('company_id', '')
    localStorage.setItem('role', '')
    router.push('/profile')
}
  
    return (
      <div className={ styles.form_container }>
        <Head>
          <title>Панель администратора</title>
          <meta name="description" content="Панель администратора ТУТЕДА" />
          <link rel="icon" href="/favicon.svg" />
          <link href="https://fonts.googleapis.com/css2?family=Bad+Script&amp;family=Montserrat:wght@400;600&amp;display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          
        </Head>
        {/* <Script src='build/pdfmake.min.js'></Script>
        <Script src='build/vfs_fonts.js'></Script> */}
        <Modal show={ isShown }/>
        <AdminModal show={ isAdminModalShown } />
        <div className={ styles.admin_wrapper }>
          <sidebar className={ styles.admin_sidebar }>
            <button onClick={ exit } className={ styles.admin_btn_out }>Выйти</button>
            <div className={ styles.admin_tyteda }>
              TYT<br/>EDA
            </div>
            <div onClick={() => {changeTab(0)}} className={ `${styles.admin_tab} ${ tab === 0 ? styles.admin_tab_active : styles.admin_tab }` }>Заказы</div>
            <div style={{ display: isMaster ? 'block' : 'none' }} onClick={() => {changeTab(1)}} className={ `${styles.admin_tab} ${ tab === 1 ? styles.admin_tab_active : styles.admin_tab }` }>Компании</div>
            <div style={{ display: isMaster ? 'block' : 'none' }} onClick={() => {changeTab(2)}} className={ `${styles.admin_tab} ${ tab === 2 ? styles.admin_tab_active : styles.admin_tab }` }>Меню</div>
            <div onClick={() => {changeTab(3)}} className={ `${styles.admin_tab} ${ tab === 3 ? styles.admin_tab_active : styles.admin_tab }` }>Статистика</div>
          </sidebar>
          <main>
            <div className={ styles.admin_header }>Панель администратора</div>
              { componentsArr[tab] }
          </main>
        </div>
    </div>
        
    )
}