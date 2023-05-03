import React from 'react';
import classNames from 'classnames/bind';
import styles from './ImageMoviesInfo.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);

function ImageMoviesInfo() {
    return (
        <div className={cx('info')}>
            <div className={cx('image')}>
                <Image />
            </div>
            <div className={cx('info-details')}></div>
        </div>
    );
}

export default ImageMoviesInfo;
