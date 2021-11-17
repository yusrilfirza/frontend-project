import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { faSortDown, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DropdownProfile = () => (
    <Menu as="div" className="relative inline-block">
        <Menu.Button className="bg-black flex items-center rounded-full px-4 py-3 text-white shadow-sm">
            <img alt="" src={`${process.env.PUBLIC_URL}/assets/img/kagome.png`} className="h-full mr-4 rounded-full w-7" />
            <span>
                Kagome
                <FontAwesomeIcon icon={faSortDown} className="text-white ml-4 my-auto" />
            </span>
        </Menu.Button>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
        >
            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-36 rounded-md bg-black focus:outline-none">
                <div className="py-1" role="none">
                    <Menu.Item>
                        {
                            ({ active }) => (
                                <Link
                                    to="/profile"
                                    className={`text-white block mx-1 rounded-md hover:bg-main-bold_gray px-4 py-2 text-sm ${active ? 'bg-main-bold_gray' : ''}`}
                                    id="menu-item-0"
                                >
                                    <FontAwesomeIcon icon={faUser} className="text-white mr-4" />
                                    <span>Profile</span>
                                </Link>
                            )
                        }
                    </Menu.Item>
                    <Menu.Item>
                        {
                            ({ active }) => (
                                <Link
                                    to="/login"
                                    className={`text-white block mx-1 rounded-md hover:bg-main-bold_gray px-4 py-2 text-sm ${active ? 'bg-main-bold_gray' : ''}`}
                                    id="menu-item-0"
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} className="text-white mr-4" />
                                    <span>Log out</span>
                                </Link>
                            )
                        }
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
);

export default { DropdownProfile };
