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
        }},
        {
            mini: {
                topMeals: {
                    salat: 'Салат....130гр',
                    soup: 'Суп.....350гр',
                    cost: '200'
                },
                bottomMeals: {
                    harcho: 'Харчо из баранины',
                    salat: 'Салат крабовый'
                }
            },
            standard: {
                topMeals: {
                    salat: 'Салат....130гр',
                    garnir: 'Гарнир.....180гр',
                    vtoroe: 'Второе.....100гр',
                    cost: '250'
                },
                bottomMeals: {
                    salat: 'Салат греческий',
                    kartofel: 'Картофель по-деревенски',
                    kotleta: 'Котлета куриная'
                }
            },
            comfort: {
                topMeals: {
                    soup: 'Суп.....350гр',
                    salat: 'Салат....130гр',
                    garnir: 'Гарнир.....180гр',
                    vtoroe: 'Второое.....100гр',
                    cost: '350'
                },
                bottomMeals: {
                    soup: 'Суп куриный с фрикадельками',
                    salat: 'Салат витаминный',
                    kartofel: 'Картофель отварной',
                    ryba: 'Рыба жареная'
                }
            }
        },
        {
            mini: {
                topMeals: {
                    garnir: 'Гарнир....180гр',
                    vtoroe: 'Второе...100гр',
                    cost: '150'
                },
                bottomMeals: {
                    pure: 'Пюре картофельное',
                    ryba: 'Рыба окунь жареная со свежими овощами'
                }
            },
            standard: {
                topMeals: {
                    vtoroe1: 'Второе....180гр',
                    vtoroe2: 'Второе....180гр',
                    zapekanka: 'Запеканка....100гр',
                    cost: '210'
                },
                bottomMeals: {
                    ragu: 'Овощное рагу(Абдисандили)',
                    ryba: 'Рыба жемчужина в соку',
                    zapekanka: 'Запеканка из паштета со сметаной'
                }
            },
            comfort: {
                topMeals: {
                    garnir: 'Гарнир.....180гр',
                    vtoroe: 'Второе....100гр',
                    zapekanka: 'Запеканка.....100гр',
                    pizza: 'Пицца.....300гр',
                    cost: '300'
                },
                bottomMeals: {
                    pure: 'Пюре картофельное',
                    ryba: 'Рыба окунь жареная со свежими овощами',
                    zapekanka: 'Запеканка из паштета со сметаной',
                    pizza: 'Пицца Мексиканская'
                }
            }
        }
    
    ]


    const dinner = <div className={ styles.tarifs_cards } style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', gap: '100px', marginTop: '40px'}}>

    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Мини -</h1>
        <div style={{ display: 'flex', justifyContent: 'center',}}>
            <div style={{ paddingRight: "10px"}}>2 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[2].mini.topMeals.garnir }</li>
                <li>{ data[2].mini.topMeals.vtoroe }</li>
                <li style={{ listStyle: "none"}}>от { data[2].mini.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./RybaOkun.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[2].mini.bottomMeals.pure}<br/>+<br/>{data[2].mini.bottomMeals.ryba}</h1>
    </div>
    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Стандарт -</h1>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ paddingRight: "10px"}}>3 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[2].standard.topMeals.vtoroe1 }</li>
                <li>{ data[2].standard.topMeals.vtoroe2 }</li>
                <li>{ data[2].standard.topMeals.zapekanka }</li>
                <li style={{ listStyle: "none"}}>от { data[2].standard.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./ZapekankaPashtet.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center'}}>{data[2].standard.bottomMeals.ragu}<br/>+<br/>{data[2].standard.bottomMeals.ryba}<br/>+<br/>{ data[2].standard.bottomMeals.zapekanka}</h1>
    </div>
    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Комфорт -</h1>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ paddingRight: "10px"}}>4 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[2].comfort.topMeals.garnir }</li>
                <li>{ data[2].comfort.topMeals.vtoroe }</li>
                <li>{ data[2].comfort.topMeals.zapekanka }</li>
                <li>{ data[2].comfort.topMeals.pizza }</li>
                <li style={{ listStyle: "none"}}>от { data[2].comfort.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./Meksikanskaya.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[2].comfort.bottomMeals.pure}<br/>+<br/>{data[2].comfort.bottomMeals.ryba}<br/>+<br/>{ data[2].comfort.bottomMeals.zapekanka}<br/>+<br/>{ data[2].comfort.bottomMeals.pizza}</h1>
    </div>
    
