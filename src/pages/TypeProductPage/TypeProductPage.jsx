import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Pagination, Row } from 'antd';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider/slider-1.webp';
import slider2 from '../../assets/images/slider/slider-2.webp';
import slider3 from '../../assets/images/slider/slider-3.webp';
import slider4 from '../../assets/images/slider/slider-4.webp';
import { WrapperPagination } from './style';
const TypeProductPage = () => {
    return (
        <Row gutter={[16, 16]} style={{ padding: '20px 120px 0' }}>
            <Col span={4}>
                <NavbarComponent />
            </Col>
            <Col span={20}>
                <SliderComponent
                    arrImages={[slider1, slider2, slider3, slider4]}
                />
                <Row gutter={[16, 16]} style={{ marginTop: 26 }}>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>

                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                    <Col span={4.8}>
                        <CardComponent />
                    </Col>
                </Row>
                <WrapperPagination>
                    <Pagination defaultCurrent={2} total={100} />
                </WrapperPagination>
            </Col>
        </Row>
    );
};

export default TypeProductPage;
