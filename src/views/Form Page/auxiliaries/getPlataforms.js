import { useSelector } from "react-redux";

const GetPlataforms = () => {
    const videoGames = useSelector((state) => state.videoGames);
    const totalPlatforms = [];

    videoGames.forEach(({ platform, created }) => {
        if (created === false)
            platform.forEach(({ platform }) => {
                totalPlatforms.push(platform.name);
            });
    });

    return [...new Set(totalPlatforms)];
};

export default GetPlataforms;
