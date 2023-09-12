import React from 'react';
import { StyledInput } from './style';

const InputComponent = (props) => {
    const { size, placeholder, bordered, style, ...rests } = props;
    return (
        <StyledInput
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            style={style}
            {...rests}
        ></StyledInput>
    );
};

export default InputComponent;
