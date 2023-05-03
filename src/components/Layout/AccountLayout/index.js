import Header from '../components/Header';
import Footer from '../components/Footer';

import classNames from 'classnames/bind';
import styles from './AccountLayout.module.scss';
const cx = classNames.bind(styles);

function HeroAndTitle({ children, title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Header children={children} />
                <div className={cx('content')}></div>
                <Footer />
            </div>
        </div>
    );
}

export default HeroAndTitle;
