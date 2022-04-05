import styles from './dishesList.module.css'
import DishesListItem from './dishesListItem'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function DishesList() {
    // const sauce = {name: 'Соус', dishes: [], id: 0}
    // const first = {name: 'Первое', dishes: [], id: 1}
    // const garnir = { name: 'Гарнир', dishes: [], id: 2}
    // const second = { name: 'Второе', dishes: [], id: 3}
    // const salad = {name: 'Салат', dishes: [], id: 4}
    // const drinks = { name: 'Напиток', dishes: [], id: 5}


    const dishes = [
        {name: 'Салат', dishes: [], id: 0},
        {name: 'Первое', dishes: [], id: 1},
        { name: 'Гарнир', dishes: [], id: 2},
        {name: 'Второе', dishes: [], id: 3},
        {name: 'Соус', dishes: [], id: 4},
        { name: 'Напиток', dishes: [], id: 5}
    ]
    
    const [renderDishes, setRenderDishes] = useState([])


    // async function getCompanyName() {
    //     return await axios.get(`https://sleepy-crag-49787.herokuapp.com/company/getOne?id=${localStorage.getItem('company_id')}`).then( res => res.data.name)
    // }
    async function createOrder() {
        const name = await axios.get(`https://sleepy-crag-49787.herokuapp.com/company/getOne?id=${localStorage.getItem('company_id')}`).then( res => res.data.name)
        console.log(name)
        const dishesID = JSON.parse(localStorage.getItem('order')).map( dish => Object.assign({}, {name: dish.name, type: dish.type, company: name}))

        console.log(dishesID)
        const tomorrow = new Date()
        tomorrow.setDate((new Date()).getDate() + 1)



        axios.post('https://sleepy-crag-49787.herokuapp.com/order/create', {
            dish: dishesID,
            creator: localStorage.getItem('_id'),
            company: localStorage.getItem('company_id'),
            date: tomorrow.toLocaleDateString()
        }).then( res => res.data)
    }
    
    async function getDishes() {
        let dishesList = await axios.get('https://sleepy-crag-49787.herokuapp.com/dish').then( res => res.data)
        for (let dish of dishesList) {
            for (let item of dishes) {
                if (dish.type === item.name) {
                    item.dishes.push(dish)
                    break
                }
            }
        }
        setRenderDishes(dishes)
    }

    useEffect(() => {
        getDishes()

    }, [])

    
    // const arr = [salad, first, garnir, second, sauce, drinks].map(item => {
    //     return (
    //         <DishesListItem key={item.id} name={item.name} dishes={item.dishes} />
    //     )
    // })
    // console.log(arr)
    return (
        <div>
            <div className={ styles.dishes_container }>
                {/* {arr} */}
                { renderDishes.map( item => <DishesListItem key={item.id} name={item.name} dishes={item.dishes} />)}
                
            </div>
            <div className={ styles.dishes_button_container }>
                    <button onClick={ createOrder } className={ styles.dishes_button }>
                        Подтвердить заказ
                    </button>
                </div>
        </div>
        
    )
}