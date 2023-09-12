import React from 'react';
import {
    StyleNameProduct,
    WrapperPriceText,
    WrapperReportText,
    WrapperDiscountText,
    WrapperRating,
    WrapperCardStyle,
    WrapperLoved,
} from './style';
import { StarFilled, HeartOutlined } from '@ant-design/icons';
import official from '../../assets/images/card/official.png';
import product1 from '../../assets/images/product/product-1.webp';

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            bodyStyle={{ padding: '0 10px 10px 10px' }}
            cover={<img alt="product" src={product1} />}
        >
            <img
                src={official}
                style={{
                    width: '72px',
                    height: '20px',
                }}
                alt="official"
            />
            <StyleNameProduct>Iphone 15 Pro Max</StyleNameProduct>
            <WrapperReportText>
                <WrapperRating>
                    <span>4.96</span>
                    <StarFilled
                        style={{
                            fontSize: '10px',
                            color: '#FDCC0D',
                            marginLeft: 2,
                        }}
                    />
                </WrapperRating>
                <span>Đã bán 1000+</span>
            </WrapperReportText>
            <WrapperPriceText>
                <span>15.000.000đ</span>
                <WrapperDiscountText>-24%</WrapperDiscountText>
            </WrapperPriceText>
            <WrapperLoved>
                <HeartOutlined
                    style={{
                        fontSize: '16px',
                        color: '#e01020',
                        marginRight: 2,
                    }}
                />
                <span>Yêu thích</span>
            </WrapperLoved>
        </WrapperCardStyle>
    );
};

export default CardComponent;
