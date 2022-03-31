import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: 600;
    @media screen and (max-width: 1023px) {
        font-size: 90px;
        margin-bottom: 20px;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    width: 90%;
    margin: auto;
    padding: 35px 40px;
    border-radius: 10px;
    @media screen and (max-width: 1023px) {
        width: 70%;
    }
    @media screen and (max-width: 767px) {
        width: 90%;
    }
    div:nth-child(1) {
        font-size: 24px;
        font-weight: 400;
    }
    div:nth-child(2) {
        font-size: 30px;
        font-weight: 500;
        margin-top: 35px;
    }
    div:nth-child(3),
    div:nth-child(4) {
        font-size: 15px;
        font-weight: 400;
        margin-top: 30px;
    }
    div:nth-child(5) {
        display: flex;
        align-items: center;
        margin-top: 20px;
        font-size: 15px;
        font-weight: 400;

        input[type='checkbox'] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: 1px solid black;
            border-radius: 4px;
            cursor: pointer;
            height: 16px;
            width: 16px;
        }
        input[type='checkbox']::after {
            border: solid #fff;
            border-width: 0 2px 2px 0;
            content: '';
            display: none;
            height: 40%;
            left: 40%;
            position: relative;
            top: 20%;
            transform: rotate(45deg);
            width: 15%;
        }
        input[type='checkbox']:checked {
            background: black;
        }
        input[type='checkbox']:checked::after {
            display: block;
        }
        span {
            margin-left: 8px;
        }
    }
    div:nth-child(6) {
        margin-top: 30px;
    }
    div:nth-child(7) {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        a {
            margin-left: 5px;
            font-weight: 400;
        }
    }
`;

const Input = styled.input`
    margin-top: 5px;
    height: 40px;
    width: 100%;
`;

const LoginBtn = styled.button`
    height: 45px;
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;
function Login() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Styled.Container>
                    <Box>
                        <div>Welcome !</div>
                        <div>로그인</div>
                        <div>
                            <span>ID</span>
                            <br />
                            <Input type='text' id='id' />
                        </div>
                        <div>
                            <span>Password</span>
                            <br />
                            <Input type='text' id='password' />
                        </div>
                        <div>
                            <input type='checkbox' />
                            <span>계정 기억하기</span>
                        </div>
                        <div>
                            <LoginBtn type='button'>로그인</LoginBtn>
                        </div>
                        <div>
                            <span>회원이 아니라면 ?</span>
                            <Link to='/signup'>
                                <span>회원가입</span>
                            </Link>
                        </div>
                    </Box>
                    <Logo>ADMIN</Logo>
                </Styled.Container>
            </div>
        </PageStyled.Container>
    );
}

export default Login;
