import styles from './Statistics.module.css'
import axios from 'axios'
import { useEffect, useState, useMemo } from 'react'



// function DishesStats() {
//     <div></div>
// }


function CategoriesStats({ orders }) {

    const [dishes, setDishes] = useState([])
    const [categories, setCategories] = useState([])


    const today = new Date();

    const [startDate, setStartDate] = useState(today.toLocaleDateString().split('.').reverse().join('-'))
    const [ords, setOrds] = useState(orders)
    today.setDate(today.getDate() + 30)
    const [endDate, setEndDate] = useState(today.toLocaleDateString().split('.').reverse().join('-'))

    // console.log(orders)
    
    function getMostPopular(category) {
        let max = 0;
        let mostPopular = 'Ничего(';
        let min = 0;
        let lessPopular = 'Ничего'
        let counter = 0;
        for (let cat of (new Set(category.dishes))) {
            for (let cat2 of category.dishes) {
                if (cat2.name === cat.name) {
                    counter++
                }
            }
            if (max < counter) {
                max = counter
                mostPopular = cat.name
            }
            if (min > counter) {
                min = counter
                lessPopular = cat.name
            }
            counter = 0
        }
        return [{name: mostPopular, count: max}, {name: lessPopular, count: min}]
    }

    function checkDate(date) {
        const d = new Date(...date.split('.').reverse())
        const firstDate = new Date(...startDate.split('-'))
        const secondDate = new Date(...endDate.split('-'))
        // console.log('im here')
        if (firstDate.valueOf() < d.valueOf() && secondDate.valueOf() > d.valueOf()){
            console.log(firstDate, d, secondDate)
            console.log('im there')
            return true;
        }
        return false;
    }


    async function getOrders() {
        let orders = await axios.get('https://api.tyteda.ru/order').then( res => res.data)
        // console.log(ords)
        // checkDate('2022.04.05')
        setOrds(orders.filter( order => checkDate(order.date)))
        // console.log(orders)
        // console.log()
    }
    

    useEffect(() => {
        let dishList = [];
        // console.log(orders)
        for (let order of ords) {
            dishList.push(...order.dish)
        }          
        // console.log(dishList)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        setDishes(dishList)
        getStats(dishList)
        // console.log(dishes)
    }, [ords])

    useEffect(() => {
        getOrders()
    }, [startDate, endDate])

    

    // const stats = useMemo( () => getStats(dishes), [dishes, orders])
    // console.log(stats)
    function getStats(dishList) {
        // console.log(dishes.filter(dish => dish.type === 'Салат').length)
        // console.log(dishList)
        const catObject = [
            {name: 'Салат', dishes: dishList.filter( dish => dish.type === 'Салат'), popular: '', notPopular: ''}, 
            {name: 'Первое',dishes: dishList.filter( dish => dish.type === 'Первое'), popular: '', notPopular: ''}, 
            {name: 'Второе', dishes: dishList.filter( dish => dish.type === 'Второе'), popular: '', notPopular: ''}, 
            {name: 'Гарнир', dishes: dishList.filter( dish => dish.type === 'Гарнир'), popular: '', notPopular: ''}, 
            {name: 'Соус',dishes: dishList.filter( dish => dish.type === 'Соус'), popular: '', notPopular: ''}, 
            {name: 'Напиток', dishes: dishList.filter( dish => dish.type === 'Напиток'), popular: '', notPopular: ''}
        ]
        
        for (let i = 0; i < catObject.length; i++) {
            [catObject[i].popular, catObject[i].notPopular] = getMostPopular(catObject[i]);
        }

        setCategories(catObject)
        // console.log(catObject) //
        // console.log(categories) //

        return catObject

        
    }

    return (
        <div>
            <h4>Выбрать период</h4>
            <input className={ styles.stats_date } value={ startDate } onChange={ (e) => setStartDate(e.target.value) } type="date" />
            <input className={ styles.stats_date } value={ endDate } onChange={ e => setEndDate(e.target.value) } type="date" />
            { categories.map( cat => <div key={Math.random()}><h1>{cat.name}</h1><p>Заказано в данной категории: {cat.dishes.length}</p><p>Самое популярное блюдо в категории: { cat.popular.name } было заказано { cat.popular.count } раза</p></div>)}
        </div>
    )
}

function CompaniesStats({ name, id, countOfUsers, orders }) {

    const [companyOrders, setCompanyOrders] = useState([])


    useEffect( () => {
        setCompanyOrders(orders.filter( order => order.company === id))
        // console.log(orders, id)
    }, [])


    return (
        <div>
            <h1>{ name }</h1>
            <p>Количество заказанных обедов: { companyOrders.length }</p>
            <p>Количество пользователей: { countOfUsers }</p>
            {/* <p>Заказывают обеды { (orders.length / countOfUsers).toFixed(1) } пользователей</p> */}
        </div>
    )
}


export default function Statistics() {




    const [companies, setCompanies] = useState([])
    const [orders, setOrders] = useState([])



    // function handleStartDate(e) {
    //     setStartDate(e.target.value)
    //     getOrders()
    // }

    // function handleEndDate(e) {
    //     setEndDate(e.target.value)
    //     getOrders()
    // }

    async function getCompanies() {
        let comp = await axios.get('http://194.58.122.115/company').then( res => res.data )
        setCompanies(comp)
        // console.log(companies)
    }

    

    async function getOrders() {
        let ords = await axios.get('http://194.58.122.115/order').then( res => res.data)
        // console.log(ords)
        // checkDate('2022.04.05')
        setOrders(ords)
        // console.log(orders)
        // console.log()
    }

    useEffect(() => {
        getCompanies()
        getOrders()
    }, [])

    

    return (
        <div className={ styles.stats_container }>
            <div className={ styles.stats_companies }>
                <div className={ styles.stats_companies_item }>
                    <h2>Статистика по компаниям:</h2>

                {orders.length > 0 && companies.map( company => <CompaniesStats key={ Math.random()} name={ company.name } id={ company._id} countOfUsers={ company.users.length } orders={ orders }></CompaniesStats>)}
                
                </div>
                <div className={ styles.stats_companies_item }>
                    <h2>Статистика по категориям</h2>
                    {orders.length > 0 && <CategoriesStats orders={ orders }></CategoriesStats>}
                </div>
            </div>
        </div>
    )
}