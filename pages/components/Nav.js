import styles from './Nav.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toggleReqModal } from '../../store/authSlice'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


import { slide as Menu } from 'react-burger-menu'


function Nav() {
    const dispatch = useDispatch()
    const router = useRouter()

    const [width, setWidth] = useState('1920')


    useEffect(() => {
        setWidth(document.querySelector('body').getBoundingClientRect().right)
    }, [])


    const mobile_nav =
    <div>
        <svg id="nav_click" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#11d028"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        <Menu className={ styles.nav_mob } pageWrapId='nav_click' outerContainerId='nav_click'>
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
        </Menu>
    </div>

    const desktop_nav = <nav className={styles.nav}>
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
    return (
        <div id='nav_container' style={{ background: "#fff"}}>
            { parseInt(width) > 768 ? desktop_nav : mobile_nav }
            
        </div>
        
    )
    
}

export default Nav;