import s from './SignUp.module.css';
import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {services} from '../../services/services.js';
import {SneakersList} from '../../routers/Routers';

const Login = () => {
    const navigation = useNavigate();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const { setToken, setUsername, setPassword } = useContext(SneakersList);

    return (
        <div className={s.signupCard}>
            <span className={s.nameError}>{error}</span>
            <input className={s.username} type="text" placeholder="Username"
                   onChange={e => setName(e.target.value)} value={name} />
            <input className={s.passwordF} type="text" placeholder="Password"
                   onChange={e => setPass(e.target.value)} value={pass} />
            <button className={s.authBtn}
                    onClick={
                        async () => {
                            const request = await services.login(name, pass);
                            const result = await request.json();
                            if (result.auth_token) {
                                setToken(result.auth_token);
                                setUsername(name);
                                setPassword(pass);
                                navigation('/sneakers/');
                            } else {
                                setError("Incorrect username or password");
                            }
                            setName('');
                            setPass('');
                        }
                    }>Authorization</button>
        </div>
    );
}

export {Login};
