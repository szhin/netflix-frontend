import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentNewPopular from '../components/Content/ContentNewPopular';

import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import styles from './OnlyList.module.scss';
const cx = classNames.bind(styles);

function OnlyList({ children, title }) {
    return (
        <motion.div
            className={cx('wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div>
                <Header children={children} />
                <div className={cx('content')}>
                    <ContentNewPopular />
                </div>
                <Footer />
            </div>
        </motion.div>
    );
}

export default OnlyList;
