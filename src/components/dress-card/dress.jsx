import React from "react";
import './dress.css';
import dressPic1 from '/src/assets/dress1.png';
import dressPic2 from '/src/assets/dress2.png';
import dressPic3 from '/src/assets/dress3.png';
import dressPic4 from '/src/assets/dress4.png';
import dressPic5 from '/src/assets/dress5.png';
import dressPic6 from '/src/assets/dress6.png';
import dressPic7 from '/src/assets/dress7.png';
import dressPic8 from '/src/assets/dress8.png';

function Card({ pic, price, colors, brand }) {
    return (
        <div className="card">
            <img className='dressPic'src={pic} alt="dress" />
            <p>{price} money</p>
            <p>{brand}</p>
            <div className="containerColors">
            <button className='first' style={{ backgroundColor: colors[0] }}></button>
            <button className='second' style={{ backgroundColor: colors[1] }}></button>
            <button className='tri' style={{ backgroundColor: colors[2] }}></button>
            </div>
        </div>
    );
}

export default function DressCard({ selectedColor, selectedBrand, selectedPrice}) {
    const cards = [
        { id: 1, pic: dressPic1, colors: ['red','green','blue'], price: '100', brand: 'State' }, 
        { id: 2, pic: dressPic2, colors: ['green','blue','yellow'], price: '200', brand: 'Cooper' }, 
        { id: 3, pic: dressPic3, colors: ['blue','orange','yellow'], price: '300', brand: 'Cooper' },
        { id: 4, pic: dressPic4, colors: ['yellow','orange','magenta'], price: '300', brand: 'Bardot' }, 
        { id: 5, pic: dressPic5, colors: ['orange','pink','magenta'], price: '300', brand: 'Alfani' },
        { id: 6, pic: dressPic6, colors: ['purple','orange','lime'], price: '300', brand: 'State' },
        { id: 7, pic: dressPic7, colors: ['pink','purple','orange'], price: '500', brand: 'Cooper' },
        { id: 8, pic: dressPic8, colors: ['pink','magenta','lime'], price: '300', brand: 'Bardot' },
        { id: 9, pic: dressPic1, colors: ['magenta','lime','purple'], price: '400', brand: 'Bardot' },
        { id: 10, pic: dressPic2, colors: ['lime','gray','brown'], price: '300', brand: 'Alfani' },
        { id: 11, pic: dressPic3, colors: ['brown','lime'], price: '300', brand: 'CeCe' },
        { id: 12, pic: dressPic4, colors: ['gray','brown','lime'], price: '300', brand: 'Alfani' }
    ];

    const filteredCards = cards.filter(card => {
        const colorMatch = selectedColor ? card.colors.includes(selectedColor) : true;
        const brandMatch = selectedBrand.length ? selectedBrand.includes(card.brand) : true;
        const priceMatch = card.price >= selectedPrice[0] && card.price <= selectedPrice[1];


        return colorMatch && brandMatch && priceMatch;
    });

    return (
        <div className='dressCard'>
            {filteredCards.length > 0 ? (
                filteredCards.map(card => (
                    <Card key={card.id} pic={card.pic} price={card.price} colors={card.colors} brand={card.brand} />
                ))
            ) : (
                <p>No dresses match your selection.</p>
            )}
        </div>
    );
}