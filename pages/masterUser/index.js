import Head from 'next/head'
import outerStyles from '../profile/ProfilePage.module.css'
import Footer from '../components/Footer'
import styles from './MasterUser.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import UserModal from './UserModal'
import { toggleUserModal } from '../authSlice'
import { useSelector, useDispatch } from 'react-redux'


function UserCard({username, id}) {
    const [deleted, setDeleted] = useState(username === undefined ? true : false)

    async function deleteUser() {
       await axios.get(`https://sleepy-crag-49787.herokuapp.com/user/delete?id=${id}`).then( res => {
           console.log('deleted') 
           setDeleted(true)
       }) 
    }

    return (
        <div className={ styles.mu_user} style={{ display: deleted ? 'none' : 'flex', justifyContent: 'space-between', alignItems: 'center', width: '500px', padding: '10px', background: '#F4F4F4', borderRadius: '9px', marginBottom: '15px'}}>
            <h2 className={ styles.mu_user_header }>{ username }</h2>
            <button className={ styles.mu_user_btn } onClick={ deleteUser }>Удалить</button>
        </div>
    )
}

export default function MasterUser() {
    const router = useRouter()
    const isShown = useSelector((state) => state.auth.userModal)
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])


    useEffect(() => {
        getUsers()
        if (localStorage.getItem('role') !== 'mAdmin') {
            router.push('/profile')
            return
        }
        // localStorage.getItem('_id')
    }, [])


    async function getUsers() {
        let usersList = await axios.get(`https://sleepy-crag-49787.herokuapp.com/company/getOne?id=${localStorage.getItem('company_id')}`).then( res => res.data.users)
        console.log(usersList[0])
        if (!usersList[0]) {
            console.log('lol')
            return
        }
        console.log(usersList)
        const rawUsersList = []
        for (let user of usersList) {
            rawUsersList.push(await axios.get(`https://sleepy-crag-49787.herokuapp.com/user/getOne?id=${user}`).then( res => res.data ))
        }
        setUsers(rawUsersList)
        console.log(users)
    }

    function exit() {
        localStorage.setItem('_id', '')
        localStorage.setItem('access_token', '')
        localStorage.setItem('company_id', '')
        localStorage.setItem('role', '')
        router.push('/profile')
    }

    return (
        <div style={{ background: "#fff"}}>
            <Head>
                <title>Личный кабинет</title>
                <meta name="description" content="Личный кабинет администратора" />
                <link rel="icon" href="/favicon.svg" />
                <link href="https://fonts.googleapis.com/css2?family=Bad+Script&amp;family=Montserrat:wght@400;600&amp;display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <UserModal show={ isShown }></UserModal>
            <div className={ outerStyles.profile_container } style={{ marginBottom: '25px'}}>
              <div className={ outerStyles.profile_tyteda_container }>
                  <div className={ outerStyles.profile_tyteda }>TYT<br />EDA</div>
              </div>
          </div>
          <div className={ styles.mu_container }>
            <img src='./ava.svg'/>
            <h1 onClick={ exit } className={ styles.mu_header_out }>Выход</h1>
            <button className={ styles.mu_button}>Сотрудники</button>
            <input className={ styles.mu_search } type='text'  placeholder='Поиск сотрудников'/>
            { users.map( user => <UserCard key={Math.random()} id={ user._id } username={ user.bio }></UserCard>)}
            <button onClick={ () => dispatch(toggleUserModal())} className={ styles.mu_button_add_user}>Добавить нового сотрудника</button>
          </div>

          <Footer />
      </div>
    )
}