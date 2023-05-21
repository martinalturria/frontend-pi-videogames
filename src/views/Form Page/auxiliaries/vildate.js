const validate = (elementsGame) => {
    const error = {};
    const expRegUrl =
        /^https?:\/\/(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)+([/?].*)?$/i;

    if (elementsGame.name.length < 3 || elementsGame.name.length > 25)
        error.name = "Invalid Name";

    if (!expRegUrl.test(elementsGame.image)) error.image = "invalid image url";

    if (elementsGame.released.length < 1)
        error.released = "You must enter a release date";

    if (
        elementsGame.description.length < 10 ||
        elementsGame.description.length > 1000
    )
        error.description =
            "The description must have between 10 and 1000 characters.";

    if (elementsGame.rating < 1 || elementsGame.rating > 5)
        error.rating = "rating of being from 1 to 5";

    if (elementsGame.genres.length < 1)
        error.genres = "You must select at least one genre";

    if (elementsGame.platforms.length < 1)
        error.platforms = "you must select at least one platforms";

    return error;
};

export default validate;
