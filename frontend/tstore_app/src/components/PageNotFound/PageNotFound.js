import s from './PageNotFound.module.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {SneakersList} from '../../routers/Routers.js';

const PageNotFound = () => {
    const { sneakersRender } = useContext(SneakersList);
    return (
        <div className={s.wrapper}>
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
            </header>
            <div className={s.notFound}>
                <span className={s.smileFace}>😕</span>
                <span className={s.title}>Nothing to found</span>
                <span className={s.description}>Unfortunately, that page is absent in our online shop</span>
            </div>
        </div>
    );
}

export {PageNotFound};