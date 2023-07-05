import {Header} from '../Header/Header';
import {Categories} from '../Categories/Categories';
import {Trainers} from '../Trainers/Trainers';
import s from './Home.module.css';
import {useState, useEffect, createContext} from 'react';
import {services} from '../../services/services.js';

export const SneakersList = createContext();

const Home = () => {

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
            <main>
                <Header />
                <Categories />
                <Trainers />
            </main>
        </SneakersList.Provider>
    );
}

export {Home};
