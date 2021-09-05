import { FETCH_STORIES_REQUEST, FETCH_STORIES_SUCCESS, FETCH_STORIES_FAILURE } from './storyTypes'
import { StoryModel } from 'models/StoryModel'

export type initialStateType = {
    isLoading: boolean
    stories: Array<StoryModel>
    error: string
}

export const initialState: initialStateType = {
    isLoading: false,
    stories: [],
    error: '',
}

export const storyReducer = (state = initialState, action: any /* TODO! */) => {
    switch(action.type) {
        case FETCH_STORIES_REQUEST:
            return {
                isLoading: true
            }
        case FETCH_STORIES_SUCCESS:
            return {
                isLoading: false,
                storyids: action.payload,
                error: ''
            }
        case FETCH_STORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}