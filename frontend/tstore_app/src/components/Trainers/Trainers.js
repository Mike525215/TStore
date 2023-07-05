import s from './Trainers.module.css';
import {Item} from './Item/Item';
const Trainers = (props) => {

    return (
        <div className={s.wrapper}>
            <span className={s.title}>Sneakers</span>
            <section className={s.trainersList}>
                {props.sneakers.map(item => <Item item={item} key={item.id} />)}
            </section>
        </div>
    )
}

export {Trainers};