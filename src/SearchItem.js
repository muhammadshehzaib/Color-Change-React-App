import React from "react";
import colorNames from "colornames";

const SearchItem = ({ colorval, setColor, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                type="text"
                role="searchbox"
                id="search"
                placeholder="Add Color Name"
                value={colorval}
                onChange={(e) => {
                    setColor(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button type="button"
                onClick={() => setIsDarkText(!isDarkText)}>Toggle Text Color</button>
        </form>
    );
};

export default SearchItem;
