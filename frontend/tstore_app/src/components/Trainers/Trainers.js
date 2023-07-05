import s from './Trainers.module.css';
import {Item} from './Item/Item';
import {SneakersList} from '../../routers/Routers.js';
import {useContext} from 'react';

const Trainers = () => {
    const { sneakers } = useContext(SneakersList);
    return (
        <div className={s.wrapper}>
            <span className={s.title}>Sneakers</span>
            <section className={s.trainersList}>
                {sneakers.map(item => <Item item={item} key={item.id} />)}
            </section>
        </div>
    )
}

export {Trainers};