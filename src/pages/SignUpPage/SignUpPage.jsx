import React from 'react';
import logo from '../../assets/images/logo/evergreen-fox.png';
import { Wrapper, WrapperLeft, WrapperRight, WrapperSignUp } from './style';
import InputFormComponentSignUp from '../../components/InputFormComponentSignUp/InputFormComponentSignUp';
import { Link } from 'react-router-dom';

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
                        <InputFormComponentSignUp />
                        <div>
                            <span className="create-account">
                                Already have one ?{' '}
                                <Link to="/sign-in">Sign In</Link>
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
