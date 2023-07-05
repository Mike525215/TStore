import s from './AuthComponent.module.css';

const AuthComponent = () => {
    return (
        <div className={s.authButtons}>
            <button className={s.btn}>Sign up</button>
            <button className={s.authBtn}>Authorization</button>
        </div>
    );
}

export {AuthComponent};