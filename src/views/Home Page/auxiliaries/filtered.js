const filtered = (videoGames, filterGames) => {
    const filterVideoGames = videoGames.filter((videoGame) => {
        if (
            filterGames.genres !== "ALL" &&
            !videoGame.genres.includes(filterGames.genres)
        )
            return false;

        if (filterGames.origin === "BDD" && videoGame.created === false) {
            return false;
        } else if (filterGames.origin === "API" && videoGame.created === true) {
            return false;
        }

        return true;
    });

    if (filterGames.ordering === "A - Z")
        filterVideoGames.sort((gameA, gameB) =>
            gameA.name.localeCompare(gameB.name)
        );

    if (filterGames.ordering === "Z - A")
        filterVideoGames.sort((gameA, gameB) =>
            gameB.name.localeCompare(gameA.name)
        );

    if (filterGames.rating === "highest rating")
        filterVideoGames.sort((gameA, gameB) => gameB.rating - gameA.rating);

    if (filterGames.rating === "lower rating")
        filterVideoGames.sort((gameA, gameB) => gameA.rating - gameB.rating);

    return filterVideoGames;
};

export default filtered;
