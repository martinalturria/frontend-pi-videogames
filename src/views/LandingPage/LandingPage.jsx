import { NavLink } from "react-router-dom";
import styles from "./landingPage.module.css";

const LandingPage = () => {
    return (
        <div className={styles.landingContainer}>
            <div class={styles.maquina}>
                <p class={styles.texto}>
                    Welcome to PI - Henry's Videogames by Martin Alturria
                </p>
            </div>
            <NavLink to="/home">
                <button className={styles.btn}>ENTER</button>
            </NavLink>
        </div>
    );
};

export default LandingPage;
