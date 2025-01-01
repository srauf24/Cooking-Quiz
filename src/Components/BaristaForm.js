import React, {Component, useState} from "react";
import drinksJson from "./drinks.json"
const BaristaForm = () => {
    const [inputs, setInputs] = useState({
  'Base': '',
  'Sweetener': '',
  'Spices': '',
  'Serving Style': ''
});

const ingredients = {
  'Base': [
    'Whole Milk',         // Common in Doodh Patti and Karak Chai
    'Almond Milk',        // Optional for modern versions
    'Oat Milk',           // Optional for modern versions
    'Water',              // Used in Masala Chai and Kashmiri Chai
    'Half Milk & Half Water', // Used in traditional Masala Chai
    'Coconut Milk'        // Fake out: uncommon in traditional chai
  ],
  'Sweetener': [
    'Sugar (white)',      // Common in all chai types
    'Sugar (brown)',      // Used for richer flavor in Karak Chai
    'Jaggery',            // Traditional sweetener, popular in Masala Chai
    'Honey',              // Optional for lighter sweetness
    'None',               // For those who prefer unsweetened chai
    'Maple Syrup'         // Fake out: uncommon in chai but plausible
  ],
  'Spices': [
    'Cardamom',           // Essential in Kashmiri, Masala, and Karak Chai
    'Ginger',             // Key in Masala Chai
    'Cinnamon',           // Common in Masala Chai
    'Cloves',             // Used in spicier versions of Masala Chai
    'Saffron',            // A signature ingredient for Kashmiri Chai
    'Nutmeg'              // Fake out: close enough to confuse users but not traditional
  ],
  'Serving Style': [
    'Hot',                // Default for all chai types
    'Iced',               // Modern take, often used for Masala or Karak Chai
    'Extra Frothy',       // Popular for Karak Chai
    'Traditional (clay cup)', // Enhances experience for Doodh Patti or Masala Chai
    'With Garnish (nuts, pistachios, etc.)', // For Kashmiri Chai
    'With Whip cream' // Fake out: not a traditional serving style
  ]
};

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