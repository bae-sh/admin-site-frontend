import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Styled from './styled';

const inputList = [
    { name: 'ID', id: 'id' },
    { name: 'Password', id: 'password' },
];

function LoginContainer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onValid = (data) => {
        console.log(data);
    };
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
                            <Styled.Input type='text' {...register(item.id, { required: true })} />
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
