import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { Wrapper, WrapperCard, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider/slider-1.webp';
import slider2 from '../../assets/images/slider/slider-2.webp';
import slider3 from '../../assets/images/slider/slider-3.webp';
import slider4 from '../../assets/images/slider/slider-4.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

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
                <WrapperCard>
                    <CardComponent />
                </WrapperCard>
                <NavbarComponent />
            </Wrapper>
        </div>
    );
};

export default HomePage;
