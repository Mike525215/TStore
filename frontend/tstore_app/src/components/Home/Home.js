import {Header} from '../Header/Header';
import {Categories} from '../Categories/Categories';
import {Trainers} from '../Trainers/Trainers';
import s from './Home.module.css';
import {useState, useMemo} from 'react';
import {services} from '../../services/services.js';

const Home = () => {
    const [sneakers, setSneakers] = useState([]);

    const sneakersRender = async () => {
        const request = await services.sneakersList();
        const response = await request.json();
        setSneakers(response);
    }

    useMemo(() => {
        sneakersRender();
    }, [sneakers]);


    return (
        <main>
            <Header />
            <Categories />
            <Trainers sneakers={sneakers} />
        </main>
    );
}

export {Home};
