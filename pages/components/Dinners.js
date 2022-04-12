import styles from './Dinners.module.css'
import Carousel from 'react-bootstrap/Carousel'
function Dinners() {
    return (
        <div className={ styles.dinners_container }>
            <h1>Ужин</h1>
            <Carousel interval={3000}>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="ZapekankaMyasnaya.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="ZapekankaPashtet.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="ZapekankaMyasnaya.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="Pepperoni.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Meksikanskaya.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Morskaya.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="Paprikash.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Zharkoe.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="OladyiPechen.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Dinners;