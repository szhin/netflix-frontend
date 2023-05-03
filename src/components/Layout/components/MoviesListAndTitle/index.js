import { useEffect, useState } from 'react';
import ImageMovies from '../ImageMovies';

import { Row, Col } from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './MoviesListAndTitle.module.scss';
const cx = classNames.bind(styles);

function MoviesListAndTitle({ title }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchAPIMovies() {
            let response = await fetch(
                title === 'My List'
                    ? 'https://api.themoviedb.org/3/movie/upcoming?api_key=5d682f3693cca511f1da5ee17c3da43b&language=en-US&page=1'
                    : 'https://api.themoviedb.org/3/movie/now_playing?api_key=5d682f3693cca511f1da5ee17c3da43b&language=en-US&page=4',
            );
            let data = await response.json();
            return data;
        }
        fetchAPIMovies()
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.error(error));
    }, [title]);

    return (
        <div className={cx('wrapper')}>
            <Row className={cx('grid-row')}>
                {movies.map((movie) => (
                    <Col
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={3}
                        xxl={2}
                        className={cx('grid-col')}
                    >
                        <ImageMovies
                            key={movie.id}
                            alt={movie.title}
                            className={cx('image')}
                            title={movie.title}
                            date={movie.release_date}
                            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                            info
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default MoviesListAndTitle;
