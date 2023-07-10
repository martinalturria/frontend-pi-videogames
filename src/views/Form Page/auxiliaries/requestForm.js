import axios from "axios";

const requestForm = (isCreating, setErrorsMessage, setSuccessMessage, setErrors,setNewGame, newGame, elementsGame) => {

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
    
}

export default requestForm
