import styles from './Breakfasts.module.css'
import Carousel from 'react-bootstrap/Carousel'

function Breakfasts() {
    return (
        <div id="breakfast" className={ styles.breakfasts_container}>
            <h1>Завтраки</h1>
            <div>
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="Mannaya.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="MannayaMed.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="MannayaOreh.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="MannayaSgush.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="MannayaVarenie.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="OvsyankaMed.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img style={{ width: "170px", height: "170px"}} src="OvsyankaVarenie.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="Pshen.png" className="d-block"/>
                            <img style={{ width: "170px", height: "170px"}} src="PshenMed.png" className="d-block"/>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Breakfasts;