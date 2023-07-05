import {Header} from '../Header/Header';
import {Categories} from '../Categories/Categories';
import {Trainers} from '../Trainers/Trainers';
import s from './Home.module.css';
import {AuthComponent} from '../AuthComponent/AuthComponent';

const Home = () => {

    return (
        <div>
            <AuthComponent />
            <main>
                <Header />
                <Categories />
                <Trainers />
            </main>
        </div>
    );
}

export {Home};
