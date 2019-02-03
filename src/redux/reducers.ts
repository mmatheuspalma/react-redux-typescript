import { combineReducers } from 'redux';

import Restaurant from './Restaurant/reducers';

const reducers = combineReducers({
   Restaurant,
});

export default reducers;