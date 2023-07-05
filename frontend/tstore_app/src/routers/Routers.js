import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from '../components/Home/Home';
import {SneakersDetail} from '../components/SneakersDetail/SneakersDetail';
import {useState, useEffect, createContext} from 'react';
import {services} from '../services/services.js';

export const SneakersList = createContext();

const Routers = () => {

    const [sneakers, setSneakers] = useState([]);

    const sneakersRender = async () => {
        const request = await services.sneakersList();
        const response = await request.json();
        setSneakers(response);
    }

    useEffect(() => {
        sneakersRender();
    }, []);

    return (
        <SneakersList.Provider value={{sneakers}}>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/sneakers/' />
                <Route element={<Home />} path='/sneakers/:cat' />
                <Route element={<SneakersDetail />} path='/sneakers/:cat/:id/' />
                <Route element={<Home />} path='/cart/' />
                <Route element={<div><h1>Page not Found 404</h1></div>} path="*" />
            </Routes>
        </BrowserRouter>
        </SneakersList.Provider>
    );
}

export {Routers};