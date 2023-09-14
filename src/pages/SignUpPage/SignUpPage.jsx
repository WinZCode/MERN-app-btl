import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import { Wrapper, WrapperLeft, WrapperRight, WrapperSignUp } from './style';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';

const SignUpPage = () => {
    return (
        <Wrapper>
            <WrapperSignUp>
                <WrapperLeft>
                    <h1>Hello,</h1>
                    <p>Sign In or Sign Up</p>
                    <InputFormComponent />
                </WrapperLeft>
                <WrapperRight>
                    <img src={logo} alt="logo" />
                    <h1>Mint Store</h1>
                    <h2>Deals every day</h2>
                </WrapperRight>
            </WrapperSignUp>
        </Wrapper>
    );
};

export default SignUpPage;
