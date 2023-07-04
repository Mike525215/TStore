import s from './Item.module.css';

const Item = () => {
    return (
        <div className={s.cardItem}>
            <img className={s.cardImage} src="jordan.jpeg" alt="jordan" />
            <span className={s.itemName}>Air Jordan 1</span>
            <span className={s.itemDescription}>Men's shoes</span>
            <span className={s.itemPrice}>$150</span>
        </div>
    );
}

export {Item};