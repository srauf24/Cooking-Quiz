import React, {Component, useState} from "react";
const BaristaForm = () => {
    const onCheckAnswer = () =>{


    }
    const onNewDrink = () =>{


    }
  return (
      <div>
          <h2>Hi, I'd like to order a:</h2>
          <form>
          </form>
          <button className="button submit" type="submit" onClick={onCheckAnswer}>
              Check Answer
          </button>
          <button className="button submit" type="new-drink-button" onClick={onNewDrink}>
              New Drink
          </button>
      </div>
  );

};

export default BaristaForm;