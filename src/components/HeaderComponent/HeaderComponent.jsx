import React from 'react';
import { Col } from 'antd';
import {
    WrapperHeader,
    Img,
    WrapperAccount,
    WrapperTextHeader,
    WrapperCart,
} from './style';
import logo from '../../images/logo/logo.png';
import { Input } from 'antd';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
const { Search } = Input;

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <Img src={logo} alt="logo" />
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        // onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display: 'flex' }}>
                    <WrapperAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeader>
                                Đăng kí / Đăng nhập
                            </WrapperTextHeader>
                            <div>
                                <WrapperTextHeader>Tài khoản</WrapperTextHeader>
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
                        <WrapperTextHeader>Giỏ hàng</WrapperTextHeader>
                    </WrapperCart>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;
