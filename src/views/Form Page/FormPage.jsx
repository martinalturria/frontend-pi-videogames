import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import GetPlataforms from "./auxiliaries/getPlataforms";
import validate from "./auxiliaries/vildate";
import styles from "./formPage.module.css";
import axios from "axios";
import GameForm from "../../components/GamesForm/GamesForm";

const FormPage = () => {
    const elementsGame = {
        name: "",
        image: "",
        released: "",
        rating: "",
        platforms: [],
        genres: [],
        description: "",
    };

    const genres = useSelector((state) => state.genresGames);
    const platforms = GetPlataforms();
    const detailGameUpdate = useSelector((state) => state.detailGameUpdate);

    const [newGame, setNewGame] = useState(elementsGame);
    const [errors, setErrors] = useState(elementsGame);
    const [isCreating, setIsCreating] = useState(true);

    const [errorMessage, setErrorsMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (Object.keys(detailGameUpdate).length > 0) {
            setNewGame({
                ...detailGameUpdate,
                released: detailGameUpdate.released.substr(0, 10),
            });
            setIsCreating(!detailGameUpdate.name);
        }
    }, [detailGameUpdate]);

    const handlerChange = (event) => {
        const { type, name, value, checked } = event.target;

        if (type === "checkbox") {
            if (name === "genres") {
                const changeGenres = checked
                    ? [...newGame.genres, +value]
                    : newGame.genres.filter((genre) => genre !== +value);

                setNewGame({ ...newGame, genres: changeGenres });
                setErrors(validate({ ...newGame, genres: changeGenres }));
            } else if (name === "platforms") {
                const changePlataform = checked
                    ? [...newGame.platforms, value]
                    : newGame.platforms.filter(
                          (platform) => platform !== value
                      );

                setNewGame({ ...newGame, platforms: changePlataform });
                setErrors(validate({ ...newGame, platforms: changePlataform }));
            }
        } else if (name === "rating") {
            setNewGame({ ...newGame, rating: +value });
            setErrors(validate({ ...newGame, rating: +value }));
        } else {
            setNewGame({ ...newGame, [name]: value });
            setErrors(validate({ ...newGame, [name]: value }));
        }
    };

    const handlerSubmit = async (event) => {
        event.preventDefault();

        if (isCreating) {
            axios
                .post("http://localhost:3001/videogames", newGame)
                .then((res) => {
                    setSuccessMessage("The game has been created successfully");
                    setErrorsMessage("");
                })
                .catch(
                    (res) =>
                        setErrorsMessage(
                            "The game has not been created correctly"
                        ),
                    setSuccessMessage("")
                );
        } else {
            console.log(newGame);
            axios
                .put(`http://localhost:3001/videogames/${newGame.id}`, newGame)
                .then((res) => {
                    setSuccessMessage("The game has been updated successfully");
                    setErrorsMessage("");
                })
                .catch(
                    (res) =>
                        setErrorsMessage(
                            "The game has not been updated correctly"
                        ),
                    setSuccessMessage("")
                );
        }

        setNewGame(elementsGame);
        setErrors(elementsGame);
    };

    return (
        <div className={styles.containerForm}>
            <GameForm
                newGame={newGame}
                errors={errors}
                handlerChange={handlerChange}
                handlerSubmit={handlerSubmit}
                platforms={platforms}
                genres={genres}
                isCreating={isCreating}
                successMessage={successMessage}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default FormPage;