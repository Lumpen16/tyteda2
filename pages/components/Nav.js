import styles from './Nav.module.css'

function Nav() {

    return (
        <nav className={styles.nav}>
            <div className={ styles.nav_logo }>
                <img src='logo.svg'></img>
            </div>
            <div className={ styles.nav_about }>
                <div className={ styles.nav_item}>О нас</div>
                <div className={ styles.nav_item}>Наше меню</div> 
                <div className={ styles.nav_item}>Тарифы</div>
                <div className={ styles.nav_item}>Отзывы</div>
                <div className={ styles.nav_item}>Контакты</div>
            </div>

            <div className={ styles.nav_right}>
                <img className={ styles.nav_client} src='acconut.svg'></img>
                <h3 className={ styles.nav_phone }>+7 (495)139-66-11</h3>
                <button className={ styles.nav_btn }>Оставить заявку</button>
            </div>
        </nav>
    )
    
}

export default Nav;