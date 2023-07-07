import s from './Item.module.css';
import {Link, useParams} from 'react-router-dom';
const Item = (props) => {
    let { cat } = useParams();

    if (!cat) {
        if (props.item.id === 1) {
            cat = 'jordan-1';
        } else if (props.item.id === 2) {
            cat = 'jordan-4';
        } else {
            cat = 'yeezy-boost';
        }
    }
    return (
        <div className={s.cardItem}>
            <Link to={"/sneakers/" + cat + "/" + props.item.id + "/"}>
                <img className={s.cardImage} src={props.item.image} alt="jordan" />
            </Link>
            <span className={s.itemName}>{props.item.title}</span>
            <span className={s.itemDescription}>{props.item.description}</span>
            <span className={s.itemPrice}>${props.item.price}</span>
        </div>
    );
}

export {Item};