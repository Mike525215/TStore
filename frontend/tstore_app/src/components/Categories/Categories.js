import s from './Categories.module.css';
import {Link} from 'react-router-dom';
import {SneakersList} from '../../routers/Routers.js';
import {useContext} from 'react';
import {services} from '../../services/services.js';

const Categories = () => {
    const { setSneakers } = useContext(SneakersList);
    const filterArray = async (category) => {
        const request = await services.filteringItems(category);
        const result = await request.json();
        setSneakers(result);
    }
    return (
        <div className={s.categories}>
                <section className={s.catList}>
                    <ul>
                        <li>
                            <Link to="/sneakers/air-jordan-1/"
                                  onClick={() => filterArray(1)}>Jordan 1</Link>
                        </li>
                        <li>
                            <Link to="/sneakers/air-jordan-4/"
                                  onClick={() => filterArray(2)}>Jordan 4</Link>
                        </li>
                        <li>
                            <Link to="/sneakers/yeezy-boost/"
                                  onClick={() => filterArray(3)}>Yeezy Boost</Link>
                        </li>
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