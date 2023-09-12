import React from 'react';
import {
    WrapperContent,
    WrapperLabelText,
    WrapperNavbar,
    WrapperPrice,
    WrapperRateText,
    WrapperTextValue,
} from './style';
import { Checkbox, Rate } from 'antd';
const NavbarComponent = () => {
    const onchange = () => {};
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>;
                });
            case 'checkbox':
                return (
                    <Checkbox.Group
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                        }}
                        onChange={onchange}
                    >
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>
                                    {option.label}
                                </Checkbox>
                            );
                        })}
                    </Checkbox.Group>
                );
            case 'rating':
                return options.map((option) => {
                    return (
                        <div>
                            <Rate
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    marginRight: 8,
                                }}
                                disabled
                                defaultValue={option}
                            />
                            <WrapperRateText>
                                from {option} stars
                            </WrapperRateText>
                        </div>
                    );
                });
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperPrice>
                            <div>{option}</div>
                        </WrapperPrice>
                    );
                });
            default:
                return {};
        }
    };
    return (
        <WrapperNavbar>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', [
                    'Fridge',
                    'Television',
                    'Laptop',
                    'Mobile Phone',
                ])}
            </WrapperContent>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' },
                    { value: 'c', label: 'C' },
                ])}
            </WrapperContent>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('rating', [3, 4, 5])}
            </WrapperContent>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('price', ['under 30', 'under 40', 'under 50'])}
            </WrapperContent>
        </WrapperNavbar>
    );
};

export default NavbarComponent;
