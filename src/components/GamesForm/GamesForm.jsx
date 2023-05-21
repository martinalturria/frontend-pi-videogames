import React from "react";
import styles from "./gamesForm.module.css";

const GameForm = ({
    newGame,
    errors,
    handlerChange,
    handlerSubmit,
    platforms,
    genres,
    isCreating,
    successMessage,
    errorMessage,
}) => {
    const disabled =
        !newGame.name ||
        errors.name ||
        errors.image ||
        errors.released ||
        errors.rating ||
        errors.platforms ||
        errors.genres ||
        errors.description;

    return (
        <form className={styles.contForm} onSubmit={handlerSubmit}>
            <div className={styles.contDivs}>
                <div
                    className={`${styles.inputs} ${
                        errors.name ? styles.error : ""
                    }`}
                >
                    <input
                        type="text"
                        name="name"
                        value={newGame.name}
                        onChange={handlerChange}
                        placeholder="NAME"
                    />
                    {errors && (
                        <span
                            className={`${styles.errorMessage} ${
                                errors.name ? styles.showError : ""
                            }`}
                        >
                            {errors.name}
                        </span>
                    )}
                </div>
                <div
                    className={`${styles.inputs} ${
                        errors.image ? styles.error : ""
                    }`}
                >
                    <input
                        type="url"
                        name="image"
                        value={newGame.image}
                        onChange={handlerChange}
                        placeholder="IMAGE"
                    />
                    {errors && (
                        <span
                            className={`${styles.errorMessage} ${
                                errors.image ? styles.showError : ""
                            }`}
                        >
                            {errors.image}
                        </span>
                    )}
                </div>
            </div>

            <div className={styles.contDivs}>
                <div
                    className={`${styles.inputs} ${
                        errors.released ? styles.error : ""
                    }`}
                >
                    <input
                        type="date"
                        name="released"
                        value={newGame.released}
                        onChange={handlerChange}
                    />
                    {errors && (
                        <span
                            className={`${styles.errorMessage} ${
                                errors.released ? styles.showError : ""
                            }`}
                        >
                            {errors.released}
                        </span>
                    )}
                </div>
                <div
                    className={`${styles.inputs} ${
                        errors.rating ? styles.error : ""
                    }`}
                >
                    <input
                        type="number"
                        name="rating"
                        value={newGame.rating}
                        onChange={handlerChange}
                        min={1}
                        max={5}
                        step={0.1}
                        placeholder="RATING (1 A 5)"
                    />
                    {errors && (
                        <span
                            className={`${styles.errorMessage} ${
                                errors.rating ? styles.showError : ""
                            }`}
                        >
                            {errors.rating}
                        </span>
                    )}
                </div>
            </div>

            <div className={styles.contDivsGenPlat}>
                <div>
                    <label>PLATFORMS:</label>
                    <div className={styles.contPlatGen}>
                        {platforms.map((platform, index) => {
                            const isChecked =
                                newGame.platforms.includes(platform);

                            return (
                                <label
                                    className={`${styles.labelcheck} ${
                                        isChecked ? styles.selected : ""
                                    } ${errors.platforms ? styles.error : ""}`}
                                    key={index}
                                >
                                    <input
                                        type="checkbox"
                                        name="platforms"
                                        value={platform}
                                        onChange={handlerChange}
                                        checked={newGame.platforms.includes(
                                            platform
                                        )}
                                    />
                                    {platform}
                                </label>
                            );
                        })}
                    </div>
                    {errors.platforms && (
                        <p className={styles.errorMessage}>
                            {errors.platforms}
                        </p>
                    )}
                </div>
                <div>
                    <label>GENRES:</label>
                    <div className={styles.contPlatGen}>
                        {genres.map((genre, index) => {
                            const isChecked = newGame.genres.includes(
                                index + 1
                            );

                            return (
                                <label
                                    className={`${styles.labelcheck} ${
                                        isChecked ? styles.selected : ""
                                    } ${errors.genres ? styles.error : ""}`}
                                    key={index}
                                >
                                    <input
                                        type="checkbox"
                                        name="genres"
                                        value={index + 1}
                                        onChange={handlerChange}
                                        checked={newGame.genres.includes(
                                            index + 1
                                        )}
                                    />
                                    {genre.name}
                                </label>
                            );
                        })}
                    </div>
                    {errors.genres && (
                        <p className={styles.errorMessage}>{errors.genres}</p>
                    )}
                </div>
            </div>

            <div
                className={`${styles.inputs} ${
                    errors.description ? styles.error : ""
                }`}
            >
                <textarea
                    type="text"
                    name="description"
                    value={newGame.description}
                    onChange={handlerChange}
                    placeholder="Enter your description about the game"
                />
                {errors && (
                    <span
                        className={`${styles.errorMessage} ${
                            errors.description ? styles.showError : ""
                        }`}
                    >
                        {errors.description}
                    </span>
                )}
            </div>

            <button
                className={`${disabled ? styles.btnDisabled : styles.btnForm}`}
                type="submit"
                disabled={disabled}
            >
                {isCreating ? "CREATE VIDEOGAME" : "UPDATE VIDEOGAME"}
            </button>

            {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
            )}
            {errorMessage && (
                <p className={styles.erroresMessage}>{errorMessage}</p>
            )}
        </form>
    );
};

export default GameForm;
