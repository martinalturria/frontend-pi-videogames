import {
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_VIDEOGAME_BY_ID,
    RESET_DETAIL,
    SET_ERROR,
    SET_FILTER,
    GET_VIDEOGAME_BY_NAME,
    SET_RESULTS_SEARCH,
    UPDATE,
    SET_PAGE,
    SET_UPDATE_GAME,
} from "./actionsTypes";
import axios from "axios";

export const getGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/genres`);
            return dispatch({ type: GET_GENRES, payload: data });
        } catch ({ response }) {
            dispatch({ type: SET_ERROR, payload: response.data.error });
        }
    };
};

export const getVideoGames = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `http://localhost:3001/videogames`
            );
            return dispatch({ type: GET_VIDEOGAMES, payload: data });
        } catch ({ response }) {
            dispatch({ type: SET_ERROR, payload: response.data.error });
        }
    };
};

export const getVideoGameById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `http://localhost:3001/videogames/${id}`
            );
            return dispatch({ type: GET_VIDEOGAME_BY_ID, payload: data });
        } catch ({ response }) {
            dispatch({ type: SET_ERROR, payload: response.data.error });
        }
    };
};

export const setFilter = (name, value) => {
    return {
        type: SET_FILTER,
        payload: { name, value },
    };
};

export const resetDetail = () => {
    return {
        type: RESET_DETAIL,
    };
};

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `http://localhost:3001/videogames?name=${name}`
            );
            return dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data });
        } catch ({ response }) {
            dispatch({ type: SET_ERROR, payload: response.data.error });
        }
    };
};

export const setResultsSearch = (name) => {
    return {
        type: SET_RESULTS_SEARCH,
        payload: [],
    };
};

export const getUpdateGame = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `http://localhost:3001/videogames/${id}`
            );
            data.genres = data.genres.map((genre) => genre.id);
            return dispatch({ type: UPDATE, payload: data });
        } catch ({ response }) {
            dispatch({ type: SET_ERROR, payload: response.data.error });
        }
    };
};

export const setDetailUpdate = () => {
    return {
        type: SET_UPDATE_GAME,
    };
};

export const currentPage = (numberOfPage) => {
    return { type: SET_PAGE, payload: numberOfPage };
};

export const setErrors = (messaege = null) => {
    return {
        type: SET_ERROR,
        payload: messaege,
    };
};
