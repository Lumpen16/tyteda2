import styles from './Companies.module.css'
import CompaniesItem from '../profile/CompaniesItem'
import axios from 'axios'
import { toggleModal, toggleAdminModal } from '../authSlice'
import { useDispatch } from 'react-redux'
import { useState, useCallback, useEffect } from 'react'



export default function Companies() {

    const dispatch = useDispatch()
    let companies = []
    const [buffer, setBuffer] = useState([])
    let [list, setList] = useState([])
    const [name, setName] = useState('')



    async function fetchCompanies() {
        companies = await (await fetch('https://sleepy-crag-49787.herokuapp.com/company')).json()
        setBuffer(companies)
        console.log(buffer)
        setList(companies.map( company => <CompaniesItem admin key={ company._id } id={company._id } name={ company.name } img={ company.image } />))
        // console.log(companies)
    }

    const cb_fetchCompanies = useCallback( () => {
        fetchCompanies().then()
    },[])

    useEffect(() => {
        cb_fetchCompanies()
        
        console.log(list)
    }, [])

    useEffect(() => {
        search()
    }, [name])

    function search() {
        
        if (name === "") {

            setList(buffer.map( company => <CompaniesItem admin key={ company._id } id={company._id } name={ company.name } img={ company.image }/>))
        }
        else {
            console.log(name)
            setList(buffer.filter( (company) => name.includes(company.name)).map( company => <CompaniesItem admin key={ company._id } id={company._id } name={ company.name } img={ company.image } />))
        }
    }

    return (
        <div className={ styles.companies_container }>
            <div className={ styles.companies_button_container}>
                <button onClick={ () => dispatch(toggleModal())} className={ styles.companies_button }>Добавить компанию +</button>
                <button onClick={ () => dispatch(toggleAdminModal())}className={ styles.companies_button }>Добавить админа +</button>
            </div>
            <input onChange={(e) => {setName(e.target.value)} } className={ styles.companies_search } value={ name } type='text' placeholder='Поиск по названию компании'></input>
            <div className={ styles.companies_list_container }>
                { list }
            </div>
        </div>
    )
}