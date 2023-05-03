import classNames from 'classnames/bind';
import styles from './SortDown.module.scss';

const cx = classNames.bind(styles);

function SortDown() {
    return <span className={cx('sort-down')}></span>;
}

export default SortDown;
