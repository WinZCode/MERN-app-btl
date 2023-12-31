import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import {
    ButtonComponentLoad,
    // ButtonComponentLoad,
    Wrapper,
    WrapperButton,
    WrapperCards,
    WrapperTypeProduct,
} from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider/slider-1.webp';
import slider2 from '../../assets/images/slider/slider-2.webp';
import slider3 from '../../assets/images/slider/slider-3.webp';
import slider4 from '../../assets/images/slider/slider-4.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Row } from 'antd';

const HomePage = () => {
    const productTypes = ['Television', 'Fridge', 'Laptop', 'Mobile Phone'];
    return (
        <div>
            <WrapperTypeProduct>
                {productTypes.map((type) => {
                    return <TypeProduct name={type} key={type} />;
                })}
            </WrapperTypeProduct>
            <Wrapper style={{ height: 2000 }}>
                <SliderComponent
                    arrImages={[slider1, slider2, slider3, slider4]}
                />
                <WrapperCards span={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                        <Col span={4}>
                            <CardComponent />
                        </Col>
                    </Row>
                </WrapperCards>
                <WrapperButton>
                    <ButtonComponentLoad
                        size="large"
                        textBtn="Load More..."
                        style={{ borderRadius: 4, fontWeight: 500 }}
                    />
                </WrapperButton>
            </Wrapper>
        </div>
    );
};

export default HomePage;
