import { combineReducers } from '@reduxjs/toolkit';

import registration from '../pages/registration/reducer';
import dashboard from '../pages/dashboard/reducer';

const rootReducer = combineReducers({
    registration,
    dashboard,
});

export default rootReducer;
