import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import {
    WrapperHeader,
    Img,
    WrapperAccount,
    WrapperTextHeader,
    WrapperCart,
} from './style';
import { Col } from 'antd';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <Img src={logo} alt="logo" />
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size="large"
                        placeholder="Search..."
                        textBtn="Search"
                    />
                </Col>
                <Col
                    span={6}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <WrapperAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeader>
                                Sign Up / Sign In
                            </WrapperTextHeader>
                            <div>
                                <WrapperTextHeader>Account</WrapperTextHeader>
                                <CaretDownOutlined
                                    style={{
                                        fontSize: '10px',
                                        marginLeft: '4px',
                                    }}
                                />
                            </div>
                        </div>
                    </WrapperAccount>
                    <WrapperCart>
                        <ShoppingCartOutlined
                            style={{ fontSize: '35px', marginRight: '4px' }}
                        />
                        <WrapperTextHeader>Cart</WrapperTextHeader>
                    </WrapperCart>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;
