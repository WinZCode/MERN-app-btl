import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { WrapperButtonInputSearch } from './style';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';

const ButtonInputSearch = (props) => {
    const {
        size,
        placeholder,
        textBtn,
        bordered,
        backgroundColorInput = '#fff',
        backgroundColorBtn = '#2b6777',
        colorBtn = '#fff',
        icon = <SearchOutlined />,
    } = props;

    return (
        <WrapperButtonInputSearch>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput }}
            />
            <ButtonComponent
                size={size}
                icon={icon}
                textBtn={textBtn}
                style={{ backgroundColor: backgroundColorBtn, color: colorBtn }}
            />
        </WrapperButtonInputSearch>
    );
};

export default ButtonInputSearch;
