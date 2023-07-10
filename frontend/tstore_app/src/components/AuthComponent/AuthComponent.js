import s from './AuthComponent.module.css';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {SneakersList} from '../../routers/Routers';
import {services} from '../../services/services.js';

const AuthComponent = () => {

    const { token, username, password, setToken, setCart, setUserID } = useContext(SneakersList);
    let html = '';

        if (token) {
            html =
                <div className={s.authButtons}>
                    <div className={s.username}>{username}</div>
                    <button className={s.logoutBtn}
                            onClick={
                                () => {
                                    services.logout(token, username, password);
                                    setToken('');
                                    setUserID('');
                                }
                            }>Logout</button>
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