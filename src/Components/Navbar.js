import React from "react";

const Navbar = () => {
    const handleClick = event => {
    };
    
    return (
        <nav>
            <button id="order pizza" onClick={handleClick}>
            Order Pizza!
            </button>
            <h3> Bloomtech Eats </h3>

        </nav>
    );
};

export default Navbar;


