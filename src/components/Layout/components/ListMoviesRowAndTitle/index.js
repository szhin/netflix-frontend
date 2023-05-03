import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageMovies from '../ImageMovies';
import styles from './ListMoviesRowAndTitle.module.scss';
import { Row, Col } from 'react-bootstrap';

const cx = classNames.bind(styles);

function ListMoviesRowAndTitle({ title }) {
    const [movies, setMovies] = useState([]);
    const [imagesToShow, setImagesToShow] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [offset, setOffset] = useState(0);
    const [countClicked, setCountClicked] = useState(0);

    // Switch case for number, to fetch api
    useEffect(() => {
        let number;
        switch (title) {
            case 'Worth the Wait':
                number = 2;
                break;
            case 'Coming Next Week':
                number = 3;
                break;
            case 'Coming This Week':
                number = 4;
                break;
            case 'Quirky Romantic TV Shows':
                number = 5;
                break;
            case 'Continue Watching for you':
                number = 6;
                break;
            case 'Trending Now':
                number = 7;
                break;
            case 'Western Sitcoms':
                number = 8;
                break;
            case 'Award-winning Western TV Dramas':
                number = 14;
                break;
            case 'US Reality TV':
                number = 10;
                break;
            case 'Western Dramas':
                number = 11;
                break;
            case 'Chinese Movies & TV':
                number = 20;
                break;
            case 'K-Dramas':
                number = 15;
                break;
            case 'New Releases':
                number = 14;
                break;
            case 'Romantic TV Shows':
                number = 15;
                break;
            case 'Romantic Korean TV Shows':
                number = 16;
                break;
            case '30-Minute Laughs':
                number = 12;
                break;
            case 'Romantic TV Shows Based on Books':
                number = 18;
                break;
            case 'Anime':
                number = 19;
                break;
            case 'US Movies based on Real Life':
                number = 20;
                break;
            case 'Asian Revenge TV Dramas':
                number = 21;
                break;
            case 'Because you watched Love and Leashes':
                number = 22;
                break;
            case 'Western TV Comedies':
                number = 11;
                break;
            case 'Documentaries':
                number = 24;
                break;
            case 'US Kids & Family Movies based on Childrens Books':
                number = 10;
                break;
            case 'Fantasy Anime':
                number = 6;
                break;
            case 'Violent Western Period Pieces':
                number = 27;
                break;
            case 'Critically-acclaimed Asian TV Dramas':
                number = 6;
                break;
            case 'Hollywood Action Movies':
                number = 8;
                break;
            case 'Romantic Hollywood Movies':
                number = 12;
                break;
            case 'US High School Movies':
                number = 14;
                break;
            case 'Binge-worthy Korean TV Shows':
                number = 3;
                break;
            case 'Recently Added':
                number = 16;
                break;
            case 'Bingeworthy TV Shows':
                number = 8;
                break;
            case 'Award-Winning Films':
                number = 15;
                break;
            case 'Supernatural TV Shows':
                number = 16;
                break;
            case 'Because you watched V.I.P.':
                number = 14;
                break;
            case 'Because you watched Land of Spirits: The Young Shaman':
                number = 20;
                break;
            case 'Romantic TV Comedies':
                number = 8;
                break;
            case 'My List':
                number = 5;
                break;
            case 'New on Neftlix':
                number = 7;
                break;
            case 'Made in Korea':
                number = 11;
                break;
            case 'Continue Watching for D.Trung':
                number = 44;
                break;

            case 'Because you watched Friends':
                number = 19;
                break;
            case 'Medical TV Shows':
                number = 5;
                break;
            case 'Crime-Fighting Women':
                number = 21;
                break;
            case 'Critically Acclaimed TV Shows':
                number = 7;
                break;
            case 'Korean TV Comedies':
                number = 2;
                break;
            case 'Romantic Korean TV Dramas':
                number = 19;
                break;
            case 'Award-Winning TV Shows':
                number = 18;
                break;
            case 'Asian Teen TV Shows':
                number = 22;
                break;
            case 'Because you watched Perfect Match':
                number = 4;
                break;
            case 'Crime TV Thrillers':
                number = 15;
                break;
            case 'Romantic Favorites':
                number = 11;
                break;
            case 'Because you watched Who Rules the World':
                number = 6;
                break;
            case 'Popular on Netflix':
                number = 20;
                break;
            case 'Inspiring Sports Movies':
                number = 1;
                break;
            case 'Animation':
                number = 5;
                break;
            case 'Korean Movies':
                number = 7;
                break;
            case 'Southeast Asian Movies & TV':
                number = 12;
                break;
            case 'Comedies':
                number = 8;
                break;
            case 'Enemies-to-Lovers Movies':
                number = 6;
                break;
            case 'Family Movie Night':
                number = 21;
                break;
            case 'Movies Based on Real Life':
                number = 6;
                break;
            case 'Because you watched Shooter':
                number = 2;
                break;
            case 'Modern Classics':
                number = 3;
                break;
            case 'Because you watched Spider-Man: No Way Home (Extended Version)':
                number = 18;
                break;
            default:
                break;
        }
        async function fetchMoviesJSON(number) {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=5d682f3693cca511f1da5ee17c3da43b&language=en-US&page=${number}`,
            );
            let movies = await response.json();

            return movies;
        }
        fetchMoviesJSON(number)
            .then((movies) => {
                setMovies(movies.results); // fetched movies
            })
            .catch((error) => {
                console.error(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const rest = movies.length % 6;
        if (rest !== 0) {
            setImagesToShow(movies.slice(0, movies.length - rest));
        } else {
            setImagesToShow(movies);
        }
    }, [movies]);

    const handleNextSlide = () => {
        if (countClicked < imagesToShow.length / 6 - 1) {
            const newCountClicked = countClicked + 1;
            const newOffset = (newCountClicked - 1) * -100 - 99.666667;
            setOffset(newOffset);
            setCountClicked(newCountClicked);
        } else {
            const newCountClicked = 0;
            const newOffset = 0;
            setOffset(newOffset);
            setCountClicked(newCountClicked);
        }
        setIsClicked(true);
        if (isAnimating) return;
        setIsAnimating(true);
    };

    const handlePrevSlide = () => {
        if (countClicked > 0) {
            const newCountClicked = countClicked - 1;
            const newOffset = (newCountClicked - 1) * -100 - 99.666667;
            setCountClicked(newCountClicked);
            setOffset(newOffset);
        } else {
            const newCountClicked = imagesToShow.length / 6 - 1;
            const newOffset = (newCountClicked - 1) * -100 - 99.666667;
            setCountClicked(newCountClicked);
            setOffset(newOffset);
        }
        setIsClicked(true);
        if (isAnimating) return;
        setIsAnimating(true);
    };

    // prevent clicking next or prev too fast, slider is wrong
    useEffect(() => {
        // create a time to wait for the slide to finish moving
        const timeoutId = setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [isAnimating]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <h3 className={cx('title')}>{title}</h3>
                    <div className={cx('seeAllAndIcon')}>
                        <Link className={cx('see-all')}>See all</Link>
                        <FontAwesomeIcon
                            className={cx('angle-right')}
                            icon={faAngleRight}
                        />
                    </div>
                </div>
                <div className={cx('listAndIcon')}>
                    <div
                        onClick={handlePrevSlide}
                        className={cx('background-icon-pre')}
                    >
                        <FontAwesomeIcon
                            className={cx('previous')}
                            icon={faAngleLeft}
                        />
                    </div>
                    <div className={cx('list')}>
                        <Row
                            className={cx(
                                'd-flex flex-row flex-nowrap',
                                'grid-row',
                            )}
                            style={
                                isClicked
                                    ? {
                                          transform: `translate3d(${offset}%, 0px, 0px)`,
                                      }
                                    : {}
                            }
                        >
                            {imagesToShow.map((movie, index) => (
                                <Col
                                    key={index}
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                    xxl={2}
                                    className={cx('grid-col')}
                                >
                                    <ImageMovies
                                        src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                                        alt={movie.title}
                                        title={movie.title}
                                        date={movie.release_date}
                                        info={false}
                                        className={cx('image-list')}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div
                        onClick={handleNextSlide}
                        className={cx('background-icon-next')}
                    >
                        <FontAwesomeIcon
                            className={cx('next')}
                            icon={faAngleRight}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListMoviesRowAndTitle;
