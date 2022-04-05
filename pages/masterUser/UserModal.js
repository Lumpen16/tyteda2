import styles from './UserModal.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleUserModal } from '../authSlice'
import axios from 'axios' 
import { useRouter } from 'next/router'

export default function Modal({ show, name }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [subPassword, setSubPassword] = useState('')
    const [fio, setFio] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()


    
    // const router = useRouter()
    
    async function addUserToCompany() {
        if (username && password && fio && subPassword) {
            let userID = ''
            await axios.post('https://sleepy-crag-49787.herokuapp.com/user/create', {
                username: username,
                password: password,
                email: phone,
                role: 'User',
                company: localStorage.getItem('company_id'),
                bio: fio
            }).then(res => {
                userID = res.data._id
            })

            await axios.get(`https://sleepy-crag-49787.herokuapp.com/company/addUser?userId=${userID}&id=${localStorage.getItem('company_id')}`)
        }
        else {
            console.log('lol')
        }
        dispatch(toggleUserModal())
    }

   
    return(
        <div onClick={() => dispatch(toggleUserModal()) } className={ styles.modal } style={{ display: show ? 'block' : 'none' }}>
            <div onClick={ (e) => e.stopPropagation() } className={ styles.modal_main }>
            <h2>Добавить сотрудника</h2>
                <h3>{ name }</h3>
                <input className={ styles.modal_input } type='text' value={ fio } onChange={ e => setFio(e.target.value)} placeholder="Введите ФИО" ></input>
                <input onChange={ (e) => setUsername(e.target.value) } className={ styles.modal_input } value={ username } placeholder="Имя пользователя" type='text'/>
                <input value={ phone } onChange={ (e) => setPhone(e.target.value)}type='phone' className={ styles.modal_input } placeholder="Введите номер телефона" />
                <input onChange={ (e) => setPassword(e.target.value) } className={ styles.modal_input } value={ password } placeholder="Пароль" type='password'/>
                <input onChange={ e => setSubPassword(e.target.value) } type='password' placeholder="Подтвердите пароль" className={ styles.modal_input } value={ subPassword } />
                <button onClick={ addUserToCompany } className={ styles.modal_button }>Создать</button>
                
            </div>
        </div>
    )
}