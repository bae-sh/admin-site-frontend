/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { getMyData } from '../../api';
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
        width: 80px;
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
function MyPage() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [myData, setMyData] = useState({
        email: '',
        name: '',
        phoneNumber: '',
        role: '',
        studentNumber: '',
    });

    useEffect(() => {
        getMyData(setMyData);
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const onChange = (e) => {
        console.log(e.target.value);
        setMyData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Container>
                    {listName.map((data) => (
                        <InputList>
                            <span>{data.name}</span>
                            <InputBox
                                type='text'
                                value={myData[data.id]}
                                onChange={onChange}
                                id={data.id}
                                key={data.id}
                                disabled={data.id === 'role'}
                            />
                        </InputList>
                    ))}
                    <UpdateBtn type='submit'>수정하기</UpdateBtn>
                </Container>
            </div>
        </PageStyled.Container>
    );
}

export default MyPage;
