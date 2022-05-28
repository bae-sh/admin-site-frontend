/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getMyData, putMyData, resignMyData, applyRole, changeImage } from '../../api';
import { modalVisibleState, userIdState } from '../../atoms';
import * as PageStyled from '../pageStyled';
import Title from '../../components/layout/title';
import profileImg from '../../images/profile.png';

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
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    align-items: center;
`;
const InputList = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
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
const RoleBtn = styled.span`
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid lightgray;
    padding: 5px 10px 5px 10px;
    margin-bottom: 30px;
    border-radius: 5px;
    background: black;
    color: white;
    &:hover {
        opacity: 0.7;
    }
`;

const UpdateBtn = styled.button`
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    border: 1px solid lightgray;
    padding: 10px 80px 10px 80px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: white;
    &:hover {
        background: #eee;
    }
`;

const AdminBtn = styled.div`
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    border: 1px solid lightgray;
    padding: 10px 60px 10px 60px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: white;
    &:hover {
        background: #eee;
    }
`;

const ResignBtn = styled.div`
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color: #dd2828;
    border: 1px solid #dd2828;
    padding: 10px 80px 10px 80px;
    margin-bottom: 20px;
    border-radius: 5px;
    &:hover {
        background: #eee;
    }
`;
export const ErrorMsg = styled.span`
    color: red;
    margin: 15px;
    font-size: 14px;
`;

const Avata = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 30px;
    margin-top: 90px;
    &:hover {
        opacity: 0.6;
    }
`;

const RoleUpgrade = styled.div`
    text-align: right;
    width: 230px;
    margin-top: -10px;
    margin-bottom: 40px;
    select {
        height: 28px;
        padding: 5px;
        border-radius: 5px;
        margin-right: 10px;
    }
`;
const RoleUpgradeText = styled.div`
    font-size: 14px;
    display: box;
    font-weight: 400;
    margin-bottom: 10px;
    cursor: pointer;
`;

const RoleUpgradeMenu = styled.div`
    display: ${(props) => (props.toggle ? 'block' : 'none')};
    margin-bottom: 20px;
`;

const PhotoSelect = styled.input`
    display: none;
`;
function MyPage() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const navigate = useNavigate();
    const setUserState = useSetRecoilState(userIdState);
    const [roleData, setRoleData] = useState({ role: '관리자' });
    const [myImg, setMyImg] = useState(profileImg);
    const [imgData, setImgData] = useState();
    const [roleToggle, setRoleToggle] = useState(false);
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
    const uploadPhotoRef = useRef();

    useEffect(() => {
        getMyData(setMyData, navigate);
    }, []);

    useEffect(() => {
        listName.map((data) => setValue(data.id, myData[data.id]));
        setMyImg(myData.profileImage ? myData.profileImage.fileUrl : profileImg);
    }, [myData]);

    const onValid = (data) => {
        const newData = data;
        delete newData.role;
        putMyData(newData, setError);
        if (imgData) changeImage(imgData);
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
        if (window.confirm('역할 등업 신청을 하시겠습니까?')) {
            applyRole(newData, myData.id);
        }
    };

    const onPhotoClick = () => {
        uploadPhotoRef.current.click();
    };
    const onImgChange = async (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        console.log(e.target.files[0]);
        setImgData(formData);

        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setMyImg(result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    const onToggle = () => {
        setRoleToggle(!roleToggle);
    };

    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='⚙️ 프로필 수정' description='' />
                <form onSubmit={handleSubmit(onValid)}>
                    <Container>
                        <PhotoSelect
                            type='file'
                            accept='image/*'
                            ref={uploadPhotoRef}
                            name='photo'
                            onChange={onImgChange}
                        />
                        <Avata src={myImg} onClick={onPhotoClick} />
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
                        <RoleUpgrade toggle={roleToggle}>
                            <RoleUpgradeText onClick={onToggle}>
                                역할 등업 신청{' '}
                                {roleToggle ? <VscTriangleUp /> : <VscTriangleDown />}
                            </RoleUpgradeText>
                            <RoleUpgradeMenu toggle={roleToggle}>
                                <select onChange={selectRole}>
                                    {role.map((option) => (
                                        <option key={option.id} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                <RoleBtn type='button' onClick={applyRoleClick}>
                                    등업 신청
                                </RoleBtn>
                            </RoleUpgradeMenu>
                        </RoleUpgrade>
                        <div>
                            <UpdateBtn type='submit'>수정하기</UpdateBtn>
                            {myData.role === '관리자' && (
                                <Link to='/admin'>
                                    <AdminBtn>관리자 페이지</AdminBtn>
                                </Link>
                            )}
                            <ResignBtn type='button' onClick={resignClick}>
                                회원탈퇴
                            </ResignBtn>
                        </div>
                    </Container>
                </form>
            </div>
        </PageStyled.Container>
    );
}

export default MyPage;
