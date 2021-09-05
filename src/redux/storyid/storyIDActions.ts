import { FETCH_STORYIDS_REQUEST, FETCH_STORYIDS_SUCCESS, FETCH_STORYIDS_FAILURE } from './storyIDTypes'
import { baseURL } from 'utils/constants'
import axios from 'axios'


export const fetchStoryIDsRequest = () => {
    return {
        type: FETCH_STORYIDS_REQUEST
    }
}

export const fetchStoryIDsSuccess = (storyids: Array<number>) => {
    return {
        type: FETCH_STORYIDS_SUCCESS,
        payload: storyids
    }
}

export const fetchStoryIDsFailure = (error: any /* TODO! */) => {
    return {
        type: FETCH_STORYIDS_FAILURE,
        payload: error
    }
}

export const fetchStoryIDs = () => {
    return (dispatch: any /* TODO */) => {
        dispatch(fetchStoryIDsRequest)
        axios.get(baseURL + '/newstories.json')
        .then(response => {
            const storyids = response.data
            dispatch(fetchStoryIDsSuccess(storyids))
            console.log(storyids)
        })
        .catch(error => {
            const errMsg = error.message
            dispatch(fetchStoryIDsFailure(errMsg))
        })
    }
}