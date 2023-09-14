import React from 'react';
import { Wrapper, WrapperDetail } from './style';
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent';

const ProductDetailPage = () => {
    return (
        <Wrapper>
            <p>BreadCrum</p>
            <WrapperDetail>
                <ProductDetailComponent />
            </WrapperDetail>
        </Wrapper>
    );
};

export default ProductDetailPage;
