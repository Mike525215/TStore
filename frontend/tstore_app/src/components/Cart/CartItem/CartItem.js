import s from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <div className={s.cardItem}>
            <img className={s.cardImage} src={props.item.image} alt="jordan" />
            <span className={s.itemName}>{props.item.title}</span>
            <span className={s.itemDescription}>{props.item.description}</span>
            <span className={s.itemPrice}>${props.item.price}</span>
            <button className={s.deleteBtn}>Delete sneakers</button>
        </div>
    );
}

export {CartItem};