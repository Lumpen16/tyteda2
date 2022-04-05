import styles from './Modal.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../authSlice'
import axios from 'axios' 
import { useRouter } from 'next/router'

export default function Modal({ show, name }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const router = useRouter()
    
    async function authorize() {
        if (username && password) {
            const companies = await axios.get('https://sleepy-crag-49787.herokuapp.com/company').then( res => res.data)
            // console.log(companies)
            await axios.post('https://sleepy-crag-49787.herokuapp.com/login', {
                username: username,
                password: password
            }).then( res => localStorage.setItem('access_token', res.data.access_token)).catch( error => console.log(error))

            await axios.get('https://sleepy-crag-49787.herokuapp.com/profile', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then( res => {
                localStorage.setItem('_id', res.data._id)
                localStorage.setItem('role', res.data.role.trim())
                console.log(res.data)
                
                // console.log(owner)
                
                if (localStorage.getItem('role').trim() === 'mAdmin') {
                    // let owner = companies.filter( company => company.name === res.data.owner)[0]._id
                    localStorage.setItem('company_id', res.data.owner)
                    router.push('/masterUser')
                }
                else if (localStorage.getItem('role').trim() === 'User') {
                    localStorage.setItem('company_id', res.data.company)
                    router.push('/userProfile')
                }
            })
        }
        dispatch(toggleModal())
    }

    return(
        <div onClick={() => dispatch(toggleModal()) } className={ styles.modal } style={{ display: show ? 'block' : 'none' }}>
            <div onClick={ (e) => e.stopPropagation() } className={ styles.modal_main }>
            <h2>Войти в личный кабинет</h2>
                <h3>{ name }</h3>
                <input onChange={ (e) => setUsername(e.target.value) } className={ styles.modal_input } value={ username } placeholder="Имя пользователя" type='text'/>
                <input onChange={ (e) => setPassword(e.target.value) } className={ styles.modal_input } value={ password } placeholder="Пароль" type='password'/>
                <button onClick={ authorize } className={ styles.modal_button }>Войти</button>
                
            </div>
        </div>
    )
}