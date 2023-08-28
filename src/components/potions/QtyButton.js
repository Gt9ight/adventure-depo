import React, {useState} from "react";

const QtyButton = ({price}) => {
    const [count, setCount] = useState(0);

    const handleMinusClick = () => {
        setCount(count - 1);
      };
    
      const handlePlusClick = () => {
        setCount(count + 1);
      };

    return(
        <div className="NumContainer">
           <span className="minus"  onClick={handleMinusClick}>-</span>
           <span className="num">{count}</span>
           <span className="plus" onClick={handlePlusClick}>+</span>
           <span>lb</span>
           <h3>Total: ${(price * count).toFixed(2)}</h3>
        </div>
    )
}
export default QtyButton;
