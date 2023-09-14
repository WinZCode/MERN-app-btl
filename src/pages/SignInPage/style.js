import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const WrapperSignIn = styled.div`
    display: flex;
    width: 800px;
    height: 446px;
    background: #fff;
    border-radius: 20px;
`;

export const WrapperLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62.5%;
    .sign-up__header {
        margin: 20px 0px;
        color: rgb(36, 36, 36);
    }

    .sign-up__header h1 {
        margin: 0px 0px 10px;
        font-size: 24px;
        font-weight: 500;
    }

    .sign-up__header p {
        margin: 0px;
        font-size: 15px;
        line-height: 20px;
    }

    .forget {
        color: rgb(13, 92, 182);
        font-size: 13px;
        margin: 0px 0px 0px;
        cursor: pointer;
        display: inline-block;
    }

    .create-account {
        color: rgb(120, 120, 120);
        font-size: 13px;
        margin: 10px 0px 0px;
        display: block;
    }

    a {
        text-decoration: none;
    }
`;

export const WrapperRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 37.5%;
    background: #2b6777;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;

    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 240px;
        width: 240px;
        border-radius: 50%;
        background: #fff;
    }

    img {
        height: 180px;
    }

    h2 {
        margin: 20px 0px 5px;
        color: #fff;
        font-size: 17px;
        font-weight: 500;
    }

    h3 {
        font-size: 13px;
        color: #fff;
        font-weight: 500;
    }
`;
