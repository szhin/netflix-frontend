import genresMovies from '../GenresMovies';
import genresTVShow from '../GenresTVShow';
import classNames from 'classnames/bind';
import styles from './ListGenresUI.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListGenresUI({ genres }) {
    const list = [];
    const pathName = genres === 'Movies' ? genresMovies : genresTVShow;
    // genresItems = pathName.map((item) => {});
    const quantity = pathName.length;
    const liNumber = genres === 'Movies' ? 8 : 7;

    for (let i = 0; i < quantity; i += liNumber) {
        const items = pathName.slice(i, i + liNumber).map((value, index) => (
            <li className={cx('menu-item')} key={index}>
                <Link className={cx('menu-item-link')}>{value}</Link>
            </li>
        ));
        list.push(
            <ul className={cx('menu-list')} key={i}>
                {items}
            </ul>,
        );
    }

    return <div className={cx('menu')}>{list}</div>;
}

export default ListGenresUI;
