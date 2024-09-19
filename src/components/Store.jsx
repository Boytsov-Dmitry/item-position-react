import { useState } from 'react';
import products from './_products.json';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';



export default function Store () {

    const [cards, setCardView] = useState([]);
    const [items, setItemView] = useState(products);

    const [icon, setIcon] = useState('view_list');

    function onSwitch() {
        if(icon==='view_list') {
            setIcon('view_module')
            setCardView(products)
            setItemView([])
        } else {
            setIcon('view_list')
            setCardView([])
            setItemView(products)
        };
    };

    return(
        <div>
            <IconSwitch icon={icon} onSwitch={onSwitch} />
            <CardsView cards={cards} />
            <ListView items={items} />
        </div>
    );
};