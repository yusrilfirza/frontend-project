/* eslint-disable max-len */
import React from 'react';
import { Provider } from 'react-redux';
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter, Route, withRouter, Redirect,
} from 'react-router-dom';
import { ModalSwitch, ModalRoute } from 'react-router-modal-gallery';
import { AUTH_KEY, getCookie } from './helpers/cookie';
import store from './services/store';

import { LayoutBase } from './components/layouts/base';

import { PageRegistration } from './pages/registration';
import { PageLogin } from './pages/login';
import { PageDashboard } from './pages/dashboard';

const routes = [
    {
        path: '/dashboard',
        component: PageDashboard,
        title: 'Registration',
    },
    // {
    //     path: '/login',
    //     component: PageLogin,
    //     title: 'Registration',
    // },
    // {
    //     path: '/search',
    //     component: PageDashboard,
    //     title: 'Search',
    // },
];

export const AppRoute = () => {
    const isLoggedIn = () => {
        const authCookie = getCookie(AUTH_KEY, `${process.env.REACT_APP_PROJECT}_isLoggedIn`);
        if (!authCookie) return false;
        return true;
    };

    const renderRootPath = () => {
        const isLogin = isLoggedIn();
        return <Redirect to={!isLogin ? '/login' : '/dashboard'} />;
    };

    const renderLandingPage = (Comp, props, title) => {
        const isLogin = isLoggedIn();
        const loginLayout = (
            <LayoutBase subHeaderStatus={false} title={title} {...props}>
                <Comp {...props} />
            </LayoutBase>
        );
        document.title = `News | ${title}`;
        return !isLogin ? loginLayout : <Redirect to="/" />;
    };

    const PrivateRoute = ({ component: Comp, title, ...rest }) => {
        const render = (props) => {
            const isLogin = isLoggedIn();
            return isLogin ? (
                <LayoutBase subHeaderStatus {...props}>
                    <Comp {...props} />
                </LayoutBase>
            ) : (
                <Redirect to="/login" />
            );
        };
        document.title = `News | ${title}`;
        return <Route {...rest} render={render} />;
    };

    const pageRoutes = routes
        .filter((route) => !route.is_modal)
        .map((route) => (
            <PrivateRoute
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
                has_access={route.has_access}
                title={route.title}
            />
        ));

    const modalRoutes = routes
        .filter((route) => route.is_modal)
        .map((route) => (
            <ModalRoute
                key={route.path}
                path={route.path}
                defaultParentPath={route.defaultParentPath || '/'}
                component={route.component}
            />
        ));

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ModalSwitch>
                    <Route exact path="/" render={() => renderRootPath()} />
                    <Route path="/registration" render={(props) => renderLandingPage(PageRegistration, props, 'Registration')} />
                    <Route path="/login" render={(props) => renderLandingPage(PageLogin, props, 'Login')} />
                    {pageRoutes}
                    {modalRoutes}
                    {/* <Route component={PageNotFound} /> */}
                </ModalSwitch>
            </BrowserRouter>
        </Provider>
    );
};

export default withRouter(AppRoute);
