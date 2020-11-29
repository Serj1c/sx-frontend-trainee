import axios from 'axios';

export const fetchNewsIds = async () => {
    const result = await axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then(console.log('WOW'))
        .then(({ data }) => data);
    return result;
};

export const fetchNews = async (storyId) => {
    const result = await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then(({ data }) => data);
    return result;
}