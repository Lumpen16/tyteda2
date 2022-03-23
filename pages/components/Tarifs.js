import styles from './Tarifs.module.css'

function Tarifs() {
    return (
        <div>
            <h1 className={ styles.tarifs_header }>
                Выберите свой комплекс питания
            </h1>
            <div className={ styles.tarifs_toggler }>
                <div className={ styles.tarifs_toggler_item_active }>Завтрак</div>
                <div className={ styles.tarifs_toggler_item }>Обед</div>
                <div className={ styles.tarifs_toggler_item }>Ужин</div>
            </div>
            <div>
                <div>
                    <h1>- Мини -</h1>
                </div>
                <div>
                    <h1>- Стандарт -</h1>
                </div>
                <div>
                    <h1>- Комфорт -</h1>
                </div>
            </div>
            <p>* Стоимость расчитывается в зависимости от количества сотрудников и адреса доставки </p>
        </div>
    )
}

export default Tarifs;