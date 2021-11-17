/* eslint-disable max-len */
import React from 'react';
// import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import moment from 'moment';
// import { AUTH_KEY, getCookie } from 'helpers/cookie';
// import { useInterval } from 'helpers/custom-hooks';
// import { clearNotification, setSessionExpired } from './action';
import { LayoutHeader } from '../header';
import { LayoutFooter } from '../footer';

export const LayoutBase = (props) => {
    // const dispatch = useDispatch();
    // const state = useSelector((rootState) => rootState.base);
    const { subHeaderStatus } = props;

    // eslint-disable-next-line no-unused-vars
    // const showNotification = () => {
    //     const { status } = state.notification_content;
    //     let statusIcon = faCheckCircle;
    //     let statusClass = 'text-support-green';
    //     if (status === 'error') {
    //         statusIcon = faTimesCircle;
    //         statusClass = 'text-support-red';
    //     }

    //     const options = {
    //         position: 'top-right',
    //         autoClose: 3000,
    //         hideProgressBar: true,
    //         type: status,
    //         closeOnClick: true,
    //     };

    //     const bodyMessage = (
    //         <div className="flex">
    //             <div className={`text-3xl mr-4 ${statusClass}`}>
    //                 <FontAwesomeIcon icon={statusIcon} />
    //             </div>
    //             <div>
    //                 <div className="text-black_blue font-semibold">{state.notification_content.title}</div>
    //                 <div className="text-black_blue-60 text-base">{state.notification_content.message}</div>
    //             </div>
    //         </div>
    //     );

    //     toast(bodyMessage, options);
    // };

    const renderLayout = () => {
        let layoutBody = (
            <div className="flex">
                <LayoutHeader loginStatus />
            </div>
        );
        if (!subHeaderStatus) {
            layoutBody = (
                <LayoutHeader loginStatus={false} title={props.title} />
            );
        }
        return layoutBody;
    };

    const { children } = props;
    return (
        <div className="app font-sans antialiased h-full">
            {/* <ToastContainer /> */}
            {renderLayout()}
            <div className="app-body w-full h-full mb-14">
                <main className="md:pl-20 px-10 md:px-20 main min-h-body relative py-8">
                    {children}
                </main>
            </div>
            <LayoutFooter />
        </div>
    );
};

export default LayoutBase;
