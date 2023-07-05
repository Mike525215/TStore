import s from './Categories.module.css';
import {Link} from 'react-router-dom';

const Categories = () => {
    return (
        <div className={s.categories}>
                <section className={s.catList}>
                    <ul>
                        <li><Link to="/sneakers/jordan-1/">Jordan 1</Link></li>
                        <li><Link to="/sneakers/jordan-4/">Jordan 4</Link></li>
                        <li><Link to="/sneakers/yeezy-boost/">Yeezy Boost</Link></li>
                    </ul>
                </section>
                <section className={s.sortBlock}>
                    <select className={s.selectBlock}>
                        <option disable="true">Sorting by</option>
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