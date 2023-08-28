import React, {useState} from "react";
import './qty.css';
import QtyButton from "./QtyButton";

const Potioncard =({potion, price, image}) => {
    return(
        <section  className=' dib ba bw2 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <div className='tc'>
                    <h1>{potion}</h1>
                    <img className="products" src={image}/>
                    <h4>${price}<span>/ea</span></h4>
                    <QtyButton price={price}/>
                    <button className="checkout">Add to Cart</button>
                </div>
            </div>
        </section>
        );
}

export default Potioncard