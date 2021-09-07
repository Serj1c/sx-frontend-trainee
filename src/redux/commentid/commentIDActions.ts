import { FETCH_COMMENTIDS_REQUEST, FETCH_COMMENTIDS_SUCCESS, FETCH_COMMENTIDS_FAILURE } from './commentIDTypes'
import { baseURL } from 'utils/constants'
import axios from 'axios'


export const fetchStoryIDsRequest = () => {
    return {
        type: FETCH_COMMENTIDS_REQUEST
    }
}

export const fetchStoryIDsSuccess = (commentids: Array<number>) => {
    return {
        type: FETCH_COMMENTIDS_SUCCESS,
        payload: commentids
    }
}

export const fetchStoryIDsFailure = (error: any /* TODO! */) => {
    return {
        type: FETCH_COMMENTIDS_FAILURE,
        payload: error
    }
}

export const fetchCommentIDs = () => {
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