import s from './Header.module.css';
import {Link} from 'react-router-dom';
import {services} from '../../services/services.js';
import {useState, useContext} from 'react';
import {SneakersList} from '../../routers/Routers.js';

const Header = () => {
    const [item, setItem] = useState('');
    const { setSneakers, sneakersRender } = useContext(SneakersList);
    return (
        <header>
            <div className={s.logoBlock}>
                <Link to="/sneakers/" onClick={sneakersRender}>
                    <img className={s.logoImage} src="https://cdn-icons-png.flaticon.com/128/9348/9348982.png" alt="jordan"/>
                </Link>
                <div className={s.textLogo}>
                    <span className={s.logoText}>TSTORE</span>
                    <span className={s.description}>The best trainers</span>
                </div>
            </div>
            <div className={s.searchBlock}>
                <button className={s.searchBtn}
                        onClick={
                            async() => {
                                const request = await services.lookFor(item);
                                const result = await request.json();
                                setSneakers(result);
                                setItem('');
                            }
                        }>
                    <img src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png" alt="search" />
                </button>
                <input placeholder='Search sneakers...'
                       onChange={e => setItem(e.target.value)} value={item} />
            </div>
            <div className={s.cartBlock}>
                <Link to="/cart/" className={s.cartLink}>
                    <span className={s.totalPrice}>$ 0</span>
                    <span className={s.totalCount}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white">
                             </path>
                        </svg>
                        0
                    </span>
                </Link>
            </div>
        </header>
    )
}

export {Header};