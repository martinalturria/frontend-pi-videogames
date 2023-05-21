import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";

const NavBar = () => {
    return (
        <div className={styles.mainContainer}>
            <NavLink to="/home">
                <button className={styles.btnsNav}>HOME</button>
            </NavLink>
            <NavLink to="/create">
                <button className={styles.btnsNav}>CREATE VIDEOGAME</button>
            </NavLink>
            <NavLink to="/">
                <button className={styles.btnsNav}>EXIT</button>
            </NavLink>
        </div>
    );
};

export default NavBar;
