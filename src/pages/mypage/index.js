/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getMyData, putMyData } from '../../api';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';

const listName = [
    {
        name: 'Email',
        id: 'email',
        errorMsg: 'Email를 입력하세요.',
    },
    {
        name: '이름',
        id: 'name',
        errorMsg: '이름을 입력하세요.',
    },
    {
        name: '학번',
        id: 'studentNumber',
        errorMsg: '학번을 입력하세요.',
    },
    {
        name: '휴대폰',
        id: 'phoneNumber',
        errorMsg: '휴대폰 번호를 입력하세요.',
    },
    { name: '역할', id: 'role' },
];
export const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    align-items: center;
`;
const InputList = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
    span {
        display: block;
        margin-bottom: 4px;
    }
`;
const InputBox = styled.input`
    font-size: 20px;
    background-color: #f6f8fa;
    border: 1px solid #d0d6df;
    border-radius: 4px;
    padding: 4px 12px;
    :focus {
        background-color: white;
    }
    :disabled {
        border: none;
        color: black;
    }
`;

const UpdateBtn = styled.button`
    font-size: 24px;
`;
export const ErrorMsg = styled.span`
    color: red;
    margin: 15px;
    font-size: 14px;
`;
function MyPage() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const navigate = useNavigate();
    const [myData, setMyData] = useState({
        email: '',
        name: '',
        phoneNumber: '',
        role: '',
        studentNumber: '',
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm();

    useEffect(() => {
        getMyData(setMyData);
    }, []);

    useEffect(() => {
        listName.map((data) => setValue(data.id, myData[data.id]));
    }, [myData]);

    const onValid = (data) => {
        const newData = data;
        delete newData.role;
        putMyData(newData, setError);
    };
    const onChange = (e) => {
        setMyData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };
    const logoutClick = () => {
        localStorage.clear();
        alert('로그아웃 되었습니다.');
        navigate('/');
    };
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <form onSubmit={handleSubmit(onValid)}>
                    <Container>
                        {listName.map((data) => (
                            <InputList key={data.id}>
                                <span>{data.name}</span>
                                <InputBox
                                    type='text'
                                    {...register(data.id, { required: data.errorMsg })}
                                    value={myData[data.id]}
                                    onChange={onChange}
                                    id={data.id}
                                    disabled={data.id === 'role'}
                                />
                                <ErrorMsg>{errors[data.id]?.message}</ErrorMsg>
                            </InputList>
                        ))}
                        <div>
                            <UpdateBtn type='submit'>수정하기</UpdateBtn>
                            <UpdateBtn type='submit'>회원탈퇴</UpdateBtn>
                            <UpdateBtn type='button' onClick={logoutClick}>
                                로그아웃
                            </UpdateBtn>
                        </div>
                    </Container>
                </form>
            </div>
        </PageStyled.Container>
    );
}

export default MyPage;
