import styles from './Drinks.module.css';
import Carousel from 'react-bootstrap/Carousel'
function Drinks() {
    return (
        <div className={ styles.drinks_container }>
            <h1>Напитки</h1>
            <Carousel interval={3000}>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                        <img style={{ width: "80px", height: "170px"}} src="tan.png" className="d-block"/>
                            <img style={{ width: "120px", height: "170px"}} src="compot-suhofruct.png" className="d-block"/>
                            <img style={{ width: "120px", height: "170px"}} src="mors-yagogny.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Drinks;