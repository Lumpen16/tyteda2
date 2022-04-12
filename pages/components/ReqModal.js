import styles from './ReqModal.module.css'
import { useDispatch } from 'react-redux'
import { toggleReqModal } from '../../store/authSlice'

export default function ReqModal({show}) {
    
    const dispatch = useDispatch()

    return(
        <div onClick={() => dispatch(toggleReqModal()) } className={ styles.modal }  style={{ display: show ? 'block' : 'none' }} >
            <div onClick={ (e) => e.stopPropagation() } className={ styles.modal_main }>
            <h2>Заказать корпоративное питание</h2>
            <input className={ styles.req_modal_input} type="text" placeholder="Ваше имя"></input>
            <input className={ styles.req_modal_input} type="tel" placeholder="Ваш телефон"/>
            <input className={ styles.req_modal_input} type="email" placeholder="Ваш email"/>
            <textarea className={ styles.req_modal_input} name='message' cols="30" rows="5" placeholder="Сообщение"></textarea>
            <button onClick={ () => dispatch(toggleReqModal())} className={ styles.req_modal_button}>Отправить заявку</button>
                {/* <h3>{ name }</h3> */}
                {/* <input onChange={ (e) => setUsername(e.target.value) } className={ styles.modal_input } value={ username } placeholder="Имя пользователя" type='text'/>
                <input onChange={ (e) => setPassword(e.target.value) } className={ styles.modal_input } value={ password } placeholder="Пароль" type='password'/> */}
                {/* <button onClick={ authorize } className={ styles.modal_button }>Войти</button> */}
                
            </div>
        </div>
    )
}