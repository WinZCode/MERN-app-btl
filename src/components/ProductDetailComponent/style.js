import { Col, InputNumber, Row } from 'antd';
import styled from 'styled-components';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

export const WrapperColLeft = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    width: 28.7%;
    height: 100%;
    position: sticky;
    top: 10px;
`;

export const WrapperColMid = styled.div`
    width: 42%;
    height: 100%;
`;

export const ColMidStyle = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const WrapperColRight = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    width: 25.8%;
    height: 100%;
    position: sticky;
    top: 10px;
`;

export const WrapperImgBig = styled.img`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
`;

export const WrapperImgSmall = styled.img`
    height: 44px;
    width: 44px;
    border: 1px solid #ddd;
    border-radius: 8px;
`;

export const WrapperRow = styled(Row)`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
`;

export const WrapperCol = styled(Col)`
    display: flex;
    flex-basis: unset;
`;

export const WrapperOfficial = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 72px;
        height: 20px;
    }
`;

export const WrapperBrand = styled.div`
    margin: 0 8px;
    color: #242424;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    a {
        text-decoration: none;
    }
`;

export const WrapperNameProduct = styled.h1`
    margin: 6px 0;
    color: #27272a;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
`;

export const WrapperReportText = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #787878;
    padding: 4px 0;
`;

export const WrapperRating = styled.div`
    & {
        display: flex;
        align-items: center;
    }

    &: after {
        content: '';
        position: relative;
        height: 14px;
        width: 1px;
        background: #ccc;
        display: inline-block;
        margin: 0 8px;
    }

    span {
        color: #000;
        font-size: 14px;
        font-weight: 500;
    }

    div {
        margin: 0 8px;
    }
`;

export const WrapperPrice = styled.span`
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
    margin-right: 6px;
`;

export const WrapperDiscount = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    padding: 0px 4px;
    background: rgb(245, 245, 250);
    border-radius: 8px;
    color: rgb(39, 39, 42);
`;

export const WrapperPriceDiscount = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`;

export const WrapperOptions = styled.div`
    margin-top: 20px;
`;

export const WrapperOptionsColor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10;
`;

export const WrapperOptionsHeader = styled.div`
    color: rgb(39, 39, 42);
    font-size: 14px;
    font-weight: 600;
    margin: 0px;
    padding-right: 20px;
    margin-bottom: 10px;
`;

export const WrapperOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-right: 12px;
    width: 96px;
    font-size: 14px;
    font-weight: 500;

    img {
        height: 42px;
        width: 42px;
        margin-right: 4px;
    }
`;

export const WrapperOptionMemory = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-right: 12px;
    width: 60px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 500;
`;

export const WrapperProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    margin-right: 12px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
    img {
        width: 40px;
        height: 40px;
        margin-right: 4px;
    }
`;

export const ButtonComponentCount = styled(ButtonComponent)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #2b6777;
    color: #2b6777;
    &:hover {
        background: #2b6777;
        color: #fff;
    }
`;

export const WrapperQuantity = styled.div`
    display: flex;
    align-items: center;
`;

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        margin: 0 4px;
        border-color: #2b6777;
        border-radius: 2px;
    }
    &.ant-input-number-handle-wrap {
        display: none;
    }
`;

export const ButtonComponentBuyNow = styled(ButtonComponent)`
    width: 100%;
    background: #e01020;
    color: #fff;
    margin-top: 10px;
    &:hover {
        opacity: 0.8;
        background: #e01020;
    }
`;

export const ButtonComponentAddToCart = styled(ButtonComponent)`
    width: 100%;
    background: #fff;
    border: 1px solid #2b6777;
    color: #2b6777;
    margin-top: 10px;
    &: hover {
        color: #fff;
        background: #2b6777;
    }
`;

export const WrapperShippingInfomation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    span {
        color: rgb(39, 39, 42);
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        width: 100%;
    }
    a {
        text-decoration: none;
    }
    padding-bottom: 12px;
    border-bottom: 1px solid #ddd;
`;

export const WrapperShippingTime = styled.div`
    margin-top: 16px;
    font-size: 14px;
    line-height: 150%;
    img {
        width: 36px;
        height: 12px;
        margin-right: 6px;
    }

    .line-through {
        text-decoration: line-through;
        color: #898989;
    }

    .green-text {
        color: #00ab56;
    }
`;
