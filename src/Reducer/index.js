import { combineReducers } from 'redux'
import posts from './Posts'
import auth from './Auth'

export default combineReducers ({ posts, auth })