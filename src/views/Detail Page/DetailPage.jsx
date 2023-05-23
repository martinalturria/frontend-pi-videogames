import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useHistory } from "react-router-dom";
import styles from "./detailPage.module.css";
import {
    getVideoGameById,
    getUpdateGame,
    resetDetail,
} from "../../redux/actions";
import { ErrorPage } from "../index";
import { Loading } from "../../components/index";
import requestDelete from "./auxiliaries/request";

const DetailPage = () => {
    const { id } = useParams();

    const history = useHistory();
    const detailId = useSelector((state) => state.detailGame);
    const error = useSelector((state) => state.errors);
    const dispatch = useDispatch();

    const deleteGame = (event) => {
        requestDelete(event, history, id);
    };

    useEffect(() => {
        dispatch(getVideoGameById(id));

        return () => {
            dispatch(resetDetail());
        };
    }, [dispatch, id]);

    if (error) return <ErrorPage />;

    return (
        <div>
            <div>
                {!Object.keys(detailId).length ? (
                    <div className={styles.contLoading}>
                        <Loading />
                    </div>
                ) : (
                    <div className={styles.container}>
                        <h1 className={styles.title}>{detailId.name}</h1>

                        <div className={styles.card}>
                            <div>
                                <img
                                    className={styles.cardImage}
                                    src={detailId.image}
                                    alt={detailId.name}
                                />
                            </div>

                            <div className={styles.cardContent}>
                                <span className={styles.titles}>
                                    Description:
                                </span>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: detailId.description,
                                    }}
                                ></p>

                                <span className={styles.titles}>
                                    Platforms:
                                </span>
                                <div className={styles.platGen}>
                                    {detailId.platforms.map(
                                        (platform, index) => {
                                            return (
                                                <span
                                                    className={
                                                        styles.platGenFont
                                                    }
                                                    key={index}
                                                >
                                                    {platform}
                                                </span>
                                            );
                                        }
                                    )}
                                </div>

                                <div className={styles.ratRel}>
                                    <span className={styles.titles}>
                                        Released:
                                    </span>
                                    <span className={styles.ratRelFont}>
                                        {new Date(
                                            detailId.released
                                        ).toLocaleDateString()}
                                    </span>
                                </div>

                                <div className={styles.ratRel}>
                                    <span className={styles.titles}>
                                        Rating:
                                    </span>
                                    <span className={styles.ratRelFont}>
                                        &#9733; {detailId.rating}
                                    </span>
                                </div>

                                <span className={styles.titles}>Genres:</span>
                                <div className={styles.platGen}>
                                    {id.length > 10
                                        ? detailId.genres.map(
                                              (genre, index) => {
                                                  return (
                                                      <span
                                                          className={
                                                              styles.platGenFont
                                                          }
                                                          key={index}
                                                      >
                                                          {genre.name}
                                                      </span>
                                                  );
                                              }
                                          )
                                        : detailId.genres.map(
                                              (genre, index) => {
                                                  return (
                                                      <span
                                                          className={
                                                              styles.platGenFont
                                                          }
                                                          key={index}
                                                      >
                                                          {genre}
                                                      </span>
                                                  );
                                              }
                                          )}
                                </div>
                            </div>
                            {id.length > 10 ? (
                                <div className={styles.contBtn}>
                                    <NavLink to="/home">
                                        <button className={styles.button}>
                                            BACK
                                        </button>
                                    </NavLink>
                                    <NavLink to="/create">
                                        <button
                                            className={styles.button}
                                            onClick={() =>
                                                dispatch(getUpdateGame(id))
                                            }
                                        >
                                            UPDATE
                                        </button>
                                    </NavLink>
                                    <NavLink to="/home">
                                        <button
                                            className={styles.button}
                                            onClick={deleteGame}
                                        >
                                            DELETE
                                        </button>
                                    </NavLink>
                                </div>
                            ) : (
                                <NavLink to="/home">
                                    <button className={styles.button}>
                                        BACK
                                    </button>
                                </NavLink>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailPage;
