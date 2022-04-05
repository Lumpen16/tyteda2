import styles from './Modal.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../authSlice'
import axios from 'axios'

export default function Modal({ show }) {

    const [name, setName] = useState('')
    const dispatch = useDispatch()
    let file = undefined

    function handleFile(e) {

        file = e.target.files[0]
        console.log(file)
        
    }

    function handleSubmit() {

        let mAdminID = ''
        if (name.length === 0) {
            console.log('Poshel naxyi');
            return 1
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('image', file)
        axios.post('https://sleepy-crag-49787.herokuapp.com/company/create', formData)
        .then(res => {
            mAdminID = res.data._id
        })

        dispatch(toggleModal())

    }

    return(
        <div onClick={() => dispatch(toggleModal()) } className={ styles.modal } style={{ display: show ? 'block' : 'none' }}>
            <div onClick={ (e) => e.stopPropagation() } className={ styles.modal_main }>
                <input type="text"  onChange={ (event) => setName(event.target.value) } value={ name } placeholder="Название компании" />
                <input type='file' onChange={(e) => handleFile(e)}/>
                <select>
                    <option></option>
                </select>
                <button onClick={handleSubmit}>Добавить</button>
            </div>
        </div>
    )
}