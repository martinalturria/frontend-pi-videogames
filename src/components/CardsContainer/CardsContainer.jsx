import Card from "../Card/Card";
import styles from "./cardsContainer.module.css";

const CardsContainer = ({ currentGames }) => {
    return (
        <div className={styles.cardsContainer}>
            {currentGames.map((videoGame) => {
                return (
                    <Card
                        key={videoGame.id}
                        id={videoGame.id}
                        name={videoGame.name}
                        image={videoGame.image}
                        rating={videoGame.rating}
                        genres={videoGame.genres}
                    />
                );
            })}
        </div>
    );
};

export default CardsContainer;
