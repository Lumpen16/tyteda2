import styles from './Reviews.module.css';
import Carousel from 'react-bootstrap/Carousel'

function Reviews() {
    return (
        <div id="reviews" className={ styles.reviews_container }>
            <div>
                <h1 className={ styles.reviews_header }>Отзывы</h1>
            </div>
            <Carousel>
            
                <Carousel.Item>
                    <div className={ styles.reviews_card }>
                        
                        <div>
                            <h1 className={ styles.reviews_header }>Игорь</h1>
                            <p className={ styles.reviews_header }>ООО СПК "РИФ"</p>
                        </div>
                        <p>Компания Миэль выражает благодарность сервису ТутEDA за организацию корпоративного питания, оперативность и качество выполнения своей работы. За время нашего сотрудничества мы убедились в том, что вы являетесь надежным партнером, которые</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={ styles.reviews_card }>
                        <div>
                            <h1 className={ styles.reviews_header }>Виктор</h1>
                            <p className={ styles.reviews_header }>Техстрой-Сити</p>
                        </div>
                        <p>Вкусная еда, очень люблю супы от ТутЕды. Большой выбор горячих блюд. Благодарим за
                                организацию корпоративного питания, компания предоставила бесплатно СВЧ-печь, наши
                                сотрудники очень довольны
                            </p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}

export default Reviews;