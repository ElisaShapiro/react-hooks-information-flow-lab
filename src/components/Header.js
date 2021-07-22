import React, { useState } from "react";

function Header({ onDarkModeClick, isDarkMode} ){

    function handleDarkModeClick() {
        onDarkModeClick()
    }

    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;
