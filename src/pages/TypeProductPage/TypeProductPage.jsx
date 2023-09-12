import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Row } from 'antd';

const TypeProductPage = () => {
    return (
        <Row gutter={[16, 16]} style={{ padding: '20px 120px 0' }}>
            <Col span={4}>
                <NavbarComponent />
            </Col>
            <Col span={20}>
                <Row gutter={[16, 16]}>
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
            </Col>
        </Row>
    );
};

export default TypeProductPage;
