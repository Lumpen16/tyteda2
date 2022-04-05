import styles from './Tarifs.module.css'
import { useState } from 'react'

function Tarifs() {

    const data = [ 
        {
        mini: {
            topMeals:{
                kasha: 'Каша......180гр',
                omlet: 'Омлет......100гр',
                cost: '150'
            },
            bottomMeals: {
                kasha: 'Каша овсяная с вареньем',
                omlet: 'Омлет с грибами'
            }
        },
        standard: {
            topMeals: {
                kasha: 'Каша......180гр',
                omlet: 'Омлет......100гр',
                zapekanka: 'Запеканка..100гр',
                cost: '210'
            },
            bottomMeals: {
                kasha: 'Каша овсяная с грецким орехом',
                omlet: 'Омлет с грибами',
                zapekanka: 'Запеканка творожная с изюмом и сгущ. молоком'
            }
        },
        comfort: {
            topMeals: {
                kasha: 'Каша......180гр',
                omlet: 'Омлет......100гр',
                zapekanka: 'Запеканка..100гр',
                blin: 'Блины....2шт',
                cost: '270'
            },
            bottomMeals: {
                kasha: 'Каша овсяная с грецким орехом',
                omlet: 'Омлет с грибами',
                zapekanka: 'Запеканка творожная с изюмом и сгущ. молоком',
                blin: "Блины с ветчиной и сыром"
            }
        }}
    
    ]
    const [tab, setTab] = useState(0)
    return (
        <div id="tarifs" className={ styles.tarifs_container }>
            <h1 className={ styles.tarifs_header }>
                Выберите свой комплекс питания
            </h1>
            <div className={ styles.tarifs_toggler }>
                <div className={ tab === 0 ? styles.tarifs_toggler_item_active : styles.tarifs_toggler_item } onClick={ () => setTab(0)}>Завтрак</div>
                <div className={ tab === 1 ? styles.tarifs_toggler_item_active : styles.tarifs_toggler_item } onClick={ () => setTab(1)}>Обед</div>
                <div className={ tab === 2 ? styles.tarifs_toggler_item_active : styles.tarifs_toggler_item } onClick={ () => setTab(2)}>Ужин</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', gap: '100px', marginTop: '40px'}}>

                <div style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
                    <h1 style={{ textAlign: 'center'}}>- Мини -</h1>
                    <div style={{ display: 'flex', justifyContent: 'center',}}>
                        <div>2 блюда</div>
                        <ul style={{ borderLeft: '1px solid black'}}>
                            <li>{ data[0].mini.topMeals.kasha }</li>
                            <li>{ data[0].mini.topMeals.omlet }</li>
                            <li>{ data[0].mini.topMeals.cost }</li>
                        </ul>
                    </div>
                    <img src='./combo-primer.png'/>
                    <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[0].mini.bottomMeals.kasha}<br/>+<br/>{data[0].mini.bottomMeals.omlet}</h1>
                </div>
                <div style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
                    <h1 style={{ textAlign: 'center'}}>- Стандарт -</h1>
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <div>3 блюда</div>
                        <ul style={{ borderLeft: '1px solid black'}}>
                            <li>{ data[0].standard.topMeals.kasha }</li>
                            <li>{ data[0].standard.topMeals.omlet }</li>
                            <li>{ data[0].standard.topMeals.zapekanka }</li>
                            <li>{ data[0].standard.topMeals.cost }</li>
                        </ul>
                    </div>
                    <img src='./combo-primer.png'/>
                    <h1 style={{ fontSize: '16px', textAlign: 'center'}}>{data[0].standard.bottomMeals.kasha}<br/>+<br/>{data[0].standard.bottomMeals.omlet}<br/>+<br/>{ data[0].standard.bottomMeals.zapekanka}</h1>
                </div>
                <div style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
                    <h1 style={{ textAlign: 'center'}}>- Комфорт -</h1>
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <div>4 блюда</div>
                        <ul style={{ borderLeft: '1px solid black'}}>
                            <li>{ data[0].comfort.topMeals.kasha }</li>
                            <li>{ data[0].comfort.topMeals.omlet }</li>
                            <li>{ data[0].comfort.topMeals.zapekanka }</li>
                            <li>{ data[0].comfort.topMeals.blin}</li>
                            <li>{ data[0].comfort.topMeals.cost }</li>
                        </ul>
                    </div>
                    <img src='./combo-primer.png'/>
                    <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[0].comfort.bottomMeals.kasha}<br/>+<br/>{data[0].comfort.bottomMeals.omlet}<br/>+<br/>{ data[0].comfort.bottomMeals.zapekanka}<br/>+<br/>{ data[0].comfort.bottomMeals.blin}</h1>
                </div>
                
            </div>
            <p>* Стоимость расчитывается в зависимости от количества сотрудников и адреса доставки </p>
        </div>
    )
}

export default Tarifs;