import { FETCH_STORYIDS_REQUEST, FETCH_STORYIDS_SUCCESS, FETCH_STORYIDS_FAILURE } from './storyIDTypes'


export type initialStateType = {
    isLoading: boolean
    storyids: Array<number>
    error: string
}

export const initialState: initialStateType = {
    isLoading: false,
    storyids: [],
    error: '',
}

export const storyIDReducer = (state = initialState, action: any /* TODO! */) => {
    switch(action.type) {
        case FETCH_STORYIDS_REQUEST:
            return {
                isLoading: true
            }
        case FETCH_STORYIDS_SUCCESS:
            return {
                isLoading: false,
                storyids: action.payload,
                error: ''
            }
        case FETCH_STORYIDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}