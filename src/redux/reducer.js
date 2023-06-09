import {
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_VIDEOGAME_BY_ID,
    RESET_DETAIL,
    SET_ERROR,
    SET_FILTER,
    GET_VIDEOGAME_BY_NAME,
    UPDATE,
    SET_PAGE,
    SET_UPDATE_GAME,
} from "./actionsTypes";

const initialState = {
    videoGames: [],
    genresGames: [],
    detailGame: {},
    detailGameUpdate: {},
    filterGames: {
        searchResults: [],
        genres: "ALL",
        origin: "ALL",
        ordering: "ALL",
        rating: "ALL",
    },
    currentPage: 1,
    errors: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videoGames: payload,
            };
        case GET_GENRES:
            return {
                ...state,
                genresGames: payload,
            };
        case GET_VIDEOGAME_BY_ID:
            return {
                ...state,
                detailGame: payload,
            };
        case GET_VIDEOGAME_BY_NAME:
            return {
                ...state,
                searchResults: payload,
            };

        case SET_ERROR:
            return {
                ...state,
                errors: payload,
            };
        case SET_FILTER:
            return {
                ...state,
                filterGames: {
                    ...state.filterGames,
                    [payload.name]: payload.value,
                },
            };
        case SET_UPDATE_GAME:
            return {
                ...state,
                detailGameUpdate: {},
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: payload,
            };

        case RESET_DETAIL:
            return {
                ...state,
                detailGame: {},
            };

        case UPDATE:
            return {
                ...state,
                detailGameUpdate: payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;
