import styles from './dishesListItem.module.css';
import { useState } from 'react'

export default function DishesListItem({name, dishes, id}) {



    function handleChange(e) {
        let dish = getDishByName(e.target.value)
        console.log(dish)
        let order = JSON.parse(localStorage.getItem('order'))
        for (let item of order) {
            if (item.type === dish.type) {
                order.splice(order.indexOf(item), 1)
            }
        }
        order.push(dish)
        localStorage.setItem('order', JSON.stringify(order))
    }

    function getDishByName(name) {
        return dishes.filter( dish => dish.name === name)[0]
    }
    return (
        <div className={ styles.item_container }>
            <h3>{ name }</h3>
            <select onChange={(e) => handleChange(e) } className={ styles.item_select } >
                <option selected disabled>Не выбрано</option>
                { dishes.map( dish => <option key={ dish.id }>{ dish.name }</option>)}
            </select>
            <div>
                <img></img>
            </div>
        </div>
    )
}