import { FETCH_COMMENTIDS_REQUEST, FETCH_COMMENTIDS_SUCCESS, FETCH_COMMENTIDS_FAILURE } from './commentIDTypes'



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
        case FETCH_COMMENTIDS_REQUEST:
            return {
                isLoading: true
            }
        case FETCH_COMMENTIDS_SUCCESS:
            return {
                isLoading: false,
                storyids: action.payload,
                error: ''
            }
        case FETCH_COMMENTIDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}