import React from 'react';
import { StyledButton } from './style';
import { ConfigProvider } from 'antd';

const ButtonComponent = (props) => {
    const { size, icon, textBtn, style, ...rests } = props;
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#fff',
                    borderRadius: 2,
                },
            }}
        >
            <StyledButton size={size} icon={icon} style={style} {...rests}>
                {textBtn}
            </StyledButton>
        </ConfigProvider>
    );
};

export default ButtonComponent;
