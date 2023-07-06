import s from './SignUp.module.css';
import {useState, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {services} from '../../services/services.js';
import {SneakersList} from '../../routers/Routers';

const SignUp = () => {
    const navigation = useNavigate();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [nameE, setNameError] = useState('');
    const [passE, setPassError] = useState('');
    const context = useContext(SneakersList);

    return (
        <div className={s.signupCard}>
            <span className={s.nameError}>{nameE}</span>
            <input className={s.username} type="text" placeholder="Username"
                   onChange={e => setName(e.target.value)} value={name} />
            <span className={s.passError}>{passE}</span>
            <input className={s.password} type="text" placeholder="Password"
                   onChange={e => setPass(e.target.value)} value={pass} />
            <span className={s.emailError}></span>
            <input className={s.email} type="text" placeholder="Email"
                   onChange={e => setEmail(e.target.value)} value={email} />
            <span className={s.text}>Already have an account? <Link to="/auth/login/">Login</Link></span>
            <button className={s.signupBtn}
                    onClick={
                        async () => {
                            const request = await services.signUp(name, pass, email);
                            const result = await request.json();
                            if (result.id && result.username) {
                                navigation("/auth/login/")
                            } else if (!result.id) {
                                setNameError(result.username[0]);
                                setPassError(result.password[0]);
                            }
                            setName('');
                            setPass('');
                            setEmail('');
                        }
                    }>SignUp</button>
        </div>
    );
}

export {SignUp};