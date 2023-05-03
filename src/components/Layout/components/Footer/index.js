import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('social-links')}>
                    <Link
                        className={cx('social-link')}
                        to="https://www.facebook.com/whoimme/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faFacebook}
                        />
                    </Link>
                    <Link
                        className={cx('social-link')}
                        to="https://www.instagram.com/im_peshin/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faInstagram}
                        />
                    </Link>
                    <Link
                        className={cx('social-link')}
                        to="https://twitter.com/home"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faTwitter}
                        />
                    </Link>
                    <Link
                        className={cx('social-link')}
                        to="https://www.youtube.com/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faYoutube}
                        />
                    </Link>
                </div>
                <ul className={cx('footer-links')}>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Audio Description</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Help Center</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Gift Cards</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Media Center</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Investor Relations</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Jobs</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Terms of Use</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Privacy</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Legal Notices</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Cookie Preferences</Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>
                            Corporate Information
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link className={cx('link')}>Contact Us</Link>
                    </li>
                </ul>
                <div className={cx('button-footer')}>
                    <button className={cx('button')}>Service Code</button>
                </div>
                <span className={cx('inc')}>© 1997-2023 Netflix, Inc.</span>
            </div>
        </div>
    );
}

export default Footer;
