import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading: false,
    isError: false,
    data: {
        description: '',
        image: '',
        link: '',
        posts: [],
        title: '',
    },
};

export const DashboardReducer = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setError: (state, action) => ({
            ...state,
            isLoading: action.payload,
        }),
        setData: (state, action) => ({ ...state, data: action.payload }),
        reset: () => initialState,
    },
});

export default DashboardReducer.reducer;
