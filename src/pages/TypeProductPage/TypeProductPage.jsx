import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Row } from 'antd';
const TypeProductPage = () => {
    return (
        <Row style={{ padding: '20px 120px 0' }}>
            <Col span={4}>
                <NavbarComponent />
            </Col>
            <Col span={20}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </Col>
        </Row>
    );
};

export default TypeProductPage;
