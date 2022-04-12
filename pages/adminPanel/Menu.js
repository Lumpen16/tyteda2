import styles from './Menu.module.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


function MenuItem({img, name, id, limit}) {

    const [deleted, setDeleted] = useState(false)
    async function deleteDish() {
        
        await axios.get(`https://api.tyteda.ru/dish/delete?id=${id}`)
        setDeleted(true)
    }

    return (
        <div className={ styles.menu_dishes_card } style={{ display: deleted ? 'none' : 'block'}}>
            <img src={ img }/>
            <h1>{ name }</h1>
            <p>Ограничение: { limit }</p>
            <button className={ styles.menu_save } onClick={ deleteDish }>Удалить</button>
        </div>
    )
    
}

export default function Menu() {

    const [option, setOption] = useState('Меню-1')
    const [dishes, setDishes] = useState([])


    const [update, setUpdate] = useState(false)

    const [dishName, setDishName] = useState('')
    const [dishType, setDishType] = useState('Салат')
    const [limit, setLimit] = useState('250')
    let file = undefined

    function handleFile(e) {
        file = e.target.files[0]
    }

    async function getDishes() {
        await axios.get('/dish')
        .then(res => setDishes(res.data))
    }

    async function createDish() {

        const formData = new FormData()
        formData.append('name', dishName)
        formData.append('image', file)
        formData.append('type', dishType)
        formData.append('limit', limit)
        formData.append('week', option)

        await axios.post('https://api.tyteda.ru/dish/create', formData)
        .then( res => setDishes(dishes.concat([res.data])))
        
        
    }

    useEffect(() => {
        getDishes()
    }, [])

    // useEffect(() => {
    //     getDishes()
    // }, [createDish])

    return (
        <div className= { styles.menu_container }>
            <select value={option} onChange={ (e) => setOption(e.target.value)} className={ styles.menu_select }>
                <option>Меню-1</option>
                <option>Меню-2</option>
                <option>Меню-3</option>
                <option>Меню-4</option>
            </select>
            <button className={ styles.menu_save }>Сохранить</button>
            <div>
                <h1>{ option }</h1>
                <div className={ styles.menu_dishadd_container}>
                    <h3>Добавление блюда в {option}</h3>
                    <input className={ styles.menu_input} type='text' placeholder='Название блюда' value={ dishName } onChange={ (e) => setDishName(e.target.value)} />
                    <label id="dish_type">Выберите тип блюда</label>
                    <select className={ styles.menu_input } id="dish_type" name="dish_type" value={ dishType } onChange={ (e) => setDishType(e.target.value)}>
                        <option>Салат</option>
                        <option>Первое</option>
                        <option>Гарнир</option>
                        <option>Второе</option>
                        <option>Соус</option>
                        <option>Напиток</option>
                    </select>
                    <label id="dish_limit">Выберите лимит блюда</label>
                    <select className={ styles.menu_input } id="dish_limit" name="dish_limit" value={ limit } onChange={ e => setLimit(e.target.value)}>
                        <option>250</option>
                        <option>350</option>
                        <option>450</option>
                    </select>
                    <label id="dish_img">Загрузите изображения блюда</label>
                    <input className={ styles.menu_input } id="dish_img" name="dish_img" type='file' onChange={ e => handleFile(e)} />
                    <button className={ styles.menu_save } onClick={ createDish }>Добавить блюдо</button>
                </div>
                <div className={ styles.menu_dishes }>
                    { dishes.map(dish => dish.week === option ? <MenuItem key={ dish.id } id={ dish._id } limit={ dish.limit } img={ dish.image } name={ dish.name }></MenuItem> : null)}
                     
                </div>
            </div>
        </div>
    )
}