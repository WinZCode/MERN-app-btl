import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Col } from 'antd';

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    height: 44px;
    padding: 0 120px;
    background: #fff;
    color: #2b6777;
    font-size: 13px;
    font-weight: 500;
`;

export const Wrapper = styled.div`
    padding: 0 120px;
`;

export const WrapperCards = styled(Col)`
    margin-top: 26px;
`;

export const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const ButtonComponentLoad = styled(ButtonComponent)`
    border: 1px solid #2b6777;
    color: #2b6777;
    width: 240px;
    height: 38px;
    &:hover {
        background: #2b6777;
        color: #fff !important;
    }
`;
