import styles from './Nav.module.css'
import Link from 'next/link'

function Nav() {

    return (
        <nav className={styles.nav}>
            <div className={ styles.nav_logo }>
                <img src='logo.svg'></img>
            </div>
            <div className={ styles.nav_about }>
                <div  className={ styles.nav_item}><a className={ styles.nav_anchor } href="#corp_out">О нас</a></div>
                <div  className={ styles.nav_item}><a className={ styles.nav_anchor } href="#breakfast">Наше меню</a></div> 
                <div  className={ styles.nav_item}><a className={ styles.nav_anchor } href="#tarifs">Тарифы</a></div>
                <div  className={ styles.nav_item}><a className={ styles.nav_anchor } href="#reviews">Отзывы</a></div>
                <div  className={ styles.nav_item}><a className={ styles.nav_anchor } href="#footer">Контакты</a></div>
            </div>

            <div className={ styles.nav_right}>
                <Link href='/profile'><img className={ styles.nav_client} src='acconut.svg'></img></Link>
                <h3 className={ styles.nav_phone }>+7 (495)139-66-11</h3>
                <button className={ styles.nav_btn }>Оставить заявку</button>
            </div>
        </nav>
    )
    
}

export default Nav;