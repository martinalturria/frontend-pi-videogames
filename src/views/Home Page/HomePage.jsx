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
import {
    CardsContainer,
    Pagination,
    SearchBar,
    Filter,
    Loading,
} from "../../components/index";
import { ErrorPage } from "../index";

const HomePage = () => {
    const dispatch = useDispatch();

    const videoGames = useSelector((state) => state.videoGames);
    const filterGames = useSelector((state) => state.filterGames);
    const currentPages = useSelector((state) => state.currentPage);
    const error = useSelector((state) => state.errors);

    // Filters Games
    const filterVideoGames = !filterGames.searchResults.length
        ? filtered(videoGames, filterGames)
        : filtered(filterGames.searchResults, filterGames);

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
                    totalGames={filterVideoGames.length}
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
                        <span className={styles.noFilters}>
                            {" "}
                            No games found with filters applied, Try other
                            Filters
                        </span>
                    </div>
                ) : (
                    <CardsContainer currentGames={currentGames} />
                )}
            </div>
        </div>
    );
};

export default HomePage;
