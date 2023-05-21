import { useDispatch, useSelector } from "react-redux";
import styles from "./errorPage.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { setErrors } from "../../redux/actions";

const ErrorPage = () => {
    const errorMessage = useSelector((state) => state.errors);
    const dispatch = useDispatch();

    return (
        <div className={styles.error}>
            <h1 className={styles.title}>ERROR 404</h1>
            <h2 className={styles.message}>{errorMessage}</h2>
            <NavLink to="/home">
                <button className={styles.btnError} onClick={() => dispatch(setErrors())}>HOME</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;
