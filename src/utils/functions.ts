import axios from 'axios'

const baseURL = `https://hacker-news.firebaseio.com/v0`

export const fetchNewsIds = async () => {
    const result = await axios
        .get(baseURL + '/newstories.json')
        .then(({ data }) => data)
        .catch(err => console.log(err));
    return result
};

export const fetchNews = async (storyId: number) => {
    const result = await axios
        .get(baseURL + `/item/${storyId}.json`)
        .then(({ data }) => data)
        .catch(err => console.log(err));
    return result
}

export const fetchComment = async (commentId: number) => {
    const result = await axios
        .get(baseURL + `/item/${commentId}.json`)
        .then(({ data }) => data)
        .catch(err => console.log(err));
    return result
}