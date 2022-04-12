import { useEffect, useState, useCallback } from 'react'
import styles from './Companies.module.css'
import CompaniesItem from './CompaniesItem'

export default function Companies() {
    let companies = []
    let [list, setList] = useState([])
    const [buffer, setBuffer] = useState([])
    const [name, setName] = useState('')
    async function fetchCompanies() {
        companies = await (await fetch('https://api.tyteda.ru/company')).json()
        setList(companies.map( company => <CompaniesItem key={ company._id } id={company._id } name={ company.name } img={ company.image } />))
        setBuffer(companies)
        // console.log(companies)
        console.log(buffer)
    }

    const cb_fetchCompanies = useCallback( () => {
        fetchCompanies()
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

            setList(buffer.map( (company) => <CompaniesItem key={ company._id } id={company._id } name={ company.name } img={ company.image } />))
        }
        else {
            console.log(name)
            setList(buffer.filter((company) => {name.includes(company.name)}).map( company => <CompaniesItem admin key={ company._id } id={company._id } name={ company.name } img={ company.image } />))
        }
    }

    return (
        <div className={ styles.companies_container }>
                <input onChange={ (e) => setName(e.target.value) } value={ name } className={ styles.companies_search_bar_input } placeholder='Поиск по названию компании' type='text'></input>
            
            <div className={ styles.companies_companies }>
                { list }
            </div>
        </div>

    )
}