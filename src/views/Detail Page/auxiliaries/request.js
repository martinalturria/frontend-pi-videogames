import axios from "axios";

const requestDelete = (event, history, id) => {
    

    const confirmDelete = window.confirm("Do you want to delete the game?");

    if (confirmDelete) {
        axios
            .delete(`http://localhost:3001/videogames/${id}`)
            .then((res) => {
                history.push("/home");
            })
            .catch((res) => window.alert(res.message));
    }else{
        event.preventDefault()
    }
};

export default requestDelete