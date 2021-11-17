import cookie from 'react-cookies';

// const CryptoJS = require('crypto-js');
const _ = require('lodash');

export const AUTH_KEY = `${process.env.REACT_APP_PROJECT_KEY}_auth`;
export const PROFILE_KEY = `${process.env.REACT_APP_PROJECT_KEY}_profile`;
export const OTP_KEY = `${process.env.REACT_APP_PROJECT_KEY}_otp_auth`;

export const getCookie = (cookieName, str) => {
    if (cookie.load(cookieName) !== undefined) {
        return cookie.load(cookieName)[str];
    }
    return null;
};

export const setCookie = (cookieName, objCookies) => {
    cookie.save(cookieName, objCookies, { path: '/' });
    return cookie;
};

export const clearCookie = (cookieName) => {
    cookie.remove(cookieName, { path: '/' });
};

export const generateAuthCookies = (resp) => {
    const authCookies = _.assign({
        [`${process.env.REACT_APP_PROJECT}_isLoggedIn`]: true,
        [`${process.env.REACT_APP_PROJECT}_accessToken`]: resp.data.access_token,
        [`${process.env.REACT_APP_PROJECT}_refreshToken`]: resp.data.refresh_token,
    });
    return authCookies;
};

export const generateProfileCookies = (resp) => {
    const profileCookies = _.assign({
        [`${process.env.REACT_APP_PROJECT}_username`]: resp.data.username,
        [`${process.env.REACT_APP_PROJECT}_roles`]: resp.data.roles,
        [`${process.env.REACT_APP_PROJECT}_id`]: resp.data.id,
    });
    return profileCookies;
};

export const setSessionLogin = (resp) => {
    setCookie(AUTH_KEY, generateAuthCookies(resp));
    setCookie(PROFILE_KEY, generateProfileCookies(resp));
};

export const setSessionOTP = (resp) => {
    const otpCookies = _.assign({
        [`${process.env.REACT_APP_PROJECT}_token`]: resp.data.token,
    });
    setCookie(OTP_KEY, otpCookies);
};

export const getRole = () => getCookie(PROFILE_KEY, `${process.env.REACT_APP_PROJECT}_roles`);

export const getUsername = () => getCookie(PROFILE_KEY, `${process.env.REACT_APP_PROJECT}_username`);

export const getUserId = () => getCookie(PROFILE_KEY, `${process.env.REACT_APP_PROJECT}_id`);

export const getOTPToken = () => getCookie(OTP_KEY, `${process.env.REACT_APP_PROJECT}_token`);

export const logout = () => {
    clearCookie(PROFILE_KEY);
    clearCookie(AUTH_KEY);
};

export default {
    setSessionLogin,
    getCookie,
    getRole,
    getUsername,
    setCookie,
    clearCookie,
    logout,
    getUserId,
    getOTPToken,
};
