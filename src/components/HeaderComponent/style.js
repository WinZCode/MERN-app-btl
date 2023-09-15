import styled from 'styled-components';
import { Row } from 'antd';
import { Link } from 'react-router-dom';

export const WrapperHeader = styled(Row)`
    display: flex;
    align-items: center;
    padding: 0 120px;
    background: #52ab98;
    flex-wrap: nowrap;
`;

export const Img = styled.img`
    width: 50%;
    text-align: left;
    cursor: pointer;
`;

export const WrapperTextHeader = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`;

export const WrapperAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
    font-weight: 500;
`;

export const WrapperCart = styled.div`
    font-size: 14px;
    margin-left: 30px;
    cursor: pointer;
    font-weight: 500;
`;

export const WrapperLink = styled(Link)`
    color: #fff;
`;
