import s from './Item.module.css';
import {Link} from 'react-router-dom';

const Item = (props) => {
    return (
        <div className={s.cardItem}>
            <Link to={"/sneakers/" + props.item.category + "/" + props.item.id + "/"}>
                <img className={s.cardImage} src={props.item.image} alt="jordan" />
            </Link>
            <span className={s.itemName}>{props.item.title}</span>
            <span className={s.itemDescription}>{props.item.description}</span>
            <span className={s.itemPrice}>${props.item.price}</span>
        </div>
    );
}

export {Item};