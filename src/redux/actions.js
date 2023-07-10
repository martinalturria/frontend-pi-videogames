import {
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_VIDEOGAME_BY_ID,
    RESET_DETAIL,
    SET_ERROR,
    SET_FILTER,
    UPDATE,
    SET_PAGE,
    SET_UPDATE_GAME,
} from "./actionsTypes";
import axios from "axios";

export const getGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `http://localhost:3001/genres`
            );
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

export const getByName = (nameSearch, name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `http://localhost:3001/videogames?name=${nameSearch}`
            );
            const value = data;
            return dispatch({ type: SET_FILTER, payload: { name, value } });
        } catch ({ response }) {
            dispatch({ type: SET_ERROR, payload: response.data.error });
        }
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

export const setDetailUpdate = () => {
    return {
        type: SET_UPDATE_GAME,
    };
};

export const setErrors = (messaege = null) => {
    return {
        type: SET_ERROR,
        payload: messaege,
    };
};

export const resetDetail = () => {
    return {
        type: RESET_DETAIL,
    };
};

export const currentPage = (numberOfPage) => {
    return { type: SET_PAGE, payload: numberOfPage };
};
