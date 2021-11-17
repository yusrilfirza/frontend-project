import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_notification_show: false,
    notification_content: {},
    is_session_expired: false,
};

export const BaseReducer = createSlice({
    name: 'base',
    initialState,
    reducers: {
        // eslint-disable-next-line max-len
        setNotificationData: (state, action) => ({ ...state, notification_content: action.payload }),
        setNotification: (state, action) => ({ ...state, is_notification_show: action.payload }),
        setSessionExpired: (state, action) => ({ ...state, is_session_expired: action.payload }),
    },
});

export default BaseReducer.reducer;
