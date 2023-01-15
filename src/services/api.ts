import axios from "axios";

const apiKey = '39eb2e8958msh28c4499747567e3p1ab190jsn553f797f0458';
// const apiKey = 'bd0306eed7msh128039ee0ad0a51p1bd703jsneb421acb6e2b';
const host = 'yummly2.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/list',
    params: { limit: '10', start: '15' },
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': host
    }
};

export const dataList = async () => {
    try {
        const resp = await axios.request(options);
        const { data: {feed} } = resp;

        const dataRecipes = feed.map((data: any) => {

            const { content: {details} } = data;
            return details
        });

        return dataRecipes
    }
    catch (error) {
        console.log(error)
    }
}
