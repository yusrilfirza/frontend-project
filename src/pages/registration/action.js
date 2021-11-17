import { Region } from '../../services/api/region';
import { RegistrationReducer } from './reducer';

export const getProvince = () => async (dispatch) => {
    Region.getProvince()
        .then((response) => {
            dispatch(RegistrationReducer.actions.setProvince(response.data.provinsi));
        })
        .catch(() => {
            dispatch(RegistrationReducer.actions.setError(true));
        })
        .finally(() => {
        });
};

export const getCity = (id) => async (dispatch) => {
    dispatch(RegistrationReducer.actions.setCityLoading(true));
    Region.getSpecificCity(id)
        .then((response) => {
            dispatch(RegistrationReducer.actions.setCity(response.data.kota_kabupaten));
        })
        .catch(() => {
            dispatch(RegistrationReducer.actions.setError(true));
        })
        .finally(() => {
            dispatch(RegistrationReducer.actions.setCityLoading(false));
        });
};

export const register = (body, history) => {
    localStorage.setItem('user', JSON.stringify(body));
    history.push('/login');
};

export const reset = () => async (dispatch) => {
    dispatch(RegistrationReducer.actions.reset());
};

export default {
    getProvince, getCity, register, reset,
};
