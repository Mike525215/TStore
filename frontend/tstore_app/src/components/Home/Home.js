import {Header} from '../Header/Header';
import {Categories} from '../Categories/Categories';
import {Trainers} from '../Trainers/Trainers';
import s from './Home.module.css';

const Home = () => {
    return (
        <main>
            <Header />
            <Categories />
            <Trainers />
        </main>
    );
}

export {Home};
