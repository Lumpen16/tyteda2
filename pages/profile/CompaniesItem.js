import styles from './Companies.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../authSlice'
import axios from 'axios'

export default function CompaniesItem({id, name, img, admin=false }) {
    const [show, setShow] = useState(false)
    const dispatcher = useDispatch()

    const [deleted, setDeleted] = useState(false)
    function handleClick(e) {
        e.preventDefault()
        dispatcher(toggleModal())
    }

    function deleteCompany() {
        axios.get(`https://sleepy-crag-49787.herokuapp.com/company/delete?id=${id}`)
        setDeleted(true)
    }


    const forAdmin = (<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: "0 auto", alignItems: "flex-end" }}>
                            <button className={ styles.companies_button }>Сохранить</button>
                            <button onClick={ deleteCompany } className={ styles.companies_button }>Удалить</button>
                        </div>)
    const forUser = <button onClick={(e) => handleClick(e) } className={ styles.companies_button }>Войти</button>
    return (
        <div style={{ display: deleted ? 'none' : 'block' }} className={ styles.companies_card }>
            <img className={ styles.companies_img } src={ 'https://sleepy-crag-49787.herokuapp.com/' + img } />
            <div>
                <h1>{ name ? name : 'tmp' }</h1>

                { admin ? forAdmin : forUser }
            </div>


            
        </div>
    )
}