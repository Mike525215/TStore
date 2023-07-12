import s from './Cart.module.css';
import {SneakersList} from '../../routers/Routers.js';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartItem} from './CartItem/CartItem';

const Cart = () => {
    const { cart, sneakersRender, sneakers } = useContext(SneakersList);
    let html = '';
    const cartArray = [];
    cart.forEach((item) => {
        cartArray.push(sneakers[item.sneakers - 1])
    });

    const checkCartItemID = (itemID) => {
        return cart.filter(item => item.sneakers == itemID);
    }


    if (cartArray.length > 0) {
        html =
            <div className={s.trainersList}>
                {cartArray.map(item => <CartItem item={item} key={item.id} id={checkCartItemID(item.id)[0].id} />)}
            </div>;
    } else {
        html =
            <>
            <span className={s.emptyText}>Cart is empty 😕</span>
            <span className={s.descriptionText}>More likely, you haven't ordered sneakers yet.
                                                For order sneakers, you have to move on the main page.</span>
            <img src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png"
                 alt="" className={s.cartEmptyImage} />
            </>
    }
    return (
        <main className={s.main}>
            <div className={s.logoBlock}>
                <img className={s.logoImage} src="https://cdn-icons-png.flaticon.com/128/9348/9348982.png" alt="jordan"/>
                <div className={s.textLogo}>
                    <span className={s.logoText}>TSTORE</span>
                    <span className={s.description}>The best trainers</span>
                </div>
            </div>
            <section className={s.sneakersBlock}>
                {html}
                <div className={s.backLink}>
                    <Link to="/sneakers/" onClick={sneakersRender} className={s.backLinkInner}>Back to home page</Link>
                </div>
            </section>
        </main>
    );
}

export {Cart};