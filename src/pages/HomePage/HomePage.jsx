import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';

const HomePage = () => {
    const productTypes = ['Television', 'Fridge', 'Laptop', 'Mobile Phone'];
    return (
        <WrapperTypeProduct>
            {productTypes.map((type) => {
                return <TypeProduct name={type} key={type} />;
            })}
        </WrapperTypeProduct>
    );
};

export default HomePage;
