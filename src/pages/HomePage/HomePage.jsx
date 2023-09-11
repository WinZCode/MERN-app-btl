import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { Wrapper, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider/slider-1.webp';
import slider2 from '../../assets/images/slider/slider-2.webp';
import slider3 from '../../assets/images/slider/slider-3.webp';
import slider4 from '../../assets/images/slider/slider-4.webp';

const HomePage = () => {
    const productTypes = ['Television', 'Fridge', 'Laptop', 'Mobile Phone'];
    return (
        <div>
            <WrapperTypeProduct>
                {productTypes.map((type) => {
                    return <TypeProduct name={type} key={type} />;
                })}
            </WrapperTypeProduct>
            <Wrapper>
                <SliderComponent
                    arrImages={[slider1, slider2, slider3, slider4]}
                />
            </Wrapper>
        </div>
    );
};

export default HomePage;
