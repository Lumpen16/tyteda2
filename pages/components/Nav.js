import styles from './Nav.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toggleReqModal } from '../../store/authSlice'
import { useRouter } from 'next/router'
function Nav() {
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <nav className={styles.nav}>
            <div className={ styles.nav_logo }>
                <img src='logo.svg'></img>
            </div>
            <div className={ styles.nav_about }>
                <div  className={ styles.nav_item}><a onClick={ () => router.push('/')} className={ styles.nav_anchor } href="#corp_out">О нас</a></div>
                <div  className={ styles.nav_item}><a onClick={ () => router.push('/')} className={ styles.nav_anchor } href="#breakfast">Наше меню</a></div> 
                <div  className={ styles.nav_item}><a onClick={ () => router.push('/')} className={ styles.nav_anchor } href="#tarifs">Тарифы</a></div>
                <div  className={ styles.nav_item}><a onClick={ () => router.push('/')} className={ styles.nav_anchor } href="#reviews">Отзывы</a></div>
                <div  className={ styles.nav_item}><a onClick={ () => router.push('/')} className={ styles.nav_anchor } href="#footer">Контакты</a></div>
            </div>

            <div className={ styles.nav_right}>
                <Link href='/prpage'><img className={ styles.nav_client} src='acconut.svg'></img></Link>
                <h3 className={ styles.nav_phone }>+7 (495)139-66-11</h3>
                <button onClick={ () => dispatch(toggleReqModal())} className={ styles.nav_btn }>Оставить заявку</button>
            </div>
        </nav>
    )
    
}

export default Nav;