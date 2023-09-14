import React from 'react';
import logo from '../../assets/images/logo/evergreen-fox.png';
import { Wrapper, WrapperLeft, WrapperRight, WrapperSignIn } from './style';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';

const SignInPage = () => {
    return (
        <Wrapper>
            <WrapperSignIn>
                <WrapperLeft>
                    <div>
                        <div className="sign-up__header">
                            <h1>Sign in with email</h1>
                            <p>Enter email and password Mint account</p>
                        </div>
                        <InputFormComponent />
                        <div>
                            <span className="forget">
                                <a href="!#">Forgot Password?</a>
                            </span>
                            <span className="create-account">
                                Don't have account?{' '}
                                <a href="!#">Create account</a>
                            </span>
                        </div>
                    </div>
                </WrapperLeft>
                <WrapperRight>
                    <div className="img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <h2>MINT STORE</h2>
                        <h3>DEALS EVERYDAY</h3>
                    </div>
                </WrapperRight>
            </WrapperSignIn>
        </Wrapper>
    );
};

export default SignInPage;
