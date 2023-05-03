import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import SortDown from '../SortDown';
import classNames from 'classnames/bind';
import styles from './LabelSortDown.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function LabelSortDown({ content, tippy }) {
    const [background, setBackground] = useState('#141414');
    const handleClick = () => {
        setBackground('hsla(0, 0%, 100%, 0.1)');
    };
    return (
        <div className={cx('list')}>
            <Tippy
                trigger="click"
                placement="bottom-start"
                interactive
                onClickOutside={() => setBackground('#141414')}
                render={(attrs) => (
                    <div className={cx('box')} tabIndex="-1" {...attrs}>
                        <ul className={cx('menu-list')}>
                            {tippy.map((item, id) => (
                                <li className={cx('menu-item')} key={id}>
                                    <Link className={cx('menu-link')}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            >
                <div
                    className={cx('label')}
                    onClick={handleClick}
                    style={{ backgroundColor: background }}
                >
                    {content}
                    <SortDown />
                </div>
            </Tippy>
        </div>
    );
}

export default LabelSortDown;
