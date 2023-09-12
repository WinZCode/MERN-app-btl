import { Card } from 'antd';
import styled from 'styled-components';

export const WrapperCardStyle = styled(Card)`
    position: relative;
    width: 20%;
    & img {
        height: 200px;
        width: 100%;
        object-fit: contain;
        margin: 0 auto;
        padding-top: 20px;
    }
`;

export const StyleNameProduct = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: #38383d;
`;

export const WrapperReportText = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #787889;
    margin: 10px 0 4px 0;
`;

export const WrapperPriceText = styled.div`
    color: #ff424e;
    font-size: 16px;
    font-weight: 500;
`;

export const WrapperDiscountText = styled.span`
    color: #ff424e;
    font-size: 12px;
    font-weight: 500;
    margin-left: 8px;
`;

export const WrapperRating = styled.span`
    & {
        display: flex;
        align-items: center;
    }

    &: after {
        content: '';
        position: relative;
        height: 10px;
        width: 1px;
        background: #ccc;
        display: inline-block;
        margin: 0 8px;
    }
`;

export const WrapperLoved = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
`;
