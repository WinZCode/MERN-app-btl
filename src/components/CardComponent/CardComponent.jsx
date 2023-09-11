import React from 'react';
import {
    StyleNameProduct,
    WrapperPriceText,
    WrapperReportText,
    WrapperDiscountText,
    WrapperRating,
    WrapperCardStyle,
} from './style';
import { StarFilled } from '@ant-design/icons';
import official from '../../assets/images/card/official.png';

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            bodyStyle={{ padding: 10 }}
            cover={
                <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
            }
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
        </WrapperCardStyle>
    );
};

export default CardComponent;
