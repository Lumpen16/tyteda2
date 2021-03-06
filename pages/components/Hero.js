import styles from './Hero.module.css'
import { useDispatch } from 'react-redux'
import { toggleReqModal } from '../../store/authSlice'
import { useEffect, useState } from 'react'

function Hero() {

    const [ht, setHt] = useState('1920')
    const dispatch = useDispatch()  
    useEffect(() => {
        setHt(document.querySelector('body').getBoundingClientRect().right)
    }, [])
    

    return (
        <div className={ styles.hero_master_container }>
            <img className={ styles.hero_img }  src="./karty-zywieniowe.jpeg" style={{ position: 'absolute', zIndex: -1,zIndex: '0', width: `${ht}`, height: 'autopx', opacity: '0.5', filter: 'blur(6px)' }}/>
            <div className={ styles.hero_container }>
                <h1 className={ styles.hero_header }>
                    Корпоративное питание от <span className={ styles.hero_buisiness}>TYTEDA</span>
                </h1>
                <div style={{ display: 'flex'}}>
                   <img className={ styles.hero_img } src='./combo-primer.png'></img>
                    <ul className={ styles.hero_list_container }>
                        <li className={ styles.hero_list_item }><img style={{ marginRight: "20px"}} src="./Food.svg"></img>Доставка 24/7</li>
                        <li className={ styles.hero_list_item }><img style={{ marginRight: "20px"}} src="./Food.svg"></img>Бесплатная дегустация</li>
                        <li className={ styles.hero_list_item }><img style={{ marginRight: "20px"}} src="./Food.svg"></img>Индивидуальный подход</li>
                    </ul>
                </div>
                <button onClick={ () => dispatch(toggleReqModal())} className={ styles.hero_button }>Заказать</button>
            </div>
        </div>
    )
}

export default Hero;