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


export default function AdminLoginPage({ fallback }) {
  
  const isShown = useSelector((state) => state.auth.modal)
  const isAdminModalShown = useSelector((state) => state.auth.adminModal)
  const [tab, setTab] = useState(0)
  const isAuth = useSelector((state) => state.auth.authorized)
  const router = useRouter()
  const [isMaster, setIsMaster] = useState(true)
  useEffect(() => {
    if (!(localStorage.getItem('role') === 'Admin')) { 
      router.push('/loginpage')
    }
  })

  useEffect(() => {
    setIsMaster(localStorage.getItem('_id') === '6255546d6554b040cf31c4c5')
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
    router.push('/prpage')
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
            
            <h1 className={ styles.admin_tyteda }>
              TYT<br/>EDA
            </h1>
            <h3 className={ styles.admin_header }>Панель администратора</h3>
            <div onClick={() => {changeTab(0)}} className={ `${styles.admin_tab} ${ tab === 0 ? styles.admin_tab_active : styles.admin_tab }` }><svg className={ styles.admin_tab_svg } xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<path d="M8.62329 5.56971C8.7507 5.4423 8.82228 5.26948 8.82228 5.08929C8.82228 4.90909 8.7507 4.73627 8.62329 4.60886C8.49587 4.48144 8.32305 4.40986 8.14286 4.40986C7.96266 4.40986 7.78985 4.48144 7.66243 4.60886L5.74614 6.52514L5.20736 6.03386C5.07349 5.91943 4.90038 5.86154 4.72461 5.8724C4.54883 5.88327 4.38417 5.96204 4.26541 6.09208C4.14665 6.22211 4.0831 6.39323 4.08818 6.56926C4.09326 6.7453 4.16658 6.91246 4.29264 7.03543L5.3105 7.96507C5.43947 8.08249 5.6087 8.14574 5.78306 8.1417C5.95743 8.13766 6.12354 8.06663 6.24693 7.94336L8.62193 5.56836L8.62329 5.56971ZM8.62329 11.3946C8.68648 11.4576 8.73662 11.5325 8.77082 11.6149C8.80503 11.6974 8.82264 11.7857 8.82264 11.875C8.82264 11.9643 8.80503 12.0526 8.77082 12.1351C8.73662 12.2175 8.68648 12.2924 8.62329 12.3554L6.24829 14.7304C6.12466 14.8539 5.95817 14.9249 5.78348 14.9287C5.60879 14.9325 5.43937 14.8688 5.3105 14.7508L4.29264 13.8211C4.16658 13.6982 4.09326 13.531 4.08818 13.355C4.0831 13.1789 4.14665 13.0078 4.26541 12.8778C4.38417 12.7478 4.54883 12.669 4.72461 12.6581C4.90038 12.6473 5.07349 12.7051 5.20736 12.8196L5.74614 13.3122L7.66243 11.3946C7.72546 11.3314 7.80034 11.2812 7.88278 11.247C7.96522 11.2128 8.0536 11.1952 8.14286 11.1952C8.23211 11.1952 8.32049 11.2128 8.40293 11.247C8.48537 11.2812 8.56025 11.3314 8.62329 11.3946ZM10.8571 12.2143C10.6772 12.2143 10.5046 12.2858 10.3773 12.413C10.2501 12.5403 10.1786 12.7129 10.1786 12.8929C10.1786 13.0728 10.2501 13.2454 10.3773 13.3727C10.5046 13.4999 10.6772 13.5714 10.8571 13.5714H14.25C14.43 13.5714 14.6026 13.4999 14.7298 13.3727C14.8571 13.2454 14.9286 13.0728 14.9286 12.8929C14.9286 12.7129 14.8571 12.5403 14.7298 12.413C14.6026 12.2858 14.43 12.2143 14.25 12.2143H10.8571ZM10.1786 6.10714C10.1786 5.92717 10.2501 5.75458 10.3773 5.62732C10.5046 5.50006 10.6772 5.42857 10.8571 5.42857H14.25C14.43 5.42857 14.6026 5.50006 14.7298 5.62732C14.8571 5.75458 14.9286 5.92717 14.9286 6.10714C14.9286 6.28711 14.8571 6.45971 14.7298 6.58697C14.6026 6.71422 14.43 6.78571 14.25 6.78571H10.8571C10.6772 6.78571 10.5046 6.71422 10.3773 6.58697C10.2501 6.45971 10.1786 6.28711 10.1786 6.10714ZM4.07143 0C2.99162 0 1.95603 0.428953 1.19249 1.19249C0.428953 1.95603 0 2.99162 0 4.07143V14.9286C0 16.0084 0.428953 17.044 1.19249 17.8075C1.95603 18.571 2.99162 19 4.07143 19H14.9286C16.0084 19 17.044 18.571 17.8075 17.8075C18.571 17.044 19 16.0084 19 14.9286V4.07143C19 2.99162 18.571 1.95603 17.8075 1.19249C17.044 0.428953 16.0084 0 14.9286 0H4.07143ZM1.35714 4.07143C1.35714 3.35156 1.64311 2.66117 2.15214 2.15214C2.66117 1.64311 3.35156 1.35714 4.07143 1.35714H14.9286C15.6484 1.35714 16.3388 1.64311 16.8479 2.15214C17.3569 2.66117 17.6429 3.35156 17.6429 4.07143V14.9286C17.6429 15.6484 17.3569 16.3388 16.8479 16.8479C16.3388 17.3569 15.6484 17.6429 14.9286 17.6429H4.07143C3.35156 17.6429 2.66117 17.3569 2.15214 16.8479C1.64311 16.3388 1.35714 15.6484 1.35714 14.9286V4.07143Z" fill={ tab === 0 ? '#48484A' : 'white'}/>
</svg>Заказы</div>
            <div style={{ display: isMaster ? 'block' : 'none' }} onClick={() => {changeTab(1)}} className={ `${styles.admin_tab} ${ tab === 1 ? styles.admin_tab_active : styles.admin_tab }` }><svg className={ styles.admin_tab_svg } xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
<path d="M12.288 6.95664V-0.130859H-0.258148V21.1316H5.31794V16.8791H6.71196V21.1316H19.2582V6.95664H12.288ZM3.22691 18.2966H1.83288V16.8791H3.22691V18.2966ZM3.22691 14.7529H1.83288V13.3354H3.22691V14.7529ZM3.22691 11.2091H1.83288V9.79164H3.22691V11.2091ZM3.22691 7.66539H1.83288V6.24789H3.22691V7.66539ZM3.22691 4.12164H1.83288V2.70414H3.22691V4.12164ZM8.80299 2.70414H10.197V4.12164H8.80299V2.70414ZM6.71196 14.7529H5.31794V13.3354H6.71196V14.7529ZM6.71196 11.2091H5.31794V9.79164H6.71196V11.2091ZM6.71196 7.66539H5.31794V6.24789H6.71196V7.66539ZM6.71196 4.12164H5.31794V2.70414H6.71196V4.12164ZM10.197 18.2966H8.80299V16.8791H10.197V18.2966ZM10.197 14.7529H8.80299V13.3354H10.197V14.7529ZM10.197 11.2091H8.80299V9.79164H10.197V11.2091ZM10.197 7.66539H8.80299V6.24789H10.197V7.66539ZM17.8641 19.7141H12.288V18.2966H13.6821V16.8791H12.288V14.7529H13.6821V13.3354H12.288V11.2091H13.6821V9.79164H12.288V8.37414H17.8641V19.7141Z" fill={ tab === 1 ? '#48484A' : 'white'}/>
</svg>Компании</div>
            <div style={{ display: isMaster ? 'block' : 'none' }} onClick={() => {changeTab(2)}} className={ `${styles.admin_tab} ${ tab === 2 ? styles.admin_tab_active : styles.admin_tab }` }><svg className={ styles.admin_tab_svg } xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
<path d="M17.2727 0.832682C16.3141 0.541016 15.2605 0.416016 14.25 0.416016C12.5659 0.416016 10.7523 0.749349 9.5 1.66602C8.24773 0.749349 6.43409 0.416016 4.75 0.416016C3.06591 0.416016 1.25227 0.749349 0 1.66602V13.8743C0 14.0827 0.215909 14.291 0.431818 14.291C0.518182 14.291 0.561364 14.2493 0.647727 14.2493C1.81364 13.7077 3.49773 13.3327 4.75 13.3327C6.43409 13.3327 8.24773 13.666 9.5 14.5827C10.6659 13.8743 12.7818 13.3327 14.25 13.3327C15.675 13.3327 17.1432 13.5827 18.3523 14.2077C18.4386 14.2493 18.4818 14.2493 18.5682 14.2493C18.7841 14.2493 19 14.041 19 13.8327V1.66602C18.4818 1.29102 17.9205 1.04102 17.2727 0.832682ZM17.2727 12.0827C16.3227 11.791 15.2864 11.666 14.25 11.666C12.7818 11.666 10.6659 12.2077 9.5 12.916V3.33268C10.6659 2.62435 12.7818 2.08268 14.25 2.08268C15.2864 2.08268 16.3227 2.20768 17.2727 2.49935V12.0827Z" fill={ tab === 2 ? '#48484A' : 'white'}/>
</svg>Меню</div>
            <div onClick={() => {changeTab(3)}} className={ `${styles.admin_tab} ${ tab === 3 ? styles.admin_tab_active : styles.admin_tab }` }><svg className={ styles.admin_tab_svg } xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none">
<path d="M3.39286 22.9114H-0.424103V13.382H3.39286V22.9114ZM14.0804 22.9114H10.2634V8.6173H14.0804V22.9114ZM19.4241 22.9114H15.6071V3.05848H19.4241V22.9114ZM8.73661 22.9114H4.91965V-0.912109H8.73661V22.9114Z" fill={ tab === 3 ? '#48484A' : 'white'}/>
</svg>Статистика</div>
            <button onClick={ exit } className={ styles.admin_btn_out }>Выйти</button>
          </sidebar>
          <main style={{ backgroundColor: "#fff", padding: "16px 30px", margin: "40px 20px 40px 0", borderRadius: "40px"}}>
            {/* <div className={ styles.admin_header }>Панель администратора</div> */}
              { componentsArr[tab] }
          </main>
        </div>
    </div>
        
    )
}