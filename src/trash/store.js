import {createStore, compose} from 'redux';

import rootReducer from './redux/reducers.js';

import courses from './data/courses';
import departments from './data/departments';
import menudesc from './data/menudesc';

const defaultState = {
  courses,
  departments,
  menudesc
};

export default const store = createStore(rootReducer, defaultState);
