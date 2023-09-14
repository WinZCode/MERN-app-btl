import React from 'react';
import logo from '../../assets/images/logo/evergreen-fox.png';
import { Wrapper, WrapperLeft, WrapperRight, WrapperSignUp } from './style';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';

const SignUpPage = () => {
    return (
        <Wrapper>
            <WrapperSignUp>
                <WrapperLeft>
                    <div>
                        <div className="sign-up__header">
                            <h1>Sign Up with email</h1>
                            <p>Enter email and password to create account</p>
                        </div>
                        <InputFormComponent />
                        <div>
                            <span className="create-account">
                                Already have one ? <a href="!#">Sign In</a>
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
            </WrapperSignUp>
        </Wrapper>
    );
};

export default SignUpPage;
