import styles from "./card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <NavLink style={{ margin:"0px", textDecoration: "none" }} to={`/detail/${props.id}`}>
            <div
                style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className={styles.card}
            >
                <h2 className={styles.name}>{props.name}</h2>

                <h3 className={styles.rating}> &#9733; {props.rating}</h3>
                <div className={styles.genresContainer}>
                    {props.genres.map((genre, index) => {
                        return <h3 key={index} className={styles.genre}>{genre}</h3>;
                    })}
                </div>
            </div>
        </NavLink>
    );
};

export default Card;
