import styles from './Dinners.module.css'
import Carousel from 'react-bootstrap/Carousel'
function Dinners() {
    return (
        <div className={ styles.dinners_container }>
            <h1>Ужин</h1>
            <Carousel interval={null}>
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

export default Dinners;