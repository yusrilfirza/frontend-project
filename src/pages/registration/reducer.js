import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading: false,
    isError: false,
    isLoadingCity: false,
    province: [],
    city: [],
};

const restructureOption = (data) => (
    data.map((el) => ({
        value: el.id,
        label: el.nama,
    }))
);

export const RegistrationReducer = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setCityLoading: (state, action) => ({
            ...state,
            isLoadingCity: action.payload,
        }),
        setError: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setProvince: (state, action) => ({ ...state, province: restructureOption(action.payload) }),
        setCity: (state, action) => ({ ...state, city: restructureOption(action.payload) }),
        reset: () => initialState,
    },
});

export default RegistrationReducer.reducer;
