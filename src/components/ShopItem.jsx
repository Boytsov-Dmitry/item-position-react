export default function ShopItem({ item }) {
    return(
        <div className={'itemContainer'}>
            <img className={'itemImg'} src={item.img}/>
            <div className={'itemName'}>{item.name}</div>
            <div className={'itemColor'}>{item.color}</div>
            <div className={'itemPrice'}>${item.price}</div>
            <div className='itemButtonContainer'>
                <button className='itemButton' >ADD TO CARD</button>
            </div>
        </div>
    );
};