import styles from './Breakfasts.module.css'
import Carousel from 'react-bootstrap/Carousel'

function Breakfasts() {
    return (
        <div id="breakfast" className={ styles.breakfasts_container}>
            <h1>Завтраки</h1>
            <div>
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
        </div>
    )
}

export default Breakfasts;