import React, { useState } from "react";
import drinksJson from "./drinks.json";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
    const [inputs, setInputs] = useState({});
    const [trueRecipe, setTrueRecipe] = useState({});
    const [currentDrink, setCurrentDrink] = useState('');

    const ingredients = {
        'temp': [
            'Hot',
            'Cold',
            'Room Temperature'
        ],
        'syrup': [
            'Sugar (white)',
            'Sugar (brown)',
            'Jaggery',
            'Honey',
            'None',
            'Maple Syrup'
        ],
        'milk': [
            'Whole Milk',
            'Almond Milk',
            'Oat Milk',
            'Water',
            'Half Milk & Half Water',
            'Coconut Milk'
        ],
        'blended': [
            'Yes',
            'No'
        ],
        'spices': [
            'Cardamom',
            'Ginger',
            'Cinnamon',
            'Cloves',
            'Saffron',
            'Nutmeg'
        ],
        'garnish': [
            'With Garnish (nuts, pistachios, etc.)',
            'With Whip cream',
            'None'
        ]
    };


    const onCheckAnswer = () => {
        // Logic for checking the answer
    };

    const onNewDrink = () => {
        setInputs({
            temp: '',
            syrup: '',
            milk: '',
            blended: '',
            spices: '',
            garnish: ''
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
            <div className="drink-container">
                <h2 className={"mini-header"}>
                    {currentDrink}
                </h2>
                <button className={"button newdrink"} type="new-drink-button" onClick={onNewDrink}>
                    🔄
                </button>
            </div>
            <form>
                <h3>Temperature</h3>
                <div className="answer-space">
                    {inputs["temp"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temp"
                    choices={ingredients["temp"]}
                    checked={inputs["temp"]}
                />
                <h3>Syrup</h3>
                <div className="answer-space">
                    {inputs["syrup"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />
                <h3>Milk</h3>
                <div className="answer-space">
                    {inputs["milk"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />
                <h3>Blended</h3>
                <div className="answer-space">
                    {inputs["blended"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
                <h3>Spices</h3>
                <div className="answer-space">
                    {inputs["spices"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="spices"
                    choices={ingredients["spices"]}
                    checked={inputs["spices"]}
                />
                <h3>Garnish</h3>
                <div className="answer-space">
                    {inputs["garnish"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="garnish"
                    choices={ingredients["garnish"]}
                    checked={inputs["garnish"]}
                />
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