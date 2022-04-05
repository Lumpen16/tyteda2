import styles from './Modal.module.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleAdminModal } from '../authSlice'
import axios from 'axios'

export default function AdminModal({ show }) {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [subPassword, setSubPassword] = useState('')
    const [option, setOption] = useState('')
    const dispatch = useDispatch()

    const [companies, setCompanies] = useState([])

    async function handleSubmit() {
        
        let mAdminID = ''
        let companyID = getIdByName(option)
        companyID = companies.filter( company => company.name === option)[0].id
        console.log(companyID)
        await axios.post('https://sleepy-crag-49787.herokuapp.com/user/create', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            username: name,
            password: password,
            email: `${Math.random()}@gmail.com`,
            role: 'mAdmin',
            owner: companyID
        }).then(res => mAdminID = res.data._id)
        // console.log(mAdminID)
        dispatch(toggleAdminModal())
        
        console.log(companyID)
        await axios.post(`https://sleepy-crag-49787.herokuapp.com/company/addCreator`, {
            creator: mAdminID,
            id: companyID
        }).then( res => console.log(res.data))
    }

    // 62443426d08afa025062022a
    // 62432f7078fa38ba7fc268d0

    function getIdByName(name) {
        const companyObj = companies.filter( company => company.name === name )[0]
        console.log(companyObj)
        return (companies.filter( company => company.name === name ))[0]._id
    }

    async function getCompanies() {
        const res = await axios.get('https://sleepy-crag-49787.herokuapp.com/company')
        setCompanies(res.data.map( company => Object.assign({}, {name: company.name, id: company._id}) ))
    }

    useEffect(() => {
        getCompanies()
    }, [])
    return(
        <div onClick={() => dispatch(toggleAdminModal()) } className={ styles.modal } style={{ display: show ? 'block' : 'none' }}>
            <div onClick={ (e) => e.stopPropagation() } className={ styles.modal_main }>
                <input type='text' value={name} onChange={ e => setName(e.target.value)} placeholder="Имя админа" />
                <select onChange={ e => setOption(e.target.value)}>
                    <option disabled>Выберите компанию</option>
                    { companies.map( (shit) => <option key={ Math.random() } value={shit.name}>{shit.name}</option>)}
                </select>
                <input value={ password } onChange={ e => setPassword(e.target.value)} type='password' placeholder="Пароль админа" />
                <input value={ subPassword } onChange={ e => setSubPassword(e.target.value)} type='password' placeholder="Подтверждение пароля" />
                <button onClick={ handleSubmit }>Добавить</button>
            </div>
        </div>
    )
}