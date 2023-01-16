import axios from "axios";

const apiKey = "303271baffmshe04be575f9b1230p1b24f4jsndb778c3e4876";

const host = "yummly2.p.rapidapi.com";

const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list",
    params: { limit: "10", start: "15" },
    headers: {
        "X-RapidAPI-Key": apiKey,
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
