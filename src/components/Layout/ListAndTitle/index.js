import Header from '../components/Header';
import TitleList from '../components/TitleList';
import Footer from '../components/Footer';
import MoviesListAndTitle from '../components/MoviesListAndTitle';

import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import styles from './ListAndTitle.module.scss';
const cx = classNames.bind(styles);

function ListAndTitle({ children, title }) {
    return (
        <motion.div
            className={cx('wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div>
                <Header children={children} />
                <TitleList title={title} />
                <div className={cx('content')}>
                    <MoviesListAndTitle title={title} />
                </div>
                <Footer />
            </div>
        </motion.div>
    );
}

export default ListAndTitle;
