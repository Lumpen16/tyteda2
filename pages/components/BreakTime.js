import styles from './BreakTime.module.css'

function BreakTime() {
    return (
        <div className={ styles.breaktime_master_container }>
            <div className={ styles.breaktime_container }>
                <h1 className={ styles.breaktime_header }>Сделай перерыв</h1>
                <h3 className={ styles.breaktime_header3 }>Бесплатная дегустация перед заключением договора</h3>
                <button className={ styles.breaktime_button}>Заказать</button>
            </div>
            <img className={ styles.breaktime_img} src='./cup-of-coffee.png'/>
        </div>
    )
}

export default BreakTime;