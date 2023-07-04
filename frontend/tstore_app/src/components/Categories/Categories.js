import s from './Categories.module.css';

const Categories = () => {
    return (
        <div className={s.categories}>
                <section className={s.catList}>
                    <ul>
                        <li><a href="#">Jordan 1</a></li>
                        <li><a href="#">Jordan 4</a></li>
                        <li><a href="#">Yeezy Boost</a></li>
                    </ul>
                </section>
                <section className={s.sortBlock}>
                    <select className={s.selectBlock}>
                        <option disable>Sorting by</option>
                        <option value="1">Price(up)</option>
                        <option value="2">Price(down)</option>
                        <option value="3">Title(up)</option>
                        <option value="4">Title(down)</option>
                    </select>
                </section>
        </div>
    );
}

export {Categories};