import { combineReducers } from 'redux'
import { storyReducer } from './story/storyReducer'

export const rootReducer = combineReducers({
    story: storyReducer
})