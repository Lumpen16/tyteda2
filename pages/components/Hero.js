import styles from './Hero.module.css'

function Hero() {
    return (
        <div>
            <div className={ styles.hero_container }>
                <h1 className={ styles.hero_header }>
                    Корпоративное питание от <span className={ styles.hero_buisiness}>TYTEDA.БИЗНЕС</span>
                </h1>
                <img></img>
                <ul className={ styles.hero_buisiness}>
                    <li className={ styles.hero_list_item }>Индивидуальный подход</li>
                    <li className={ styles.hero_list_item }>Доставка 24/7</li>
                    <li className={ styles.hero_list_item }>Бесплатный дегустационный набор перед заключением договора</li>
                </ul>
                <button className={ styles.hero_button }>Заказать</button>
            </div>
        </div>
    )
}

export default Hero;