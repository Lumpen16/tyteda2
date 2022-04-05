import styles from './Orders.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import * as htmlToPDFMake from 'html-to-pdfmake'




function createPDF(dishCompany, dishes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let html = htmlToPDFMake(document.getElementById('orders').innerHTML)
    console.log(html)
    const documentDefinition = { content: html }
    pdfMake.createPdf(documentDefinition).print()
    
}





// function RenderOrders({dishType, chosenCompany, cmp}) {
//     const [dishes, setDishes] = useState([])
    
    
//     if (chosenCompany === 'Все') {
        
        
//         (async function(){
//             let bufferDishes1 = []
//         for (let company of cmp) {
//             for (let order of company.orders) {
//                 for (let dish of order.dish) {
//                     bufferDishes1.push(dish)
//                 }
//             }
//         }
//         let bufferDishes2 = [] 
//         for (let dish of bufferDishes1) {
//             let m_dish =  await axios.get(`https://sleepy-crag-49787.herokuapp.com/dish/getOne?id=${dish}`).then(res => res.data)
//             bufferDishes2.push(m_dish)
//         }
//         setDishes(bufferDishes2)})()
//         return (
//             <div>
//                 <ul>
//                     { dishes.filter( dish => dish.type === dishType ).map( dish => <li key={Math.random()}>{ dish.name }</li>) }
//                 </ul>
//             </div>
//         )
//     }   
// }

function OrdersItem({dishType, dishes, dishCompany}) {

    // const [dishesCount, setCountDishes] = useState()
    const [dis, setDis] = useState([])
    function countDishes(dis) {
        let counter = 0
        for (let dish of dishes) {
            if (dis === dish.name) {
                counter++
            }
        }
        return counter
    }

    // useEffect(() => {
    //     let arr = []
    //     for (let dish of dishes) {
    //         if (!arr.includes(dish.name)) {
    //             arr.push(dish.name)
    //         }
    //     }
    //     setCountDishes(arr)
    // }, [])

    
    
    
    function getDis() {
        let buffer = []
        for (let dish of dishes) {
            if (!buffer.some( b => b.name === dish.name)) {
                buffer.push(dish)
            }
        }
        // console.log(buffer)
        setDis(buffer)
        // console.log(buffer.filter( dish => dish.type === dishType && (dishCompany === 'Все' || dish.company === dishCompany)))
        // console.log(arr)

        
    }

     

    useEffect(() => {
        getDis()
        }, [dishes])

    return (
        <div>
            <ul>
                { dis.filter( dish => dish.type === dishType && (dishCompany === 'Все' || dish.company === dishCompany)).map( dish => <li key={Math.random()}>{ dish.name } x { countDishes(dish.name)} </li>)}
            </ul>
        </div>
    )
}



