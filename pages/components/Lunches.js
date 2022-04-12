import styles from './Lunches.module.css'
import Carousel from 'react-bootstrap/Carousel'
function Lunches() {
    return (
        <div className={ styles.lunches_container }>
            <h1>Обед</h1>
            <Carousel interval={3000}>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="Uha.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Shi.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Harcho.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="RybaOkun.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="TefteliRis.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="PechenKur.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="Vitaminnyy.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Morkov.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Fasol.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Lunches;