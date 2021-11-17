import { News } from '../../services/api/news';
import { DashboardReducer } from './reducer';

export const getNews = () => async (dispatch) => {
    News.getNews()
        .then((response) => {
            dispatch(DashboardReducer.actions.setData(response.data.data));
        })
        .catch(() => {
            dispatch(DashboardReducer.actions.setError(true));
        })
        .finally(() => {
        });
};

export default {
    getNews,
};
