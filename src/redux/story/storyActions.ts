import { FETCH_STORIES_REQUEST, FETCH_STORIES_SUCCESS, FETCH_STORIES_FAILURE } from './storyTypes'
import { baseURL } from 'utils/constants'
import axios from 'axios'


export const fetchStoryRequest = () => {
    return {
        type: FETCH_STORIES_REQUEST
    }
}

export const fetchStorySuccess = (storyids: Array<number>) => {
    return {
        type: FETCH_STORIES_SUCCESS,
        payload: storyids
    }
}

export const fetchStoryFailure = (error: any /* TODO! */) => {
    return {
        type: FETCH_STORIES_FAILURE,
        payload: error
    }
}

export const fetchStoryIDs = () => {
    return (dispatch: any /* TODO */) => {
        dispatch(fetchStoryRequest)
        axios.get(baseURL + '/newstories.json')
        .then(response => {
            const storyids = response.data
            dispatch(fetchStorySuccess(storyids))
        })
        .catch(error => {
            const errMsg = error.message
            dispatch(fetchStoryFailure(errMsg))
        })
    }
}

export const fetchNews = async (storyId: number) => {
    const result = await axios
        .get(baseURL + `/item/${storyId}.json`)
        .then(({ data }) => data)
        .catch(err => console.log(err));
    return result
}