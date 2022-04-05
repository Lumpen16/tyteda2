import styles from './Drinks.module.css';
import Carousel from 'react-bootstrap/Carousel'
function Drinks() {
    return (
        <div className={ styles.drinks_container }>
            <h1>Напитки</h1>
            <Carousel intereval={null}>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img src="combo-primer.png" className="d-block w-100"/>
                            <img src="combo-primer.png" className="d-block w-100"/>
                            <img src="combo-primer.png" className="d-block w-100"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img src="combo-primer.png" className="d-block w-100"/>
                            <img src="combo-primer.png" className="d-block w-100"/>
                            <img src="combo-primer.png" className="d-block w-100"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img src="combo-primer.png" className="d-block w-100"/>
                            <img src="combo-primer.png" className="d-block w-100"/>
                            <img src="combo-primer.png" className="d-block w-100"/>
                        </div>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Drinks;