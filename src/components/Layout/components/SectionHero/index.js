import classNames from 'classnames/bind';
import styles from './SectionHero.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function SectionHero({ namePath }) {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('hero')}
                style={{
                    backgroundImage: `url(${namePath.src})`,
                }}
            >
                <div className={cx('hero-left')}>
                    <h1 className={cx('title-hero')}>{namePath.title}</h1>
                    <p className={cx('description-hero')}>
                        {namePath.description}
                    </p>
                    <div className={cx('button')}>
                        <Button prop={'Play'} className={'button'} />
                        <Button prop={'More info'} className={'button-more'} />
                    </div>
                </div>
                <div className={cx('hero-right')}>
                    <span className={cx('age')}>16+</span>
                </div>
            </div>
        </div>
    );
}

export default SectionHero;
