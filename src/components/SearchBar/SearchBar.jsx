import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentPage, getByName } from "../../redux/actions";
import styles from "./seachBar.module.css"

const SearchBar = () => {
    const [nameSearch, setNameSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (nameSearch) => {
        dispatch(getByName(nameSearch));

        dispatch(currentPage(1));
    };

    const handleInput = (event) => {
        setNameSearch(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch(nameSearch);
            setNameSearch("");
        }
    };

    return (
        <div>
            <input className={styles.inputSearch}
                type="text"
                value={nameSearch}
                onChange={handleInput}
                onKeyDown={handleKeyPress}
                placeholder="Search Name..."
            />
            <button className={styles.btnSearch}
                onClick={() => {
                    handleSearch(nameSearch);
                    setNameSearch("");
                }}
            >
                Enter
            </button>
        </div>
    );
};

export default SearchBar;
