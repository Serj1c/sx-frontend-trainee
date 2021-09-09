import { FETCH_STORY_REQUEST, FETCH_STORY_SUCCESS, FETCH_STORY_FAILURE } from './storyTypes'
import { StoryModel } from 'models/StoryModel'

export type initialStateType = {
    isLoading: boolean
    story: StoryModel
    error: string
}

export const initialState: initialStateType = {
    isLoading: false,
    story: null,
    error: '',
}

export const storyReducer = (state = initialState, action: any /* TODO! */) => {
    switch(action.type) {
        case FETCH_STORY_REQUEST:
            return {
                isLoading: true
            }
        case FETCH_STORY_SUCCESS:
            return {
                isLoading: false,
                story: action.payload,
                error: ''
            }
        case FETCH_STORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}