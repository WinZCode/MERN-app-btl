import styled from 'styled-components';
import { Button, Input } from 'antd';

export const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2b6777;
    border: none;
    color: #fff;
    &:hover {
        opacity: 0.9;
        color: #fff;
    }
`;

export const StyledInput = styled(Input)`
    border-radius: 0;
`;

export const WrapperButtonInputSearch = styled.div`
    display: flex;
`;
