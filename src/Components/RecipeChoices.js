import React from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <div>
            <div className="radio-buttons">
                {choices &&
                    choices.map((choice) => (
                        <li key={choice}>
                            <input
                                id={choice}
                                value={choice}
                                name={label}
                                type="radio"
                                onChange={handleChange}
                                checked={checked.includes(choice)}
                            />
                            {choice}
                        </li>
                    ))}
            </div>
        </div>
    );
};

export default RecipeChoices;