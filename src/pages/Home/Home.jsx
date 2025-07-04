import React, { useEffect } from 'react';
import classname from 'classnames/bind';
import styles from './Home.module.scss';
import { Col, Row } from 'antd';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import FeatureItemComponent from '../../components/FeatureItemComponent/FeatureItemComponent';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import CartEndorserComponent from '../../components/CartEndorserComponent/CartEndorserComponent';

const cx = classname.bind(styles);

function Home() {
    useEffect(() => {
        const sections = document.querySelectorAll(`.${cx('container')}`);

        //IntersectionObserver — API của trình duyệt giúp theo dõi xem một phần tử có đang nằm trong vùng hiển thị hay không.
        const observer = new IntersectionObserver(
            (entries) => {
                //entries là một array chứa thông tin từng phần tử được theo dõi.
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        //true thực hiện animation
                        entry.target.classList.add(cx('animate-fadeUp'));
                    } else {
                        entry.target.classList.remove(cx('animate-fadeUp'));
                    }
                });
            },
            { threshold: 0.2 }, //Khi 20% diện tích của phần tử lọt vào vùng hiển thị, thì isIntersecting mới là true
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'one', 'hidden-section')}>
                <div className={cx('content')}>
                    <h1>Save your data storage here.</h1>
                    <p>
                        Data Warehouse is a data storage area that has been tested for security, so you can store your
                        data here safely but not be afraid of being stolen by others.
                    </p>
                    <ButtonComponent
                        width="169px"
                        height="60px"
                        backgroundColor="#9c69e2"
                        border="none"
                        borderRadius="50px"
                        size="1.8rem"
                        weight="600"
                        textButton="Learn more"
                    />
                </div>
                <div className={cx('image')}>
                    <img
                        src="https://warehouse-blue.vercel.app/static/media/hero-img.d06ff33bd5f804baba29.png"
                        alt=""
                    />
                </div>
            </div>

            <div className={cx('container', 'two', 'hidden-section')}>
                <Row gutter={[23, 24]} align="middle">
                    <Col sm={24} xl={11} className={cx('col')}>
                        <img
                            src="https://warehouse-blue.vercel.app/static/media/about.1c3d05a0bef752a3afb9.png"
                            alt=""
                        />
                    </Col>
                    <Col sm={24} xl={13} className={cx('col')}>
                        <div>
                            <h2>We are a high-level data storage bank</h2>
                            <p>
                                The place to store various data that you can access at any time through the internet and
                                where you can carry it. This very flexible storage area has a high level of security. To
                                enter into your own data you must enter the password that you created when you
                                registered in this Data Warehouse
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={cx('container', 'three', 'hidden-section')}>
                <div className={cx('heading')}>
                    <h2>Features</h2>
                    <p>
                        Some of the features and advantages that we provide for those of you who store data in this Data
                        Warehouse.
                    </p>
                </div>
                <div className={cx('content')}>
                    <Row gutter={[30, 30]}>
                        <Col sm={24} xl={12}>
                            <FeatureItemComponent
                                link="#"
                                imgSrc="https://warehouse-blue.vercel.app/static/media/feature1.3bd68cd8e4cd29a40d80.png"
                                title="Search Data"
                                subTitle="Don't worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time."
                                colorBox="rgba(104, 201, 186, 1)"
                            />
                        </Col>
                        <Col sm={24} xl={12}>
                            <FeatureItemComponent
                                link="#"
                                imgSrc="https://warehouse-blue.vercel.app/static/media/feature2.aa8cfbcff7c4975f6f37.png"
                                title="24 Hours Access"
                                subTitle="Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.."
                                colorBox="rgba(156, 105, 226, 1)"
                            />
                        </Col>
                        <Col sm={24} xl={12}>
                            <FeatureItemComponent
                                link="#"
                                imgSrc="https://warehouse-blue.vercel.app/static/media/feature3.d41c5afe07c670d96f41.png"
                                title="Print Out"
                                subTitle="Print out service gives you convenience if someday you need print data, just edit it all and just print it."
                                colorBox="rgba(240, 99, 184, 1)"
                            />
                        </Col>
                        <Col sm={24} xl={12}>
                            <FeatureItemComponent
                                link="#"
                                imgSrc="https://warehouse-blue.vercel.app/static/media/feature4.821e83ecc96bd79a8e9a.png"
                                title="Security Code"
                                subTitle="Data Security is one of our best facilities. Allows for your filesto be safer. The file can be secured with a code or password that you created, so only you can open the file."
                                colorBox="rgba(45, 156, 219, 1)"
                            />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className={cx('container', 'four', 'hidden-section')}>
                <div className={cx('box')}>
                    <h2>Testimonials</h2>

                    <div className={cx('action')}>
                        <ArrowLeftOutlined className={cx('icon-direction')} />
                        <div className={cx('list-cart')}>
                            <CartEndorserComponent
                                imgSrc="https://media.istockphoto.com/id/1126791007/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-ngh%E1%BB%87-s%C4%A9-logo-ngh%E1%BB%81-nghi%E1%BB%87p-nh%C3%A2n-v%E1%BA%ADt-nam-m%E1%BB%99t-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-trong-trang-ph%E1%BB%A5c.jpg?s=612x612&w=is&k=20&c=ntXyo_mtPWAnAnH3OZ5ba6E0KqAkUQ9VklHyY8qJWxk="
                                name="John Fang"
                                link="wordfaang.com"
                                desciption=" Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
                            />
                        </div>
                        <ArrowRightOutlined className={cx('icon-direction')} />
                    </div>

                    <div className={cx('list-dots')}>
                        <div className={cx('dots', 'action')}></div>
                        <div className={cx('dots')}></div>
                        <div className={cx('dots')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