export default function Orders() {

    const [companies, setCompanies] = useState([])
    const tomorrow = new Date() 
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [date, setDate] = useState(tomorrow.toLocaleDateString().split('.').reverse().join('-'))
    const [dishes, setDishes] = useState([])
    const companyObj = []
    const [cmp, setCmp] = useState([])
    const [chosenCompany, setChosenCompany] = useState('Все')
    const ords = []

    const [todayDishes, setTodayDishes] = useState()


    async function getCompanies() {
        const res = await axios.get('https://sleepy-crag-49787.herokuapp.com/company')
        setCompanies(res.data.map( company => Object.assign({}, {name: company.name, id: company._id}) ))
    }

    async function parseOrders(orders) {
        
        let companies = new Set(orders.map( company => company.company))
        // console.log(companies)

        

        for (let company of companies) {
            companyObj.push(Object.assign({}, {company_id: company, orders: []}))
        }
        

        for (let company of companyObj) {
            for (let order of orders) {
                if (company.company_id === order.company) {
                    company.orders.push(order)
                }
            }
        }
        

        // for (let company of companyObj) {
        //     for (let order of company.orders) {
        //         let dishesList = []
        //         for (let dish of order.dish) {
        //             dishesList.push(axios.get(`https://sleepy-crag-49787.herokuapp.com/dish/getOne?id=${dish}`))
        //         }
        //         company.orders.dish = dishesList
        //     }
        // }

        setCmp(companyObj)
        // console.log(cmp)
        let bufferDishes = []

        for (let company of companyObj) {
            // console.log(company)
            for (let order of company.orders) {
                // console.log(order)
                if (order.date === date.split('-').reverse().join('.')) {
                    // console.log(order)
                    bufferDishes.push(...order.dish)
                }
            }
        }
        // console.log(bufferDishes)
        setDishes(bufferDishes)
        // console.log(dishes)
        // let bufferDishes1 = []
        // for (let company of cmp) {
        //     for (let order of company.orders) {
        //         for (let dish of order.dish) {
        //             bufferDishes1.push(dish)
        //         }
        //     }
        // }
        // // console.log(bufferDishes1)
        // let bufferDishes2 = [] 
        // for (let dish of bufferDishes1) {
        //     let m_dish =  axios.get(`https://sleepy-crag-49787.herokuapp.com/dish/getOne?id=${dish}`).then(res => res.data)
        //     bufferDishes2.push(m_dish)
        // }
        // console.log(bufferDishes2)
        // setDishes(bufferDishes2)
        // console.log(dishes)
    }

    async function getOrders() {
        let orders = await axios.get('https://sleepy-crag-49787.herokuapp.com/order').then( res => res.data)
        ords.push(...orders)
        // console.log(orders)
        parseOrders(orders)
    }

    


    useEffect(() => {
        getOrders(ords)
    }, [date])


    useEffect(() => {
        getCompanies()
        getOrders()
    }, [])

    return (
        <div className={ styles.orders_container }>
            <div className={ styles.orders_header }>
                <button className={ styles.orders_refresh }>Обновить</button>
                <div className={ styles.orders_print_container }>
                    {/* <button className={ styles.orders_print_button }>Поименный</button> */}
                    <button onClick={ () => createPDF(chosenCompany, dishes) } className={ styles.orders_print_button }>Отчет</button>
                </div>
                <div className={ styles.orders_date_container }>
                    <input className={ styles.orders_date } type='date' onChange={ e => setDate(e.target.value)} value={ date }></input>
                    <select value={ chosenCompany } onChange={ e => setChosenCompany(e.target.value)}className={ styles.orders_companies }>
                        <option>Все</option>
                        { companies.map( (company) => <option key={Math.random()}>{company.name}</option>) }
                    </select>
                    <button className={ styles.orders_choose }>Выбрать</button>
                </div>
            </div>
            <div id="orders" className={ styles.orders_orders }>
                <div className={ styles.orders_orders_header }>{chosenCompany === 'Все' ? 'Все компании' : chosenCompany}</div>

                <div className={ styles.orders_orders_result_container }>
                    <div className={ styles.orders_orders_result_header }>Салаты:
                        <div>
                            <OrdersItem dishCompany={ chosenCompany } dishType='Салат' dishes={ dishes }></OrdersItem>
                        </div>
                    </div>
                    
                </div>  

                <div className={ styles.orders_orders_result_container }>
                    <div className={ styles.orders_orders_result_header }>Первое:
                        <div>
                            <OrdersItem dishCompany={ chosenCompany } dishType='Первое' dishes={ dishes }></OrdersItem>
                        </div>
                    </div>
                </div>

                <div className={ styles.orders_orders_result_container }>
                    <div className={ styles.orders_orders_result_header }>Гарниры:
                        <div>
                            <OrdersItem dishCompany={ chosenCompany } dishType='Гарнир' dishes={ dishes }></OrdersItem>
                    </div>
                </div>

                <div className={ styles.orders_orders_result_container }>
                    <div className={ styles.orders_orders_result_header }>Второе:
                        <div>
                        <OrdersItem dishCompany={ chosenCompany } dishType='Второе' dishes={ dishes }></OrdersItem>
                        </div>
                    </div>
                </div>

                <div className={ styles.orders_orders_result_container }>
                    <div className={ styles.orders_orders_result_header }>Соусы:
                        <div>
                        <OrdersItem dishCompany={ chosenCompany } dishType='Соус' dishes={ dishes }></OrdersItem>
                        </div>
                    </div>
                </div>

                <div className={ styles.orders_orders_result_container }>
                    <div className={ styles.orders_orders_result_header }>Напитки:
                        <div>
                        <OrdersItem dishCompany={ chosenCompany } dishType='Напиток' dishes={ dishes }></OrdersItem>
                        </div>
                    </div>
                </div>

                
                
            </div>
            </div>
            </div>
    )
}