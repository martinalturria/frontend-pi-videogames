import CardsContainer from "../../components/CardsContainer/CardsContainer";
import filtered from "./auxiliaries/filtered";
import styles from "./homePage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getVideoGames,
    getGenres,
    currentPage,
    setDetailUpdate,
} from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filters/Filters";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../../components/Loading/Loadin";

const HomePage = () => {
    const dispatch = useDispatch();

    const videoGames = useSelector((state) => state.videoGames);
    const filterGames = useSelector((state) => state.filterGames);
    const searchResults = useSelector((state) => state.searchResults);
    const currentPages = useSelector((state) => state.currentPage);
    const error = useSelector((state) => state.errors);

    // Filters Games
    const filterVideoGames = filtered(videoGames, filterGames);

    // Pagination
    const gamesForPage = 15;
    const indexLastGames = currentPages * gamesForPage;
    const indexFirstGames = indexLastGames - gamesForPage;

    const currentGames = filterVideoGames.slice(
        indexFirstGames,
        indexLastGames
    );

    const handlePage = (numberOfPage) => {
        dispatch(currentPage(numberOfPage));
    };

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getVideoGames());
        dispatch(setDetailUpdate());
    }, [dispatch]);

    if (error) return <ErrorPage />;

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <SearchBar />
                </div>
                <div>
                    <Filter filterGames={filterGames} />
                </div>
            </div>
            <div className={styles.paginate}>
                <Pagination
                    currentPage={currentPages}
                    gamesForPage={gamesForPage}
                    totalGames={
                        !searchResults.length
                            ? filterVideoGames.length
                            : searchResults.length
                    }
                    handlePage={handlePage}
                />
            </div>
            <div>
                {!currentGames.length && !videoGames.length ? (
                    <div className={styles.contLoading}>
                        <Loading />
                    </div>
                ) : !currentGames.length ? (
                    <div className={styles.containerNoFilters}>
                        <span className={styles.noFilters}> No games found with filters applied, Try other Filters</span>
                    </div>
                ) : (
                    <CardsContainer
                        currentGames={
                            !searchResults.length ? currentGames : searchResults
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default HomePage;
