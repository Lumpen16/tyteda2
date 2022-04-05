import styles from './AdminLogin.module.css'
import {useRouter} from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../authSlice'
import axios from 'axios'


export default function AdminLogin() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()
    const dispatch = useDispatch()

    async function checkUser(e) {

        e.preventDefault()
        

        if ( name && password ) {
            await axios
            .post( 'https://sleepy-crag-49787.herokuapp.com/login', {
                username: name,
                password: password
            }).then( (res) => {

                if (res.data.access_token) {
                    localStorage.setItem('access_token', res.data.access_token)
                    console.log(res.data.access_token);
                }
                else {
                    console.log('no token')
                }
                
                // if ( res.data.role === 'Admin') {
                //     router.push('/adminPanel')
                // }
                // else {
                //     console.log(' not admin ')
                // }
            }).catch(error => console.log(error))

            await axios.get( 'https://sleepy-crag-49787.herokuapp.com/profile', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            }).then(res => {
                console.log(res)
                localStorage.setItem('_id', res.data._id)
                localStorage.setItem('role', res.data.role.trim())
                

                if (localStorage.getItem('role').trim() === 'Admin') {
                    router.push('adminPanel')
                }
            }).catch( error => console.log(error))

        }

    }
    //     if (name === "admin" && password == "admin") {
    //         localStorage.setItem('auth', true)
    //         dispatch(setAuth())
    //         router.push('/adminPanel')
    //     }
    //     else {
    //         console.log("Неправильный логин или пароль")
    //     }
    // }
    return (
        <form className={ styles.form }>
            <label id="username">Username:</label>
            <input value={ name } onChange={ (e) => setName(e.target.value)} className={ styles.form_input } type="text" name="username"></input>
            <label id="password">Password:</label>
            <input value={ password } onChange={ (e) => {setPassword(e.target.value)} } className={ styles.form_input } type="password" name="password"></input>
            <button onClick={ (e) => checkUser(e) } className={ styles.form_button }>Login</button>
        </form>
    )
    
    }