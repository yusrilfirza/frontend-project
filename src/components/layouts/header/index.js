import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../../helpers/cookie';
import BrandIcon from '../../elements/icon-text';

export const LayoutHeader = (props) => {
    const history = useHistory();
    const { loginStatus } = props;

    const onClickLogout = () => {
        logout();
        history.push('/login');
    };

    const renderHeaderButton = (title) => {
        let button = (
            <Link
                to="/login"
                className="bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-full px-5 py-2"
            >
                Login
            </Link>
        );
        if (title === 'Login') {
            button = (
                <Link
                    to="/registration"
                    className="bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-full px-5 py-2"
                >
                    Registration
                </Link>
            );
        }
        return button;
    };

    const renderHeaderItem = () => {
        let headerItem = (
            <div className="md:pl-20 md:pr-10 flex justify-between w-full">
                <BrandIcon />
                <div className="flex items-center">
                    <button type="button" onClick={onClickLogout} className="bg-gray-500 hover:bg-gray-800 text-white font-semibold rounded-full px-5 py-2">
                        Log out
                    </button>
                </div>
            </div>
        );
        if (!loginStatus) {
            const { title } = props;
            headerItem = (
                <div className="flex w-full mx-auto justify-between">
                    <BrandIcon />
                    {renderHeaderButton(title)}
                </div>
            );
        }
        return headerItem;
    };

    return (
        <header
            className="py-2 px-4 md:py-5 md:px-20 bg-main-bold_gray-half flex border-b border-gray-300 w-full"
        >
            {renderHeaderItem()}
        </header>
    );
};

export default LayoutHeader;
