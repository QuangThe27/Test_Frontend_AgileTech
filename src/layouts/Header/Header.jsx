import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    // State để quản lý trạng thái hiển thị của mobile-list
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Hàm để toggle (ẩn/hiện) mobile-list
    const handleToggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isLoggedIn = false;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAYAAAA9guKMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgB7ZhNbtpAFMf/b0ylfkgt7CvFOUFyhOzSdhNygkBCpdAVPQHOCZKsEkUg4ASw6scuvQE3gNBVV1BVbVQp9uubgUTko8XYow6K8lswxh77zZ83M/7zCAvCsNLOqh/Pthi8BuZVEHxzgdEFUV8Bnef19dZd9xIWgOHOhzzBa8iIszO6ihgKbopRcMz37c/7BNWOIUDjR+Cm3FOdPuk0E3owTBwgAUR08KK2/t4cwxHD7Y8FGUgDKWBEm7n6m44zEaOdTz1pfKSCRhz+WvbggEkWCkjPY9Cjb04WtgjYgD3W3OxOjFVYgggrbkRQ2rVwDd/5e8IGDyIWhQcRi0LmrpONSi8bnme2oMQWw2yHvrlA3AVTX7R3SkcvW1gQbtmOWnmQl0Z7mpm2WMQEScSI5WBY5Np0qpcH+9KILUYsWwxEzfq7r1U45kqEHoz8PBXMCTMHE/HOMCJOdgcFPRgkRIuvlXt5OMKIUAQLU8Jr6A0BDlA6C4AVL5O9+K0KcICSLNizxWy25P+OTCfyYQkitQIHiAi25u0BqxY7NvfEO7F+89pCbEmsbhZjMnWloIZ4geM8j/ksVkebMcFnikP+AksQZdpx+jHDWkyPqK0yT6OmHI+Qnn5sMxidN3XNCGmRaanrsqp4sCwPC4tIjQri9sw1N0dsIaYiCkyrP0pHyx3J8SESImthb15LrsuP4rmSxyTeu6yOX22xpeOlih4M5kXEvz1eCpCAXP1VRQ8GcyI12MNc7XVw+f3Wn6KT3V5BkacNoY9/Y6ahyWJKTFkTVJ1Zj2KpvVJY1FmcPv3XgvJEjPgq9qXb+K2u93e9PUZ06j25aI3Xkz3GNVq1Idn1Jc5UTOqKyNMo/NnS6+nmfX8AK8/tG1ht4o0AAAAASUVORK5CYII="
                    alt=""
                />
            </div>

            <div className={cx('header-actions')}>
                {/* Not Sign In */}
                <ButtonComponent
                    width="209px"
                    height="100%"
                    backgroundColor="#9c69e2"
                    border="none"
                    borderRadius="50px"
                    size="1.6rem"
                    weight="700"
                    textButton="Sign In"
                    link="login"
                />

                {/* Sign in */}
                {/* <ButtonComponent
                    width="209px"
                    height="100%"
                    backgroundColor="#9c69e2"
                    border="none"
                    borderRadius="50px"
                    size="1.6rem"
                    weight="700"
                    textButton="Profile"
                />
                <ButtonComponent
                    width="209px"
                    height="100%"
                    backgroundColor="#9c69e2"
                    border="none"
                    borderRadius="50px"
                    size="1.6rem"
                    weight="700"
                    textButton="Logout"
                /> */}
            </div>

            <div className={cx('mobile-menu-icon')} onClick={handleToggleMobileMenu}>
                <MenuOutlined style={{ fontSize: '24px', color: '#333' }} />
            </div>

            <div className={cx('mobile-list', { 'is-open': isMobileMenuOpen })}>
                {!isLoggedIn ? (
                    <ul>
                        <li>
                            <Link to="login" onClick={handleToggleMobileMenu}>
                                Sign In
                            </Link>{' '}
                            {/* Thêm link và đóng menu */}
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link to="/profile" onClick={handleToggleMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout" onClick={handleToggleMobileMenu}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Header;