</div>

    const obed = <div className={ styles.tarifs_cards } style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', gap: '100px', marginTop: '40px'}}>

    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Мини -</h1>
        <div style={{ display: 'flex', justifyContent: 'center',}}>
            <div style={{ paddingRight: "10px"}}>2 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[1].mini.topMeals.salat }</li>
                <li>{ data[1].mini.topMeals.soup }</li>
                <li style={{ listStyle: "none"}}>от { data[1].mini.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./Harcho.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[1].mini.bottomMeals.harcho}<br/>+<br/>{data[1].mini.bottomMeals.salat}</h1>
    </div>
    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Стандарт -</h1>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ paddingRight: "10px"}}>3 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[1].standard.topMeals.salat }</li>
                <li>{ data[1].standard.topMeals.garnir }</li>
                <li>{ data[1].standard.topMeals.vtoroe }</li>
                <li style={{ listStyle: "none"}}>от { data[1].standard.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./TefteliRis.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center'}}>{data[1].standard.bottomMeals.salat}<br/>+<br/>{data[1].standard.bottomMeals.kartofel}<br/>+<br/>{ data[1].standard.bottomMeals.kotleta}</h1>
    </div>
    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Комфорт -</h1>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ paddingRight: "10px"}}>4 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[1].comfort.topMeals.soup }</li>
                <li>{ data[1].comfort.topMeals.salat }</li>
                <li>{ data[1].comfort.topMeals.garnir }</li>
                <li>{ data[1].comfort.topMeals.vtoroe }</li>
                <li style={{ listStyle: "none"}}>от { data[1].comfort.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./Uha.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[1].comfort.bottomMeals.soup}<br/>+<br/>{data[1].comfort.bottomMeals.salat}<br/>+<br/>{ data[1].comfort.bottomMeals.kartofel}<br/>+<br/>{ data[1].comfort.bottomMeals.ryba}</h1>
    </div>
    
</div>

    const zavtraki = <div className={ styles.tarifs_cards } style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', gap: '100px', marginTop: '40px'}}>

    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Мини -</h1>
        <div style={{ display: 'flex', justifyContent: 'center',}}>
            <div style={{ paddingRight: "10px"}}>2 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[0].mini.topMeals.kasha }</li>
                <li>{ data[0].mini.topMeals.omlet }</li>
                <li style={{ listStyle: "none"}}>от { data[0].mini.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./MannayaVarenie.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[0].mini.bottomMeals.kasha}<br/>+<br/>{data[0].mini.bottomMeals.omlet}</h1>
    </div>
    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Стандарт -</h1>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ paddingRight: "10px"}}>3 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[0].standard.topMeals.kasha }</li>
                <li>{ data[0].standard.topMeals.omlet }</li>
                <li>{ data[0].standard.topMeals.zapekanka }</li>
                <li style={{ listStyle: "none"}}>от { data[0].standard.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./MannayaOreh.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center'}}>{data[0].standard.bottomMeals.kasha}<br/>+<br/>{data[0].standard.bottomMeals.omlet}<br/>+<br/>{ data[0].standard.bottomMeals.zapekanka}</h1>
    </div>
    <div className={ styles.tarifs_card } style={{borderRadius: '12px', boxShadow: '0px 0px 80px rgba(181, 181, 181, 0.2)', padding: '16px 20px', cursor: 'pointer', background: 'linear-gradient(360deg, #F3AF7F -0.05%, rgba(250, 238, 140, 0.99) 98.57%)' }}>
        <h1 style={{ textAlign: 'center'}}>- Комфорт -</h1>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ paddingRight: "10px"}}>4 блюда</div>
            <ul style={{ borderLeft: '1px solid black'}}>
                <li>{ data[0].comfort.topMeals.kasha }</li>
                <li>{ data[0].comfort.topMeals.omlet }</li>
                <li>{ data[0].comfort.topMeals.zapekanka }</li>
                <li>{ data[0].comfort.topMeals.blin}</li>
                <li style={{ listStyle: "none"}}>от { data[0].comfort.topMeals.cost } рублей</li>
            </ul>
        </div>
        <img src='./MannayaOreh.png' style={{ width: "400px", height: "400px"}}/>
        <h1 style={{ fontSize: '16px', textAlign: 'center' }}>{data[0].comfort.bottomMeals.kasha}<br/>+<br/>{data[0].comfort.bottomMeals.omlet}<br/>+<br/>{ data[0].comfort.bottomMeals.zapekanka}<br/>+<br/>{ data[0].comfort.bottomMeals.blin}</h1>
    </div>
    
</div>


    
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
            
                { tab === 0 ? zavtraki : tab === 1 ? obed : dinner }
            <p>* Стоимость расчитывается в зависимости от количества сотрудников и адреса доставки </p>
        </div>
    )
}

export default Tarifs;