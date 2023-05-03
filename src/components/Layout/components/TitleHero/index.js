import { useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import ListGenresUI from './ListGenresUI';
import SortDown from '../SortDown';
import Fixed from '../Fixed';

import classNames from 'classnames/bind';
import styles from './TitleHero.module.scss';
const cx = classNames.bind(styles);

function TitleHero({ title }) {
    // set background genres
    const [background, setBackground] = useState('#141414');
    const [isClick, setIsClick] = useState(false);
    const handleShowRecommend = () => {
        setIsClick(true);
    };
    const handleClick = () => {
        setBackground('hsla(0, 0%, 100%, 0.1)');
    };
    return (
        <Fixed>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <h2>{title}</h2>
                    <div>
                        <Tippy
                            trigger="click"
                            placement="bottom-start"
                            interactive
                            onClickOutside={() => setBackground('#141414')}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <div className={cx('genres')}>
                                        <ListGenresUI genres={title} />
                                    </div>
                                </div>
                            )}
                        >
                            <div
                                className={cx('label')}
                                onClick={handleClick}
                                style={{ backgroundColor: background }}
                            >
                                Genres
                                {/* <span className={cx('sort-down')}></span> */}
                                <SortDown />
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className={cx('right')}>
                    <button
                        className={cx('button')}
                        onClick={() => setIsClick(false)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                    {isClick ? (
                        <div className={cx('recommend')}>
                            <button
                                className={cx('button', 'button-recommend')}
                                onClick={handleShowRecommend}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <div className={cx('contentRecommend')}>
                                    Recommend for you
                                </div>
                                <SortDown />
                            </button>
                        </div>
                    ) : (
                        <button
                            className={cx('button')}
                            onClick={handleShowRecommend}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </Fixed>
    );
}

export default TitleHero;
