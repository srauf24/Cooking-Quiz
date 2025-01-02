import React, { useState } from "react";
import drinksJson from "./drinks.json";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'Base': '',
        'Sweetener': '',
        'Spices': '',
        'Serving Style': ''
    });

    const [trueRecipe, setTrueRecipe] = useState({
        ingredients: {
            temp: '',
            syrup: '',
            milk: '',
            blended: '',
            spices: '',
            garnish: ''
        }
    });

    const [currentDrink, setCurrentDrink] = useState('');

    const ingredients = {
        'Base': [
            'Whole Milk',
            'Almond Milk',
            'Oat Milk',
            'Water',
            'Half Milk & Half Water',
            'Coconut Milk'
        ],
        'Sweetener': [
            'Sugar (white)',
            'Sugar (brown)',
            'Jaggery',
            'Honey',
            'None',
            'Maple Syrup'
        ],
        'Spices': [
            'Cardamom',
            'Ginger',
            'Cinnamon',
            'Cloves',
            'Saffron',
            'Nutmeg'
        ],
        'Serving Style': [
            'Hot',
            'Iced',
            'Extra Frothy',
            'Traditional (clay cup)',
            'With Garnish (nuts, pistachios, etc.)',
            'With Whip cream'
        ]
    };

    const onCheckAnswer = () => {
        // Logic for checking the answer
    };

    const onNewDrink = () => {
        setInputs({
            'Base': '',
            'Sweetener': '',
            'Spices': '',
            'Serving Style': ''
        });
        getNextDrink();
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className ="drink-container">
                <h2 className={"mini-header"}>
                    {currentDrink}
                </h2>
                <button className={"button newdrink"} type = "new-drink-button" onClick={onNewDrink}>
                    🔄
                </button>

            </div>
            <form>
                <h3>Temperature</h3>
                <div className="answer-space">
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />
                {/* Form content goes here */}
            </form>
            <button className="button submit" type="submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button className="button submit" type="button" onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    );
};

export default BaristaForm;