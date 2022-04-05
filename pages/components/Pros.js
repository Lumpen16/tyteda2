import styles from './Pros.module.css'
import Image from 'next/image'
function Pros() {
    return (
        <div className={ styles.pros_master_container}>
            <div className={ styles.pros_container }>
                <h1 className={ styles.pros_header }>Преимущества работы с нами</h1>
                <div className={ styles.pros_list }>
                    <div className={ styles.pros_item } style={{ background: 'url(./feature1.svg)'}}>Зона доставки Москва и Московская область</div>
                    <div className={ styles.pros_item } style={{ background: 'url(./feature2.svg)'}}>Бесплатно доставим холодильник и СВЧ-печь</div>
                    <div className={ styles.pros_item } style={{ background: 'url(./feature3.svg)'}}>
                        <div>Доставим заказ <span>24/7</span> в установленное время</div>
                    </div>
                    <div className={ styles.pros_item } style={{ background: 'url(./feature4.svg)'}}>Заключаем договор</div>
                </div>
            </div>
        </div>
    )
}

export default Pros;