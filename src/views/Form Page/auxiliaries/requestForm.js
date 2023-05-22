import axios from "axios";

const requestForm = (isCreating, setErrorsMessage, setSuccessMessage, setErrors,setNewGame, newGame, elementsGame) => {

    if (isCreating) {
        axios
            .post("https://backend-pi-videogames-production-eee1.up.railway.app/videogames", newGame)
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
            .put(`https://backend-pi-videogames-production-eee1.up.railway.app/videogames/${newGame.id}`, newGame)
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
