import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Select from 'react-select';
import { getProvince, getCity, register as setData } from './action';

export const PageRegistration = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((rootState) => rootState.registration);
    const [province, setProvince] = useState(null);
    const [city, setCity] = useState(null);
    const schema = Yup.object().shape({
        email: Yup.string()
            .required('Cannot be empty')
            .email(),
        password: Yup.string()
            .required('Cannot be empty'),
        first_name: Yup.string()
            .required('Cannot be empty'),
        last_name: Yup.string()
            .required('Cannot be empty'),
        province: Yup.string()
            .required('Cannot be empty'),
        city: Yup.string()
            .required('Cannot be empty'),
        sex: Yup.string()
            .required('Cannot be empty'),
    });
    const [items, setItems] = useState(schema.default());

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (province !== null) {
            dispatch(getCity(province.value));
        }
    }, [province]); //eslint-disable-line

    useEffect(() => {
        dispatch(getProvince());
    }, []); //eslint-disable-line

    const onSubmit = (e) => {
        const body = {
            email: e.email,
            password: e.password,
        };
        setData(body, history);
    };
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="mt-12 px-5 py-3 md:border-gray-300 md:border rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="registration" className="header-label">Registration</label>
                    <div className="md:flex">
                        <div className="md:pr-8 md:border-r md:border-gray-400">
                            <div className="mt-4">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input id="first_name" name="first_name" type="text" className="input-base" autoComplete="off" placeholder="First name" ref={register} />
                                {errors.first_name && (
                                    <small className="text-red-600">{errors?.first_name?.message}</small>
                                )}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input name="last_name" type="text" className="input-base" autoComplete="off" placeholder="Last name" ref={register} />
                                {errors.last_name && (
                                    <small className="text-red-600">{errors?.last_name?.message}</small>
                                )}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input name="email" type="text" className="input-base" autoComplete="off" placeholder="Email" ref={register} />
                                {errors.email && (
                                    <small className="text-red-600">{errors?.email?.message}</small>
                                )}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input name="password" type="password" className="input-base" autoComplete="off" placeholder="Password" ref={register} />
                                {errors.password && (
                                    <small className="text-red-600">{errors?.password?.message}</small>
                                )}
                            </div>
                        </div>
                        <div className="md:pl-8">
                            <div className="mt-4">
                                <label htmlFor="first_name" className="form-label">Sex</label>
                                <select id="sex" className="input-base w-full md:w-56" name="sex" ref={register}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.sex && (
                                    <small className="text-red-600">{errors?.sex?.message}</small>
                                )}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="province" className="form-label">Province</label>
                                <input name="province" type="text" value={items.province} className="hidden" autoComplete="off" placeholder="province" ref={register} />
                                <Select
                                    options={state.province}
                                    value={province}
                                    onChange={(e) => {
                                        setProvince(e);
                                        setItems({ ...items, province: e.value });
                                    }}
                                />
                                {errors.province && (
                                    <small className="text-red-600">{errors?.province?.message}</small>
                                )}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="city" className="form-label">City</label>
                                <input name="city" type="text" value={items.city} className="hidden" autoComplete="off" placeholder="city" ref={register} />
                                <Select
                                    options={state.city}
                                    value={city}
                                    onChange={(e) => {
                                        setCity(e);
                                        setItems({ ...items, city: e.value });
                                    }}
                                    isLoading={state.isLoadingCity}
                                />
                                {errors.city && (
                                    <small className="text-red-600">{errors?.city?.message}</small>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="w-full bg-gray-500 hover:bg-gray-700 rounded-md flex justify-center py-2 text-white">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PageRegistration;
