import s from './SneakersDetail.module.css';
import {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {SneakersList} from '../../routers/Routers.js';
import {Item} from '../Trainers/Item/Item';

const SneakersDetail = (props) => {
    const { id } = useParams();
    const { sneakers } = useContext(SneakersList);
    return (
        <Item item={sneakers[id - 1]} />
    );
}

export {SneakersDetail};