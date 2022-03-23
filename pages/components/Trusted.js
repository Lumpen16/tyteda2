import styles from './Trusted.module.css'

export default function Trusted() {
    return (
        <div>
            <div className={ styles.trusted_container }>
                <h1 className={ styles.trusted_header }>Нам доверяют</h1>
                <div className={ styles.trusted_list_container }>
                    <ul>
                        <li className={ styles.trusted_list_item }>8 лет на рынке</li>
                        <li className={ styles.trusted_list_item }>Собственное производство</li>
                        <li className={ styles.trusted_list_item }>контроль качества</li>
                        <li className={ styles.trusted_list_item }>Собственный транспорт</li>
                        <li className={ styles.trusted_list_item }>Гибкая ценовая политика</li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}