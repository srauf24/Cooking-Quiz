import React, { useState } from "react";
import drinksJson from "./drinks.json";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
    const [inputs, setInputs] = useState({});
    const [trueRecipe, setTrueRecipe] = useState({});
    const [currentDrink, setCurrentDrink] = useState('');

    const [checkedTemp, setCheckedTemp] = useState('');
    const [checkedSyrup, setCheckedSyrup] = useState('');
    const [checkedMilk, setCheckedMilk] = useState('');
    const [checkedBlended, setCheckedBlended] = useState('');
    const [checkedSpices, setCheckedSpices] = useState('');
    const [checkedGarnish, setCheckedGarnish] = useState('');

   const ingredients = {
    'temp': [
        'Hot',
        'Cold',
        'Room Temperature'
    ],
    'syrup': [
        'Jaggery',
        'Honey',
        'Maple Syrup',
        'Vanilla Syrup',
        'None',

    ],
    'milk': [
        'Whole Milk',
        'Cow',
        'Yogurt',
        'Half Milk & Half Water',
        'Cashew Milk'
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
        'Salt',
        'None',

    ],
    'garnish': [
        'Pistachios',
        'Almonds',
        'None'
    ]
};
    const onCheckAnswer = () => {
    if (trueRecipe.temp !== inputs['temp']) {
        setCheckedTemp('wrong');
    } else {
        setCheckedTemp('correct');
    }

    if (trueRecipe.syrup !== inputs['syrup']) {
        setCheckedSyrup('wrong');
    } else {
        setCheckedSyrup('correct');
    }

    if (trueRecipe.milk !== inputs['milk']) {
        setCheckedMilk('wrong');
    } else {
        setCheckedMilk('correct');
    }

    if (trueRecipe.blended !== inputs['blended']) {
        setCheckedBlended('wrong');
    } else {
        setCheckedBlended('correct');
    }

    if (trueRecipe.spices !== inputs['spices']) {
        setCheckedSpices('wrong');
    } else {
        setCheckedSpices('correct');
    }

    if (trueRecipe.garnish !== inputs['garnish']) {
        setCheckedGarnish('wrong');
    } else {
        setCheckedGarnish('correct');
    }
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
        setCheckedTemp('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
        setCheckedSpices('');
        setCheckedGarnish('');
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
            <form className="container">
                {/* Temperature Column */}
                <div className={`column ${checkedTemp}`}>
                    <h3>Temperature</h3>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="temp"
                        choices={ingredients.temp}
                        checked={inputs.temp}
                    />
                </div>

                {/* Syrup Column */}
                <div className={`column ${checkedSyrup}`}>
                    <h3>Syrup</h3>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="syrup"
                        choices={ingredients.syrup}
                        checked={inputs.syrup}
                    />
                </div>

                {/* Milk Column */}
                <div className={`column ${checkedMilk}`}>
                    <h3>Milk</h3>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="milk"
                        choices={ingredients.milk}
                        checked={inputs.milk}
                    />
                </div>

                {/* Blended Column */}
                <div className={`column ${checkedBlended}`}>
                    <h3>Blended</h3>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="blended"
                        choices={ingredients.blended}
                        checked={inputs.blended}
                    />
                </div>

                {/* Spices Column */}
                <div className={`column ${checkedSpices}`}>
                    <h3>Spices</h3>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="spices"
                        choices={ingredients.spices}
                        checked={inputs.spices}
                    />
                </div>

                {/* Garnish Column */}
                <div className={`column ${checkedGarnish}`}>
                    <h3>Garnish</h3>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="garnish"
                        choices={ingredients.garnish}
                        checked={inputs.garnish}
                    />
                </div>
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