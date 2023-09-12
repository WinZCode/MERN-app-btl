import styled from 'styled-components';
import { Button } from 'antd';
export const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    &:hover {
        opacity: 0.9;
        background: #c8d8e4;
    }
`;
