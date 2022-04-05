import Head from 'next/head' 
import AdminLogin from './AdminLogin'
import styles from './AdminLoginPage.module.css'
export default function AdminLoginPage() {
    return (
      <div className={ styles.form_container }>
        <Head>
          <title>Авторизация</title>
          <meta name="description" content="Авторизация пользователя" />
          <link rel="icon" href="/favicon.svg" />
          <link href="https://fonts.googleapis.com/css2?family=Bad+Script&amp;family=Montserrat:wght@400;600&amp;display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <AdminLogin />
    </div>
        
    )
}