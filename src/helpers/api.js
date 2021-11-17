/* eslint-disable no-param-reassign */
import axios from 'axios';
import store from '../services/store';
import { BaseReducer } from '../components/layouts/base/reducer';
import { AUTH_KEY, getCookie } from './cookie';

const BASE_REGION_URL = process.env.REACT_APP_REGION_API_URL;
const BASE_NEWS_URL = process.env.REACT_APP_NEWS_API_URL;

const apiRegionClient = axios.create({
    baseURL: BASE_REGION_URL,
});
const apiNewsClient = axios.create({
    baseURL: BASE_NEWS_URL,
});

export const interceptorRequestConfig = (config) => {
    const token = getCookie(AUTH_KEY, `${process.env.REACT_APP_PROJECT}_accessToken`);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

export const interceptorRequestCallback = (error) => Promise.reject(error);

export const interceptorResponseData = (response) => response;
export const interceptorResponseCallback = async (error) => {
    if (error.response.status === 401 && error.response.config.url !== '/login') {
        store.dispatch(BaseReducer.actions.setSessionExpired(true));
    }
    return Promise.reject(error.response);
};

apiRegionClient.interceptors.request.use(interceptorRequestConfig, interceptorRequestCallback);
apiRegionClient.interceptors.response.use(interceptorResponseData, interceptorResponseCallback);

apiNewsClient.interceptors.request.use(interceptorRequestConfig, interceptorRequestCallback);
apiNewsClient.interceptors.response.use(interceptorResponseData, interceptorResponseCallback);

const {
    get: getRegion, post: postRegion, put: putRegion, delete: destroyRegion,
} = apiRegionClient;

const {
    get: getNews, post: postNews, put: putNews, delete: destroyNews,
} = apiNewsClient;

export {
    getRegion, postRegion, putRegion, destroyRegion,
    getNews, postNews, putNews, destroyNews,
};
