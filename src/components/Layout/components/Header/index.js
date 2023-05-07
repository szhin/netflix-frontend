import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import TippyNotification from './TippyNotification';

import routesConfig from '../../../../config/routes';
import Image from '../Image';
import logo from '../../../../assets/images/logo-shin.png';
import { TitleNavbar } from './TitleNavbar';

import {
    faBars,
    faCaretDown,
    faRegistered,
    faRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header({ children }) {
    // Scroll > 0 to change background header
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY > 0) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);
    const classHeader = cx('header');
    const newClassHeader = cx('header-bg');
    const classScroll = cx(classHeader + ' ' + newClassHeader);
    const [isClickBars, setIsClickBars] = useState(false);

    // Click outside search
    const [searchValue, setSearchValue] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const refOne = useRef(null);

    const handleClickOutSide = (e) => {
        if (!refOne?.current?.contains(e.target)) {
            setShowSearch(false);
            // setIsClickBars(false);
        } else {
            // setIsClickBars(true);
            setShowSearch(true);
        }
        setIsClickBars(false);
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutSide, true);
    }, []);

    const handleClick = () => {
        setShowSearch(true);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);
    };

    /////////////////////// BACK END //////////////////////
    const [avatar, setAvatar] = useState('images/user-default-img.png');
    const logOut = () => {
        fetch('https://shin-backend.onrender.com/YourAccount/logout', {
            // fetch('http://localhost:3001/YourAccount/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then(() => {
                setAvatar('images/user-default-img.png');
            })
            .catch((error) => console.error(error));
    };
    const fetchAPI = () => {
        fetch('https://shin-backend.onrender.com/YourAccount/data', {
            // fetch('http://localhost:3001/YourAccount/data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => setAvatar(data.image))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchAPI();
        console.log(avatar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className={cx(color ? classScroll : classHeader)}>
            <div className={cx('inner')}>
                <div className={cx('left-navbar')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <Image
                            src={logo}
                            alt="Logo Netflix"
                            className={cx('logo')}
                        />
                    </Link>
                    <ul className={cx('navbar')}>
                        {TitleNavbar.map(
                            (route, id) =>
                                route.title !== null && (
                                    <li key={id} className={cx('navbar-item')}>
                                        <Link
                                            to={route.path}
                                            className={cx('item')}
                                        >
                                            {route.title}
                                        </Link>
                                    </li>
                                ),
                        )}
                    </ul>
                </div>

                <div className={cx('right-navbar')}>
                    {showSearch ? (
                        <div className={cx('search-input')}>
                            <FontAwesomeIcon
                                className={cx('icon')}
                                icon={faMagnifyingGlass}
                                onClick={() => setShowSearch(false)}
                            />
                            <input
                                className="placeholder-input"
                                value={searchValue}
                                type="text"
                                placeholder="Titles, people, genres"
                                maxLength={80}
                                onChange={handleChange}
                                autoFocus
                                ref={refOne}
                            />
                        </div>
                    ) : (
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faMagnifyingGlass}
                            onClick={handleClick}
                        />
                    )}
                    <div>
                        <Tippy
                            placement="bottom-start"
                            interactive
                            render={(attrs) => (
                                <div tabIndex="-1" {...attrs}>
                                    <div className={cx('notification-items')}>
                                        {TippyNotification.map((item, id) => (
                                            <div
                                                key={id}
                                                className={cx(
                                                    'image-text-notification',
                                                )}
                                            >
                                                <div className={cx('image')}>
                                                    <Image
                                                        className={cx(
                                                            'image-notification',
                                                        )}
                                                        src={item.src}
                                                    />
                                                </div>
                                                <div
                                                    className={cx(
                                                        'text-notification',
                                                    )}
                                                >
                                                    <div>{item.header}</div>
                                                    <div>{item.body}</div>
                                                    <span>{item.timeAgo}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        >
                            <FontAwesomeIcon
                                className={cx('icon')}
                                icon={faBell}
                            />
                        </Tippy>
                    </div>
                    <div className={cx('account')}>
                        <Tippy
                            placement="bottom-start"
                            interactive
                            render={(attrs) => (
                                <div
                                    className={cx('account-options')}
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    <div className={cx('all-options')}>
                                        <div className={cx('account-option')}>
                                            <FontAwesomeIcon
                                                icon={faRightToBracket}
                                            />
                                            <Link
                                                to={routesConfig.login}
                                                className={cx('name-option')}
                                            >
                                                Login
                                            </Link>
                                        </div>
                                        <div className={cx('account-option')}>
                                            <FontAwesomeIcon
                                                icon={faRegistered}
                                            />
                                            <Link
                                                to={routesConfig.register}
                                                className={cx('name-option')}
                                            >
                                                Register
                                            </Link>
                                        </div>

                                        <div className={cx('account-option')}>
                                            <FontAwesomeIcon icon={faUser} />
                                            <Link
                                                to={routesConfig.infoAccount}
                                                className={cx('name-option')}
                                            >
                                                Your Account
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={cx('sign-out')}>
                                        <Link
                                            className={cx('name-option')}
                                            onClick={logOut}
                                        >
                                            Sign out of Netflix
                                        </Link>
                                    </div>
                                    <div className={cx('dropdown-arrow')}></div>
                                </div>
                            )}
                        >
                            <div className={cx('user')}>
                                <Image
                                    // src={
                                    //     avatar === undefined
                                    //         ? 'https://shin-backend.onrender.com/images/user-default-img.png'
                                    //         : `https://shin-backend.onrender.com/${avatar}`
                                    // }
                                    src={
                                        avatar === undefined
                                            ? 'https://shin-backend.onrender.com/images/user-default-img.png'
                                            : `https://shin-backend.onrender.com/${avatar}`
                                    }
                                    alt="Logo user"
                                    className={cx('logo-user')}
                                />

                                <FontAwesomeIcon
                                    className={cx('icon-caret')}
                                    icon={faCaretDown}
                                />
                            </div>
                        </Tippy>
                    </div>

                    <FontAwesomeIcon
                        icon={faBars}
                        className={cx('bars-icon')}
                        onClick={() => setIsClickBars(!isClickBars)}
                    />
                </div>
            </div>
            <div
                onMouseLeave={() => setIsClickBars(false)}
                className={cx('menu-dropdown', isClickBars ? 'open' : '')}
            >
                {TitleNavbar.map(
                    (route, id) =>
                        route.title !== null && (
                            <li key={id} className={cx('navbar-item')}>
                                <Link to={route.path} className={cx('item')}>
                                    {route.title}
                                </Link>
                            </li>
                        ),
                )}
            </div>
        </header>
    );
}

export default Header;
