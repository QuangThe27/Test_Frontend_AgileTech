import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children, isShowHeader }) {
    return (
        <div className={cx('wrapper')}>
            {isShowHeader && <Header />}
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
