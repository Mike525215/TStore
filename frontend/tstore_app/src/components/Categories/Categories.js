import s from './Categories.module.css';

const Categories = () => {
    return (
        <div className={s.categories}>
            <section className={s.catList}>
                <ul>
                    <li><a href="#">Jordan 1 Mid</a></li>
                    <li><a href="#">Jordan 1 Low</a></li>
                    <li><a href="#">Jordan 4</a></li>
                    <li><a href="#">Yeezy Boost</a></li>
                </ul>
            </section>
            <section className={s.sortBlock}>
                <span className={s.sortText}>Сортировка по:</span>
                <select className={s.selectBlock}>
                    <option disable></option>
                    <option value="1">Price(increase)</option>
                    <option value="2">Price(less)</option>
                    <option value="3">Title(up)</option>
                    <option value="4">Title(down)</option>
                </select>
            </section>
        </div>
    );
}

export {Categories};