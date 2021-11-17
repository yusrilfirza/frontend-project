import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Disclosure } from '@headlessui/react';
import { getNews } from './action';

export const PageDashboard = () => {
    const dispatch = useDispatch();
    const [articles, setArticles] = useState([]);
    const state = useSelector((rootState) => rootState.dashboard);
    const { data } = state;
    const { posts } = data;

    useEffect(() => {
        if (posts.length >= 1) setArticles(posts.slice(1, 8));
    }, [state]); //eslint-disable-line

    useEffect(() => {
        dispatch(getNews());
    }, []); //eslint-disable-line

    return (
        <div className="h-full w-full flex items-center">
            <div className="bg-gray-100 rounded-lg py-3 px-5 w-full">
                {
                    articles.length !== 0 ? articles.map((element, index) => (
                        <Disclosure>
                            <Disclosure.Button className={`bg-gray-50 px-5 py-3 rounded-lg w-full ${index !== 0 ? 'mt-4' : ''}`}>
                                {element.title}
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500 px-5 py-3 md:flex">
                                <img alt={element.title} src={element.thumbnail} />
                                <div className="md:ml-2 whitespace-normal mt-4 md:mt-0">
                                    {element.description}
                                    <a target="_blank" rel="noopener noreferrer" className=" text-green-700 hover:text-green-500 ml-4" href={element.link}>Klik disini untuk baca selengkapnya</a>
                                </div>
                            </Disclosure.Panel>
                        </Disclosure>
                    )) : 'Data not found'
                }
            </div>
        </div>
    );
};

export default PageDashboard;
