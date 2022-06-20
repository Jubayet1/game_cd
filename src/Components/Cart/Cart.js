import React from "react";

const Cart = ({ cds }) => {
    let allCDs = [...cds];

  const choosing = () => {
    const chooseOne = allCDs[Math.floor(Math.random() * allCDs.length)];
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
    allCDs = [];
    const number = document.getElementById("number");
    number.innerText = "0";
  };

  return (
    <div>
        <p>fff</p>
      <div>
        <h2 id="selectedItems">
          You've selected <span id="number">{allCDs.length}</span> items{" "}
        </h2>
        <h3>Selected Items</h3>
        <div id="gameArea">
          {allCDs.map((game) => {
            return (
              <div className="gameInCart">
                <img src={game.image} alt="GameImage" />
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
