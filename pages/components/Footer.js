import styles from './Footer.module.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'

function Footer() {

    const router = useRouter()
    
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
                    <div className={ styles.footer_card }>
                        <p className={ styles.footer_additional_container_header }>ТутЕда.<br />Корпоративное<br />питание</p>
                        <p className={ styles.footer_additional_container_content }><a style={{ textDecoration: "none", color: "#181725", cursor: 'pointer'}} className={ styles.nav_anchor } onClick={ () => router.push('/')} href="#corp_out">О нас</a></p>
                        <p className={ styles.footer_additional_container_content }><a style={{ textDecoration: "none", color: "#181725", cursor: 'pointer'}} className={ styles.nav_anchor } onClick={ () => router.push('/')} href="#tarifs">Комплексные обеды</a></p>
                        <p className={ styles.footer_additional_container_content }><a style={{ textDecoration: "none", color: "#181725", cursor: 'pointer'}} className={ styles.nav_anchor } onClick={ () => router.push('/oplata')}>Форма оплаты</a></p>
                        <p className={ styles.footer_additional_container_content }><a style={{ textDecoration: "none", color: "#181725", cursor: 'pointer'}} href="https://tyteda.ru/politika-konfidentsialnosti/">Политика конфиденциальности</a></p>
                    </div>
                    <div className={ styles.footer_card }>
                        <p className={ styles.footer_additional_container_header }>Дополнительно</p>
                        {/* <p className={ styles.footer_additional_container_content }>Корпоративное питание</p> */}
                        <p className={ styles.footer_additional_container_content }><a style={{ textDecoration: "none", color: "#181725", cursor: 'pointer'}} href="https://catering.tyteda.ru/">Кейтеринг</a></p>
                        {/* <p className={ styles.footer_additional_container_content }>Торты на заказ</p> */}
                        <p className={ styles.footer_additional_container_content }><a style={{ textDecoration: "none", color: "#181725", cursor: 'pointer'}} href="https://tyteda.ru/">Доставка готовой еды</a></p>
                    </div>
                    
                    <div className={ styles.footer_card }>
                        <p className={ styles.footer_additional_container_header }>Контакты</p>
                        <p className={ styles.footer_additional_container_content }></p>
                        <p className={ styles.footer_additional_container_content }>8 (495) 139-66-11</p>
                        <p className={ styles.footer_additional_container_content }>corp-pitanie@tyteda.ru</p>
                    </div>
                    <div className={ styles.footer_card }>
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