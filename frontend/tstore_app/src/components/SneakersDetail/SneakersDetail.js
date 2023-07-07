import s from './SneakersDetail.module.css';
import {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import {SneakersList} from '../../routers/Routers.js';
import {Item} from '../Trainers/Item/Item';

const SneakersDetail = (props) => {
    const { id } = useParams();
    const { sneakers } = useContext(SneakersList);
    return (
        <>
            <Item item={sneakers[id - 1]} />
            <Link to="/sneakers/">Main page</Link>
        </>
    );
}

export {SneakersDetail};