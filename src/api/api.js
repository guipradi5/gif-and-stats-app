import axios from "axios";

export const getGifs = async () => {
    return (await axios.get("https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8")).data.results
}