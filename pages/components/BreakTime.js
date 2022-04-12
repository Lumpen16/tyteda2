import styles from './BreakTime.module.css'
import { useDispatch } from 'react-redux'
import { toggleReqModal } from '../../store/authSlice'

function BreakTime() {

    const dispatch = useDispatch()
    return (
        <div className={ styles.breaktime_master_container }>
            <div className={ styles.breaktime_container }>
                <h1 className={ styles.breaktime_header }>Сделай перерыв</h1>
                <h3 className={ styles.breaktime_header3 }>Бесплатная дегустация перед заключением договора</h3>
                <button onClick={ () => dispatch(toggleReqModal())} className={ styles.breaktime_button}>Заказать</button>
            </div>
            <img className={ styles.breaktime_img} src='./cup-of-coffee.png'/>
        </div>
    )
}

export default BreakTime;