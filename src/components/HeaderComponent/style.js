import styled from 'styled-components';
import { Row } from 'antd';

export const WrapperHeader = styled(Row)`
    display: flex;
    align-items: center;
    padding: 0 120px;
    background: #52ab98;
`;

export const Img = styled.img`
    width: 50%;
    text-align: left;
    cursor: pointer;
`;

export const WrapperAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
`;

export const WrapperTextHeader = styled.span`
    font-size: 12px;
    color: #fff;
`;

export const WrapperCart = styled.div`
    color: #fff;
    font-size: 14px;
    margin-left: 30px;
    cursor: pointer;
`;