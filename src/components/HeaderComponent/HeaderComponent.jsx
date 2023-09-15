import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import {
    WrapperHeader,
    Img,
    WrapperAccount,
    WrapperTextHeader,
    WrapperCart,
    WrapperLink,
} from './style';
import { Badge, Col } from 'antd';
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
                        placeholder="Search here..."
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
                                <WrapperLink to="/sign-up">Sign Up</WrapperLink>
                                <span>/</span>
                                <WrapperLink to="/sign-in">Sign In</WrapperLink>
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
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined
                                style={{
                                    fontSize: '35px',
                                    marginRight: '4px',
                                    color: '#fff',
                                }}
                            />
                        </Badge>
                        <WrapperTextHeader>Cart</WrapperTextHeader>
                    </WrapperCart>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;
