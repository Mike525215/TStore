import s from './Trainers.module.css';
import {Item} from './Item/Item';

const Trainers = () => {
    return (
        <div className={s.wrapper}>
            <span className={s.title}>Sneakers</span>
            <section className={s.trainersList}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </section>
        </div>
    )
}

export {Trainers};