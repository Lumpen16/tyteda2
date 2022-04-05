import styles from './Footer.module.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div id="footer" className={ styles.footer_master_container }>
            {/* <div className={ styles.footer_projects_container }>
                <h1 className={ styles.footer_header }>Наши проекты</h1>
                <div className={ styles.footer_projects_imgs}>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div> */}
            <div className={ styles.footer_projects_container }>
                <div className={ styles.footer_additional_container }>
                    <div>
                        <p className={ styles.footer_additional_container_header }>Дополнительно</p>
                        {/* <p className={ styles.footer_additional_container_content }>Корпоративное питание</p> */}
                        <p className={ styles.footer_additional_container_content }>Кейтеринг</p>
                        {/* <p className={ styles.footer_additional_container_content }>Торты на заказ</p> */}
                        <p className={ styles.footer_additional_container_content }>Готовая еда на неделю</p>
                    </div>
                    <div>
                        <p className={ styles.footer_additional_container_header }>ТутЕда.<br />Корпоративное<br />питание</p>
                        <p className={ styles.footer_additional_container_content }>О нас</p>
                        <p className={ styles.footer_additional_container_content }>Комплексные обеды</p>
                        <p className={ styles.footer_additional_container_content }>Форма оплаты</p>
                        <p className={ styles.footer_additional_container_content }><a href="">Политика конфиденциальности</a></p>
                    </div>
                    <div>
                        <p className={ styles.footer_additional_container_header }>Контакты</p>
                        <p className={ styles.footer_additional_container_content }>24 часа</p>
                        <p className={ styles.footer_additional_container_content }>8 (495) 139-66-11</p>
                        <p className={ styles.footer_additional_container_content }></p>
                    </div>
                    <div>
                        <p>Москва<br />ул. Сталеваров 14к1</p>
                        <div className={ styles.footer_projects_imgs }>
                            <img></img>
                            <img></img>
                            <img></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ styles.footer_footer_master_container }>
                <div className={ styles.footer_footer }>
                    <div>ООО "БКФ"</div>
                    <div>ОГРН: 5177746201221</div>
                    <div>ИНН: 7720402524</div>
                    <div>Не является публичной офертой</div>
                    <div>2021 Сделано <a>WeTop digital agency</a></div>
                </div>
                <div className={ styles.footer_footer_imgs }>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;