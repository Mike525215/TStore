import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from '../components/Home/Home';
import {Login} from '../components/AuthComponent/Login';
import {SignUp} from '../components/AuthComponent/SignUp';
import {SneakersDetail} from '../components/SneakersDetail/SneakersDetail';
import {useState, useEffect, createContext} from 'react';
import {services} from '../services/services.js';
import {Cart} from '../components/Cart/Cart';

export const SneakersList = createContext();

const Routers = () => {

    const [sneakers, setSneakers] = useState([]);
    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('');
    const [cart, setCart] = useState([]);

    const sneakersRender = async () => {
        const request = await services.sneakersList();
        const response = await request.json();
        setSneakers(response);
    }

    const authUser = async () => {
        const request = await services.getUsers();
        const result = await request.json();
        const user = result.filter(item => item.username == username);
        if (user.length !== 0) {
            setUserID(user[0].id);
        } else {
            setUserID('');
        }
    }

    const cartSneakers = async () => {
        if (userID === '') {
            setCart([]);
        } else {
            const request = await services.cartSneakers(userID);
            const result = await request.json();
            setCart(result);
        }
    }

    useEffect(() => {
        sneakersRender();
    }, []);

    useEffect(() => {
        authUser();
    }, [username]);


    return (
        <SneakersList.Provider value={{
            sneakers,
            username,
            setUsername,
            password,
            setPassword,
            token,
            setToken,
            setSneakers,
            sneakersRender,
            cart,
            setCart,
            cartSneakers,
            setUserID
        }}>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/sneakers/' />
                <Route element={<Home />} path='/sneakers/:cat' />
                <Route element={<Login />} path='/auth/login/' />
                <Route element={<SignUp />} path='/auth/signup/' />
                <Route element={<SneakersDetail />} path='/sneakers/:cat/:id/' />
                <Route element={<Cart />} path='/cart/' />
                <Route element={<div><h1>Page not Found 404</h1></div>} path="*" />
            </Routes>
        </BrowserRouter>
        </SneakersList.Provider>
    );
}

export {Routers};