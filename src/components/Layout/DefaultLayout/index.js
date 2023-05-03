import Header from '../components/Header';
import SectionHero from '../components/SectionHero';
import Footer from '../components/Footer';
import ContentHome from '../components/Content/ContentHome';
import HomeHero from './HomeHero';

import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children, title }) {
    return (
        <motion.div
            className={cx('wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div>
                <Header children={children} />
                <SectionHero namePath={HomeHero} />
                <div className={cx('content')}>
                    <ContentHome />
                </div>
                <Footer />
            </div>
        </motion.div>
    );
}

export default DefaultLayout;
