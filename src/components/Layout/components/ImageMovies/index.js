import Image from '../Image';
import classNames from 'classnames/bind';
import styles from './ImageMovies.module.scss';
const cx = classNames.bind(styles);

function ImageMovies(props) {
    const { src, alt, title, info, className } = props;
    return (
        <div className={cx('movie')} onClick={() => console.log({ title })}>
            <Image className={cx(className)} src={src} alt={alt} />
            {info ? (
                <div className={cx('movie-info')}>
                    <p className={cx('title')}>{title}</p>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default ImageMovies;
