import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Styled from './styled';

const inputList = [
    { name: '이름', id: 'name' },
    { name: '학번', id: 'studentId' },
    { name: 'ID', id: 'id' },
    { name: 'Password', id: 'password' },
    { name: 'Password 확인', id: 'password2' },
];

function SignupContainer() {
    const { register, handleSubmit } = useForm();
    const onValid = (data) => {
        console.log(data);
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
                            <Styled.Input type='text' {...register(item.id, { required: true })} />
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
