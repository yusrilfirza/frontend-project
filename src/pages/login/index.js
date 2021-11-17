import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';
import { login } from './action';

export const PageLogin = () => {
    const history = useHistory();
    const schema = Yup.object().shape({
        email: Yup.string()
            .required('Cannot be empty')
            .email(),
        password: Yup.string()
            .required('Cannot be empty'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (e) => {
        const body = {
            email: e.email,
            password: e.password,
        };
        login(body, history);
    };
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="mt-12 px-5 py-3 md:border-gray-300 md:border rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="login" className="header-label">Login</label>
                    <div>
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
                    <div className="mt-4">
                        <button type="submit" className="w-full bg-gray-500 hover:bg-gray-700 rounded-md flex justify-center py-2 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PageLogin;
