import { combineReducers } from 'redux'
import { storyReducer } from './story/storyReducer'
import { storyIDReducer } from './storyid/storyIDReducer'

export const rootReducer = combineReducers({
    story: storyReducer,
    storyID: storyIDReducer
})