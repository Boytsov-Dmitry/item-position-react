export default function ShopCard({ card }) {
    return(
        <div className={'cardContainer'}>
            <div className={'cardName'}>{card.name}</div>
            <div className={'cardColor'}>{card.color}</div>
            <img className={'cardImg'} src={card.img}/>
            <div className={'cardFooterContainer'}>
                <div className={'cardPrice'}>${card.price}</div>
                <div className='cardButtonContainer'>
                    <button className='cardButton' >ADD TO CARD</button>
                </div>
            </div>
        </div>
    );
};