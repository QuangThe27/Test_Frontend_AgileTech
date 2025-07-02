import classname from 'classnames/bind';
import styles from './CartEndorserComponent.module.scss';

const cx = classname.bind(styles);

function CartEndorserComponent({ imgSrc, name, link, desciption }) {
    return (
        <div className={cx('cart')}>
            <img src={imgSrc} alt="" />

            <div className={cx('info')}>
                <h5>{name}</h5>
                <span>{link}</span>
                <p>{desciption}</p>
            </div>
        </div>
    );
}

export default CartEndorserComponent;
