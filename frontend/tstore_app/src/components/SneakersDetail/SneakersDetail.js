import s from './SneakersDetail.module.css';
import {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import {SneakersList} from '../../routers/Routers.js';

const SneakersDetail = (props) => {
    const { id } = useParams();
    const { sneakers, sneakersRender } = useContext(SneakersList);
    const item = sneakers.filter(item => item.id == id);
    return (
        <div className={s.sneakersDetail}>
            <div className={s.itemInfo}>
                <div className={s.cardItem}>
                    <img className={s.cardImage} src={item[0].image} alt="jordan" />
                </div>
                <div className={s.description}>
                    <span className={s.itemName}>{item[0].title}</span>
                    <span className={s.itemDescr}>{item[0].description}</span>
                    <span className={s.itemPrice}>{item[0].price}$</span>
                    <span className={s.itemText}>
                        <span className={s.itemTextTitle}>Get in Line. Get the goods.</span>
                        <span className={s.itemTextPtOne}>
                            Create or sign in to your free Nike Member account for a chance to buy this product the moment it's released.
                        </span>
                        <span className={s.itemTextPtTwo}>
                            The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel.
                            Premium materials with new colors and textures give modern expression to an all-time favorite.
                        </span>
                    </span>
                </div>
            </div>
            <div className={s.linkBack}>
                <Link to="/sneakers/" onClick={sneakersRender} className={s.linkBackInner}>
                    Main page
                </Link>
            </div>
        </div>
    );
}

export {SneakersDetail};