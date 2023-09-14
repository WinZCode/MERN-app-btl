import React from 'react';
import productImg from '../../assets/images/product-detail/productImg.webp';
import productImgSmall1 from '../../assets/images/product-detail/productImgSmall1.webp';
import productImgSmall2 from '../../assets/images/product-detail/productImgSmall2.webp';
import productImgSmall3 from '../../assets/images/product-detail/productImgSmall3.webp';
import productImgSmall4 from '../../assets/images/product-detail/productImgSmall4.webp';
import productImgSmall5 from '../../assets/images/product-detail/productImgSmall5.webp';
import productColor1 from '../../assets/images/product-detail/product-color1.webp';
import productColor2 from '../../assets/images/product-detail/product-color2.webp';
import productColor3 from '../../assets/images/product-detail/product-color3.webp';
import productColor4 from '../../assets/images/product-detail/product-color4.webp';
import shippingInfo from '../../assets/images/icon/shippingInfo.png';
import shippingInfo2 from '../../assets/images/icon/shippingInfo2.png';

import {
    WrapperBrand,
    WrapperCol,
    WrapperColLeft,
    WrapperColMid,
    WrapperColRight,
    WrapperDiscount,
    WrapperImgBig,
    WrapperImgSmall,
    WrapperNameProduct,
    WrapperOfficial,
    WrapperOptionsHeader,
    WrapperOptionsColor,
    WrapperPrice,
    WrapperPriceDiscount,
    WrapperRating,
    WrapperReportText,
    WrapperRow,
    WrapperOption,
    WrapperOptionMemory,
    WrapperOptions,
    WrapperProduct,
    ButtonComponentCount,
    WrapperQuantity,
    WrapperInputNumber,
    ButtonComponentBuyNow,
    ButtonComponentAddToCart,
    ColMidStyle,
    WrapperShippingInfomation,
    WrapperShippingTime,
} from './style';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import official from '../../assets/images/card/official.png';
const ProductDetailComponent = () => {
    return (
        <div style={{ display: 'flex', gap: 24 }}>
            <WrapperColLeft>
                <WrapperImgBig src={productImg} alt="product" />
                <WrapperRow>
                    <WrapperCol span={4}>
                        <WrapperImgSmall src={productImgSmall1} alt="product" />
                    </WrapperCol>
                    <WrapperCol span={4}>
                        <WrapperImgSmall src={productImgSmall2} alt="product" />
                    </WrapperCol>
                    <WrapperCol span={4}>
                        <WrapperImgSmall src={productImgSmall3} alt="product" />
                    </WrapperCol>
                    <WrapperCol span={4}>
                        <WrapperImgSmall src={productImgSmall4} alt="product" />
                    </WrapperCol>
                    <WrapperCol span={4}>
                        <WrapperImgSmall src={productImgSmall5} alt="product" />
                    </WrapperCol>
                    <WrapperCol span={4}>
                        <WrapperImgSmall src={productImgSmall3} alt="product" />
                    </WrapperCol>
                </WrapperRow>
            </WrapperColLeft>
            <WrapperColMid>
                <ColMidStyle>
                    <WrapperOfficial>
                        <img src={official} alt="official" />
                        <WrapperBrand>
                            Brand: <a href="!#">Apple</a>
                        </WrapperBrand>
                    </WrapperOfficial>
                    <WrapperNameProduct>
                        Apple Iphone 14 Pro Max
                    </WrapperNameProduct>
                    <WrapperReportText>
                        <WrapperRating>
                            <span>5.0</span>
                            <div>
                                <StarFilled
                                    style={{
                                        fontSize: '12px',
                                        color: '#FDCC0D',
                                    }}
                                />
                                <StarFilled
                                    style={{
                                        fontSize: '12px',
                                        color: '#FDCC0D',
                                    }}
                                />
                                <StarFilled
                                    style={{
                                        fontSize: '12px',
                                        color: '#FDCC0D',
                                    }}
                                />
                                <StarFilled
                                    style={{
                                        fontSize: '12px',
                                        color: '#FDCC0D',
                                    }}
                                />
                                <StarFilled
                                    style={{
                                        fontSize: '12px',
                                        color: '#FDCC0D',
                                    }}
                                />
                            </div>
                            <span>(509)</span>
                        </WrapperRating>
                        <span>Solded 1000</span>
                    </WrapperReportText>
                    <WrapperPriceDiscount>
                        <WrapperPrice>25.000.000đ</WrapperPrice>
                        <WrapperDiscount>-24%</WrapperDiscount>
                    </WrapperPriceDiscount>
                    <WrapperOptions>
                        <WrapperOptionsHeader>Color</WrapperOptionsHeader>
                        <WrapperOptionsColor>
                            <WrapperOption>
                                <img src={productColor1} alt="silver" />
                                <span>Silver</span>
                            </WrapperOption>
                            <WrapperOption>
                                <img src={productColor2} alt="purple" />
                                <span>Purple</span>
                            </WrapperOption>
                            <WrapperOption>
                                <img src={productColor3} alt="gold" />
                                <span>Gold</span>
                            </WrapperOption>
                            <WrapperOption>
                                <img src={productColor4} alt="black" />
                                <span>Black</span>
                            </WrapperOption>
                        </WrapperOptionsColor>
                    </WrapperOptions>
                    <WrapperOptions>
                        <WrapperOptionsHeader>
                            Memory Storage
                        </WrapperOptionsHeader>
                        <div
                            style={{
                                display: 'flex',
                            }}
                        >
                            <WrapperOptionMemory>128GB</WrapperOptionMemory>
                            <WrapperOptionMemory>256GB</WrapperOptionMemory>
                        </div>
                    </WrapperOptions>
                </ColMidStyle>
                <ColMidStyle>
                    <div>
                        <WrapperOptionsHeader>
                            Shipping Infomation
                        </WrapperOptionsHeader>
                        <WrapperShippingInfomation>
                            <span>
                                Delivered Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội
                            </span>
                            <a href="!#">Change</a>
                        </WrapperShippingInfomation>
                    </div>
                    <WrapperShippingTime>
                        <div>
                            <img src={shippingInfo} alt="shipping" />
                            <span>Super fast delivery within 2h</span>
                        </div>
                        <div>
                            Before 12h today{' '}
                            <span className="green-text">Free</span>{' '}
                            <span className="line-through">25000đ</span>
                        </div>
                    </WrapperShippingTime>
                    <WrapperShippingTime>
                        <div>
                            <img src={shippingInfo2} alt="shipping" />
                            <span>Delivery tomorow afternoon</span>
                        </div>
                        <div>
                            14h - 18h, 14/09:{' '}
                            <span className="green-text">Free</span>{' '}
                            <span className="line-through">14000đ</span>
                        </div>
                    </WrapperShippingTime>
                </ColMidStyle>
            </WrapperColMid>
            <WrapperColRight>
                <WrapperProduct>
                    <img src={productColor1} alt="silver" />
                    <span>Silver, 128GB</span>
                </WrapperProduct>
                <div style={{ marginBottom: 20 }}>
                    <WrapperOptionsHeader>Quantity</WrapperOptionsHeader>
                    <WrapperQuantity>
                        <ButtonComponentCount
                            size="medium"
                            icon={<MinusOutlined />}
                        />
                        <WrapperInputNumber defaultValue={3} size="small" />
                        <ButtonComponentCount
                            size="medium"
                            icon={<PlusOutlined />}
                        />
                    </WrapperQuantity>
                </div>
                <div>
                    <WrapperOptionsHeader>Total Price</WrapperOptionsHeader>
                    <WrapperPrice>25.000.000đ</WrapperPrice>
                </div>
                <ButtonComponentBuyNow size="large" textBtn="Buy Now" />
                <ButtonComponentAddToCart size="large" textBtn="Add To Cart" />
            </WrapperColRight>
        </div>
    );
};

export default ProductDetailComponent;
