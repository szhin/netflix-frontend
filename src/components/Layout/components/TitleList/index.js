import React from 'react';
import { useEffect, useState } from 'react';

import LabelSortDown from '../LabelSortDown';
import ListLanguages from './ListLanguages';
import ListOriginal from './ListOriginal';
import ListSuggest from './ListSuggest';
import Fixed from '../Fixed';

import classNames from 'classnames/bind';
import styles from './TitleList.module.scss';
const cx = classNames.bind(styles);

function TitleList({ title }) {
    const [titleOriginal, setTitleOriginal] = useState(false);
    useEffect(() => {
        if (title === 'My List') {
            setTitleOriginal(false);
        } else {
            setTitleOriginal(true);
        }
    }, [title]);
    return (
        <Fixed>
            <div className={cx('inner', 'origin')}>
                <div className={cx('left')}>
                    <h2 className={cx('title')}>{title}</h2>
                </div>
                {titleOriginal ? (
                    <div className={cx('right')}>
                        <span className={cx('span-title-list')}>
                            Select Your Preferences
                        </span>
                        <LabelSortDown
                            content="Original Language"
                            tippy={ListOriginal}
                        />
                        <LabelSortDown
                            content="English"
                            tippy={ListLanguages}
                        />
                        <span className={cx('span-title-list')}>Sort by</span>
                        <LabelSortDown
                            content="Suggestions For You"
                            tippy={ListSuggest}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Fixed>
    );
}

export default TitleList;
