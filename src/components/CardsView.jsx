import { v4 as uuidv4 } from 'uuid';
import ShopCard from './ShopCard'

export default function CardView ({ cards }) {
    const mappingCards=cards.map(card =>
        <li key={uuidv4()} className={'liCardContainer'}><ShopCard card={card}/></li>
    );

    return(
        <ul className={'allCardContainer'}>{mappingCards}</ul>
    );
};