import styles from './Delivery.module.css'

function Delivery() {
    return (
        <div className={ styles.delivery_container }>
            <div style={{ marginRight: "20px"}} className={ styles.delivery_subcontainer }>
                <h1 className={ styles.delivery_header }>Оплата и доставка</h1>
                <ul>
                    <li className={ styles.delivery_list_item }>Оплата наличным и безналичным способом</li>
                    <li className={ styles.delivery_list_item }>Доставка в Москве и Московской области</li>
                    <li className={ styles.delivery_list_item }>Круглосуточно без праздников и выходных</li>
                    <li className={ styles.delivery_list_item }>Время доставки от 60 минут</li>
                </ul>
            </div>
            <div style={{ marginLeft: "20px"}} className={ styles.delivery_subcontainer }>
                <h1 className={ styles.delivery_header }>Упаковка товара</h1>
                <ul>
                    <li className={ styles.delivery_list_item }>Используемая упаковка и посуда<br /> сертифицирована РСТ (Ростестом). </li>
                    <li className={ styles.delivery_list_item }> Гарантия срока годности и сохранения вкусовых<br /> качеств при соблюдении условий хранения </li>
                </ul>
               </div>
        </div>
    )
}

export default Delivery;