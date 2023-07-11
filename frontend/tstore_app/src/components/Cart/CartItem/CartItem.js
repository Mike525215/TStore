import s from './CartItem.module.css';
import {services} from '../../../services/services.js';

const CartItem = (props) => {
    return (
        <div className={s.cartItem}>
            <img className={s.cartImage} src={props.item.image} alt="jordan" />
            <span className={s.itemName}>{props.item.title}</span>
            <span className={s.itemDescription}>{props.item.description}</span>
            <span className={s.itemPrice}>${props.item.price}</span>
            <button className={s.deleteBtn}
                    onClick={() => {
                        services.deleteCartItem(props.id);
                    }}>Delete sneakers</button>
        </div>
    );
}

export {CartItem};