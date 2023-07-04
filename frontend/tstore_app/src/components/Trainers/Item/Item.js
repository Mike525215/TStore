import s from './Item.module.css';

const Item = () => {
    return (
        <div className={s.cardItem}>
            <img className={s.cardImage} src="https://cdn-images.farfetch-contents.com/15/62/45/04/15624504_28291154_1000.jpg" alt="jordan" />
            <span className={s.itemName}>Air Jordan 1</span>
            <span className={s.itemDescription}>Men's shoes</span>
            <span className={s.itemPrice}>$150</span>
        </div>
    );
}

export {Item};