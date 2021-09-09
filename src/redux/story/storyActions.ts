import { FETCH_STORY_REQUEST, FETCH_STORY_SUCCESS, FETCH_STORY_FAILURE } from './storyTypes'
import { baseURL } from 'utils/constants'
import { StoryModel } from 'models/StoryModel'
import axios from 'axios'


export const fetchStoryRequest = () => {
    return {
        type: FETCH_STORY_REQUEST
    }
}

export const fetchStorySuccess = (story: StoryModel) => {
    return {
        type: FETCH_STORY_SUCCESS,
        payload: story
    }
}

export const fetchStoryFailure = (error: any /* TODO! */) => {
    return {
        type: FETCH_STORY_FAILURE,
        payload: error
    }
}

export const fetchStoryRedux = (storyId: number) => {
    return (dispatch: any /* TODO */) => {
        dispatch(fetchStoryRequest)
        axios.get(baseURL + `/item/${storyId}.json`)
        .then(response => {
            const story = response.data
            dispatch(fetchStorySuccess(story))
        })
        .catch(error => {
            const errMsg = error.message
            dispatch(fetchStoryFailure(errMsg))
        })
    }
}