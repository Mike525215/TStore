import {Header} from '../Header/Header';
import {Categories} from '../Categories/Categories';
import s from './Home.module.css';

const Home = () => {
    return (
        <main>
            <Header />
            <Categories />
        </main>
    );
}

export {Home};
