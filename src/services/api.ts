import axios from "axios";

const host = "yummly2.p.rapidapi.com";

const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list",
    params: { limit: "10", start: "15" },
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": host,
    },
};

export const dataList = async () => {
    try {
        const resp = await axios.request(options);
        const {
            data: { feed },
        } = resp;

        const dataRecipes = feed.map((data: any) => {
            const {
                content: { details },
            } = data;

            return details;
        });

        return dataRecipes;
    } catch (error) {
        console.log(error);
    }
};
