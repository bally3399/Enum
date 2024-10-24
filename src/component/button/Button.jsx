import React from "react";

const Button = ({ icon, word, className}) => {
    return (
        <div className={`${className}`}>
            <image className={`${icon}`}></image>
            <button className={`${icon}`}>{word}</button>
        </div>
    );
};

export default Button;