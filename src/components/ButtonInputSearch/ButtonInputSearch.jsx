import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import { StyledButton, StyledInput, WrapperButtonInputSearch } from './style';
const ButtonInputSearch = (props) => {
    const { size, placeholder, textBtn } = props;
    return (
        <WrapperButtonInputSearch>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#fff',
                        borderRadius: 1,
                    },
                }}
            >
                <StyledInput size={size} placeholder={placeholder} />
                <StyledButton size={size} icon={<SearchOutlined />}>
                    {textBtn}
                </StyledButton>
            </ConfigProvider>
        </WrapperButtonInputSearch>
    );
};

export default ButtonInputSearch;
