import { useDispatch, useSelector } from "react-redux";
import { currentPage, setFilter, setResultsSearch } from "../../redux/actions";
import styles from "./filters.module.css";

const Filter = ({ filterGames }) => {
    const dispatch = useDispatch();
    const genresGames = useSelector((state) => state.genresGames);

    const handleFilterGames = (event) => {
        const { name, value } = event.target;
        dispatch(setFilter(name, value));
        dispatch(currentPage(1));
    };

    const resetFilter = () => {
        dispatch(setFilter("genres", "ALL"));
        dispatch(setFilter("origin", "ALL"));
        dispatch(setFilter("ordering", "ALL"));
        dispatch(setFilter("rating", "ALL"));
        dispatch(setResultsSearch([]));
        dispatch(currentPage(1));
    };

    return (
        <div className={styles.container}>
            <div>
                <p>GENRES:</p>
                <select
                    name="genres"
                    id="genres"
                    value={filterGames.genres}
                    onChange={handleFilterGames}
                >
                    <option value="ALL">ALL</option>
                    {genresGames.map((genre, index) => (
                        <option key={index} value={genre.name}>
                            {genre.name.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <p>ORIGIN:</p>
                <select
                    name="origin"
                    id="origin"
                    value={filterGames.origin}
                    onChange={handleFilterGames}
                >
                    <option value="ALL">ALL</option>
                    <option value="API">API</option>
                    <option value={"BDD"}>BDD</option>
                </select>
            </div>
            <div>
                <p>ORDERING:</p>
                <select
                    name="ordering"
                    id="ordering"
                    value={filterGames.ordering}
                    onChange={handleFilterGames}
                >
                    <option value="ALL">ALL</option>
                    <option value="A - Z">ORDER FROM A - Z</option>
                    <option value="Z - A">ORDER FROM Z - A</option>
                </select>
            </div>
            <div>
                <p>RATING:</p>
                <select
                    name="rating"
                    id="rating"
                    value={filterGames.rating}
                    onChange={handleFilterGames}
                >
                    <option value="ALL">ALL</option>
                    <option value="highest rating">HIGHEST RATING</option>
                    <option value="lower rating">LOWER RATING</option>
                </select>
            </div>

            <button className={styles.btn_reset} onClick={resetFilter}>Reset Filtres</button>
        </div>
    );
};

export default Filter;
