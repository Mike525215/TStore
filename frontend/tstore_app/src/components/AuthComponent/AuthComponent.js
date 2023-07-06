import s from './AuthComponent.module.css';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {SneakersList} from '../../routers/Routers';

const AuthComponent = () => {

    const context = useContext(SneakersList);
    let html = '';

        if (context.token) {
            html =
                <div className={s.authButtons}>
                    <div className={s.username}>{context.username}</div>
                    <button className={s.logoutBtn}>Logout</button>
                </div>
        } else {
            html =
                <div className={s.authButtons}>
                    <Link className={s.btn} to="/auth/signup/">Sign up</Link>
                    <Link className={s.authBtn} to="/auth/login/">Authorization</Link>
                </div>
        }
    return html;
}

export {AuthComponent};