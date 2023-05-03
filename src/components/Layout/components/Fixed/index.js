import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Fixed.module.scss';

const cx = classNames.bind(styles);

function Fixed({ children }) {
    // Fixed top
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY > 0) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);
    const classTitle = cx('title');
    const newClassTitle = cx('title-bg');
    const classScroll = cx(classTitle + ' ' + newClassTitle);

    return (
        <div className={cx(color ? classScroll : classTitle)}>{children}</div>
    );
}

export default Fixed;
