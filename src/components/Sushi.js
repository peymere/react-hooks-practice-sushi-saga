import React, {useState} from "react";

function Sushi({name, image, price, budget, setBudget}) {
  const [isEaten, setIsEaten] = useState(false)
  
  const handleEat = () => {
    if (budget - price >= 0){
      setBudget(budget - price)
    } else {
      alert("You don't have enough money!")
    } 
    setIsEaten(!isEaten)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => {if (budget - price >= 0) {
        handleEat()
      } }}>
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
