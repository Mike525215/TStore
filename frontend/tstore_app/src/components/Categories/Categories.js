import s from './Categories.module.css';
import {Link} from 'react-router-dom';
import {SneakersList} from '../../routers/Routers.js';
import {useContext, useRef} from 'react';
import {services} from '../../services/services.js';

const Categories = () => {
    const { setSneakers } = useContext(SneakersList);

    const newRef = useRef();
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
                    <select className={s.selectBlock} ref={newRef}>
                        <option disable="true">SORTED BY</option>
                        <option value="1">PRICE(INC)</option>
                        <option value="2">PRICE(DEC)</option>
                    </select>
                    <button onClick={
                        async () => {
                            let filter = "";
                            newRef.current.value == 1 ? filter = "price" : filter = "-price"
                            const request = await services.orderingByPrice(filter);
                            const result = await request.json();
                            setSneakers(result);
                        }
                    } className={s.applyBtn}>SORT</button>
                </section>
        </div>
    );
}

export {Categories};