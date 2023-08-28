import React from "react";
import Potioncard from "./Potioncard";

const Potions = ({potionInventory}) => {
    const potionInfo = potionInventory.map((potionInventory, i) => {
        return<Potioncard key={potionInventory.id} potion={potionInventory[i].potion} effect={potionInventory[i].effect} price={potionInventory[i].price} />
    })
    return(
        <div className="flex flex-wrap justify-center ma2">
            {potionInfo}
        </div>
    )
}

export default Potions