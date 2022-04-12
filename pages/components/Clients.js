import styles from './Clients.module.css';
import Carousel from 'react-bootstrap/Carousel'
function Clients() {
    return (
        <div className={ styles.clients_container }>
            <h1 className={ styles.clients_header }>Наши клиенты</h1>
            <div>
            <Carousel>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            <img className="media-deleted" style={{ width: "150px !important", height: "100px"}} src="moskino.jpg" className="d-block"/>
                            <img className="media-deleted" style={{ width: "150px !important", height: "100px"}} src="rif.jpg" className="d-block"/>
                            <img className="media-deleted" style={{ width: "150px !important", height: "100px"}} src="sovetnik.jpg" className="d-block"/>
                            <img style={{ width: "150px !important", height: "100px"}} src="copirka.jpg" className="d-block"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' , gap: "100px"}}>
                            {/* <img style={{ width: "150px", height: "100px"}} src="stary-gorod.png" className="d-block"/> */}
                            <img className="media-deleted" style={{ width: "150px", height: "100px"}} src="teatr-doc.jpg" className="d-block"/>
                            <img className="media-deleted" style={{ width: "150px", height: "100px"}} src="texstroy.jpg" className="d-block"/>
                            <img style={{ width: "150px", margin: "auto 0", height: "25px"}} src="be-consalt.jpg" className="d-block"/>
                            
                        </div>
                    </Carousel.Item>
                    
                </Carousel>
            </div>
        </div>
    )
}

export default Clients;