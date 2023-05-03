import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({ prop, className }) {
    return (
        <button className={cx(`${className}`)}>
            {
                <FontAwesomeIcon
                    className={cx('icon')}
                    icon={className === 'button' ? faPlay : faCircleInfo}
                />
            }
            {prop}
        </button>
    );
}

export default Button;
