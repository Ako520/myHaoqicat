import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux';

import courses from './courses.js'
import comments from './comments.js'

const rootReducer = combineReducers({courses,comments,routing:routerReducer})

export default rootReducer
