import s from './Item.module.css';
import {Link, useParams} from 'react-router-dom';
import {useContext} from 'react';
import {SneakersList} from '../../../routers/Routers.js';
import {services} from '../../../services/services.js';

const Item = (props) => {
    let { cat } = useParams();
    const { username, userID, cart, cartSneakers } = useContext(SneakersList);
    if (!cat) {
        cat = props.item.category;
    }

    const checkItem = cart.filter(item => item.sneakers == props.item.id);

    let addBtn = '';

    if (username !== '') {
        addBtn =
            <button className={s.addBtn}
                    onClick={
                        () => {
                            if (checkItem.length === 0) {
                                services.addSneakers(props.item.id, userID);
                                cartSneakers();
                            }
                        }
                    }>
                Add to Cart
            </button>;
    }

    return (
        <div className={s.cardItem}>
            <Link to={"/sneakers/" + cat + "/" + props.item.id + "/"}>
                <img className={s.cardImage} src={props.item.image} alt="jordan" />
            </Link>
            <span className={s.itemName}>{props.item.title}</span>
            <span className={s.itemDescription}>{props.item.description}</span>
            <span className={s.itemPrice}>${props.item.price}</span>
            {addBtn}
        </div>
    );
}

export {Item};