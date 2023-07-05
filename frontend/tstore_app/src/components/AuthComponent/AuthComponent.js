import s from './AuthComponent.module.css';
import {Link} from 'react-router-dom';

const AuthComponent = () => {
    return (
        <div className={s.authButtons}>
            <Link className={s.btn}>Sign up</Link>
            <Link className={s.authBtn}>Authorization</Link>
        </div>
    );
}

export {AuthComponent};