import axios from 'axios'
import { baseURL } from './constants'

export const fetchNews = async (storyId: number) => {
    const result = await axios
        .get(baseURL + `/item/${storyId}.json`)
        .then(({ data }) => data)
        .catch(err => console.log(err));
    return result
}

export const fetchStory = async (storyId: number) => {
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