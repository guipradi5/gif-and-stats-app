import axios from "axios";

export const getGifs = async () => {
    const result = await axios.get("https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8")
    return result.data.results
}

/* 
Ideally this could have been done with MongoDB or another NoSQL solution to save and 
get the click count for each gif among all users of the application.
But I decided to keep it simple for this exercise using localStorage to simulate this.
Didn't want to over-engineer it for this simple exercise where the FE is the main focus.
*/

export const getGifClickCount = async (gifId) => {
    return await localStorage.getItem(gifId)
}

export const postGifClick = async (gifId) => {
    const clickCount = await getGifClickCount(gifId) || 0
    localStorage.setItem(gifId, parseInt(clickCount) + 1);
}