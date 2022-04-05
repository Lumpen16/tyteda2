import styles from './Trusted.module.css'

export default function Trusted() {
    return (
        <div className={ styles.trusted_master_container }>
            <div className={ styles.trusted_container }>
                <h1 className={ styles.trusted_header }>Нам доверяют</h1>
                <div className={ styles.trusted_list_container }>
                    <img src="./chef-tyteda.jpg" />
                    <ul style={{ float: 'right'}}>
                        <li className={ styles.trusted_list_item }><div className={ styles.trusted_circle }><img src='./star.svg'></img></div>8 лет на рынке</li>
                        <li className={ styles.trusted_list_item }><div className={ styles.trusted_circle }><img src='./kitchen.svg'></img></div>Собственное производство</li>
                        <li className={ styles.trusted_list_item }><div className={ styles.trusted_circle }><img src='./042-pot.svg'></img></div>Контроль качества</li>
                        <li className={ styles.trusted_list_item }><div className={ styles.trusted_circle }><img src='./truck.svg'></img></div>Собственный транспорт</li>
                        <li className={ styles.trusted_list_item }><div className={ styles.trusted_circle }><img src='./payments.svg'></img></div>Гибкая ценовая политика</li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}