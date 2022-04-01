import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Styled from './styled';

const inputList = [
    {
        name: '이름',
        id: 'name',
        placeholder: '이름을 입력하세요',
        errorMsg: '이름을 입력하세요.',
    },
    {
        name: '학번',
        id: 'studentId',
        placeholder: '학번을 입력하세요',
        errorMsg: '학번을 입력하세요.',
    },
    {
        name: 'ID',
        id: 'id',
        placeholder: 'ID를 입력하세요',
        errorMsg: 'ID를 입력하세요.',
    },
    {
        name: 'Password',
        id: 'password',
        placeholder: 'Password를 입력하세요',
        errorMsg: 'Password를 입력하세요',
    },
    {
        name: 'Password 확인',
        id: 'password2',
        placeholder: 'Password 다시 입력하세요',
        errorMsg: 'Password 다시 입력하세요',
    },
];

function SignupContainer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const onValid = (data) => {
        if (data.password !== data.password2) {
            setError('password2', { message: '비밀번호가 일치하지 않습니다.' });
        } else {
            console.log('post 부분');
        }
    };
    return (
        <Styled.Container>
            <form onSubmit={handleSubmit(onValid)}>
                <Styled.Box>
                    <div>Welcome !</div>
                    <div>회원가입</div>
                    {inputList.map((item) => (
                        <div className='inputDiv' key={item.id}>
                            <span>{item.name}</span>
                            <br />
                            <Styled.Input
                                type='text'
                                {...register(item.id, { required: item.errorMsg })}
                                placeholder={item.placeholder}
                            />
                            <Styled.ErrorMsg>{errors[item.id]?.message}</Styled.ErrorMsg>
                        </div>
                    ))}
                    <div id='loginBtnDiv'>
                        <Styled.LoginBtn type='submit'>회원가입</Styled.LoginBtn>
                    </div>
                    <div id='signupDiv'>
                        <span>이미 계정이 있다면 ?</span>
                        <Link to='/login'>
                            <span>로그인</span>
                        </Link>
                    </div>
                </Styled.Box>
            </form>

            <Styled.Logo>ADMIN</Styled.Logo>
        </Styled.Container>
    );
}

export default SignupContainer;
