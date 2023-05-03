import Header from '../components/Header';
import Footer from '../components/Footer';
import TitleHero from '../components/TitleHero';
import SectionHero from '../components/SectionHero';
import ContentMovies from '../components/Content/ContentMovies';
import ContentTVShows from '../components/Content/ContentTVShows';

import TVShowsHero from './TVShowsHero';
import MoviesHero from './MoviesHero';

import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import styles from './HeroAndTitle.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function HeroAndTitle({ children, title }) {
    const [path, setPath] = useState('');
    const [namePath, setNamePath] = useState('');
    useEffect(() => {
        setPath(title);
        setNamePath(title === 'TV Shows' ? TVShowsHero : MoviesHero);
    }, [title]);
    return (
        <motion.div
            className={cx('wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div>
                <Header children={children} />
                <TitleHero title={title} />
                <SectionHero namePath={namePath} />
                <div className={cx('content')}>
                    {path === 'Movies' ? <ContentMovies /> : <ContentTVShows />}
                </div>
                <Footer />
            </div>
        </motion.div>
    );
}

export default HeroAndTitle;
