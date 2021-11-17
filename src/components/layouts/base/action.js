/* eslint-disable no-unused-vars */
import { getUsername } from '../../../helpers/cookie';
// import { Auth } from '../services/api/auth';
import { BaseReducer, notificationContentInterface } from './reducer';

export const setNotification = (status, message, title) => (dispatch) => {
    dispatch(BaseReducer.actions.setNotificationData({ status, message, title }));
    dispatch(BaseReducer.actions.setNotification(true));
};

export const clearNotification = () => (dispatch) => {
    dispatch(BaseReducer.actions.setNotification(false));
};

export const setSessionExpired = (isExpired) => (dispatch) => {
    dispatch(BaseReducer.actions.setSessionExpired(isExpired));
};

// export const refreshToken = () => async (dispatch) => {
//     Auth.refreshToken({}, getUsername())
//         .then((res) => {})
//         .catch((err) => {})
//         .finally(() => {});
// };

export default {
    setNotification,
    clearNotification,
    setSessionExpired,
    // refreshToken,
};
