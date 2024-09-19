import { v4 as uuidv4 } from 'uuid';
import ShopItem from './ShopItem'

export default function ListView({ items }) {
    const mappingItems=items.map(item =>
        <li key={uuidv4()} className={'liItemContainer'}><ShopItem item={item}/></li>
    );

    return(
        <ul className={'allItemContainer'}>{mappingItems}</ul>
    );
};