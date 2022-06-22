import React from "react";

const Cart = ({ cds }) => {
  let allCDs = [...cds];
  let newCDs = allCDs.slice(0, 4);

  const choosing = () => {
    const chooseOne = newCDs[Math.floor(Math.random() * newCDs.length)];
    const name = chooseOne.name;
    console.log(chooseOne.image);
    const area = document.getElementById("gameArea");
    area.innerHTML = "";
    area.innerHTML = `
            <div className='gameCart'>
                <img src=${chooseOne.image}>
                <p>${name}</p>
            </div>
        `;
  };

  const clearCart = () => {
    const area = document.getElementById("gameArea");
    area.innerHTML = "";
    newCDs = [];
    const number = document.getElementById("number");
    number.innerText = "0";
  };

  return (
    <div>
      <div>
        <h2 id="selectedItems">
          You've selected <span id="number">{newCDs.length}</span> items{" "}
        </h2>
        <h3>Selected Items</h3>
        <div id="gameArea">
          {newCDs.map((game) => {
            return (
              <div className="flex flex-row my-4">
                <img src={game.image} alt="GameImage" className="w-32" />
                <p>{game.name}</p>
              </div>
            );
          })}
        </div>
        <button onClick={choosing}>OUR RECOMMENDATION</button>
        <br /> <br />
        <button onClick={clearCart}>CLEAR THE CART</button>
      </div>
    </div>
  );
};

export default Cart;
