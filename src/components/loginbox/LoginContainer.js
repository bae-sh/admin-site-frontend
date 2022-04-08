import { Link, useNavigate } from 'react-router-dom';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userIdState } from '../../atoms';
import * as Styled from './styled';
import { url } from '../../url';

const inputList = [
    {
        name: 'ID',
        id: 'userId',
        placeholder: 'ID를 입력하세요',
        errorMsg: 'ID를 입력하세요',
    },
    {
        name: 'Password',
        id: 'password',
        placeholder: 'Password를 입력하세요',
        errorMsg: 'Password를 입력하세요',
    },
];

function LoginContainer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const navigate = useNavigate();
    const setUserState = useSetRecoilState(userIdState);
    const onValid = async (data) => {
        await axios({
            method: 'post',
            url: `${url}/login`,
            data,
        })
            .then((response) => {
                navigate('/');
                const newData = { ...response.data.data, expire: Date.now() + 600000 };
                console.log(newData);
                setUserState(newData);
                localStorage.setItem('user', JSON.stringify(newData));
            })
            .catch((error) => {
                setError('password', { message: error.response.data.message });
            });
    };
    const [visible, setVisible] = useState(false);
    return (
        <Styled.Container>
            <form onSubmit={handleSubmit(onValid)}>
                <Styled.Box>
                    <div>Welcome !</div>
                    <div>로그인</div>
                    {inputList.map((item) => (
                        <div className='inputDiv' key={item.id}>
                            <span>{item.name}</span>
                            <br />
                            <Styled.Input
                                type={!visible && item.name === 'Password' ? 'password' : 'text'}
                                visible={visible}
                                {...register(item.id, { required: item.errorMsg })}
                                placeholder={item.placeholder}
                            />
                            {item.name === 'Password' && (
                                <Styled.EyeIcon onClick={() => setVisible((prev) => !prev)}>
                                    {visible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                </Styled.EyeIcon>
                            )}
                            <Styled.ErrorMsg>{errors[item.id]?.message}</Styled.ErrorMsg>
                        </div>
                    ))}

                    <div id='rememberDiv'>
                        <input type='checkbox' />
                        <span>계정 기억하기</span>
                    </div>
                    <div id='loginBtnDiv'>
                        <Styled.LoginBtn type='submit'>로그인</Styled.LoginBtn>
                    </div>
                    <div id='signupDiv'>
                        <span>회원이 아니라면 ?</span>
                        <Link to='/signup'>
                            <span>회원가입</span>
                        </Link>
                    </div>
                </Styled.Box>
            </form>

            <Styled.Logo>ADMIN</Styled.Logo>
        </Styled.Container>
    );
}

export default LoginContainer;
