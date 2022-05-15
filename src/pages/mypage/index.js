/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
    deleteApplyRole,
    fetchMyApply,
    getMyData,
    putMyData,
    resignMyData,
    applyRole,
} from '../../api';
import { modalVisibleState, userIdState } from '../../atoms';
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
const role = [
    {
        name: '관리자',
        id: 'admin',
    },
    {
        name: '임원',
        id: 'excutive',
    },
    {
        name: '회장',
        id: 'president',
    },
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
    const setUserState = useSetRecoilState(userIdState);
    const [roleData, setRoleData] = useState({ role: '관리자' });

    const [myData, setMyData] = useState({
        email: '',
        name: '',
        phoneNumber: '',
        role: '',
        studentNumber: '',
    });
    const [myApply, setMyApply] = useState({
        id: '',
        userId: '',
        name: '',
        registerRoleType: '',
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm();

    useEffect(() => {
        getMyData(setMyData, navigate);
    }, []);

    useEffect(() => {
        listName.map((data) => setValue(data.id, myData[data.id]));
        applyBtnUpdate();
    }, [myData]);

    const applyBtnUpdate = () => {
        fetchMyApply(myData.email, setMyApply);
    };

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

    const resignClick = () => {
        if (window.confirm('정말 탈퇴 하시겠습니까?')) {
            resignMyData(setError, setUserState, navigate);
        }
    };
    const selectRole = (e) => {
        setRoleData({ role: e.target.value });
        console.log(e.target.value);
    };
    const applyRoleClick = () => {
        const newData = {
            id: myData.id,
            role: roleData,
        };
        applyRole(newData, applyBtnUpdate);
    };
    const deleteApplyRoleClick = () => {
        deleteApplyRole(myApply.id, setMyApply);
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
                                    disabled={data.id === 'role' || data.id === 'email'}
                                />
                                <ErrorMsg>{errors[data.id]?.message}</ErrorMsg>
                            </InputList>
                        ))}
                        <div>
                            <UpdateBtn type='submit'>수정하기</UpdateBtn>
                            <UpdateBtn type='button' onClick={resignClick}>
                                회원탈퇴
                            </UpdateBtn>
                            {myApply.id ? (
                                <div>
                                    신청한 권한 : {myApply.registerRoleType}
                                    <UpdateBtn type='button' onClick={deleteApplyRoleClick}>
                                        신청 취소
                                    </UpdateBtn>
                                </div>
                            ) : (
                                <div>
                                    <select onChange={selectRole}>
                                        {role.map((option) => (
                                            <option key={option.id} value={option.name}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>

                                    <UpdateBtn type='button' onClick={applyRoleClick}>
                                        권한 신청
                                    </UpdateBtn>
                                </div>
                            )}
                        </div>
                    </Container>
                </form>
            </div>
        </PageStyled.Container>
    );
}

export default MyPage;
