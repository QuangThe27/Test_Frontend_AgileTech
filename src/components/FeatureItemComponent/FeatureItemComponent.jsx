import classname from 'classnames/bind';
import styles from './FeatureItemComponent.module.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const cx = classname.bind(styles);

function FeatureItemComponent({ imgSrc, title, subTitle, colorBox, link }) {
    return (
        <div className={cx('box')}>
            <div className={cx('box-color')} style={{ background: colorBox }}></div>
            <div className={cx('box-content')}>
                <img src={imgSrc} alt="" />
                <div className={cx('section-content')}>
                    <h2>{title}</h2>
                    <p>{subTitle}</p>
                    <Link to={link}>
                        Learn more
                        <ArrowRightOutlined />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeatureItemComponent;
