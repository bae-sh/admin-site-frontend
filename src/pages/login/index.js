import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';
import LoginContainer from '../../components/loginbox/LoginContainer';

function Login() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <LoginContainer />
            </div>
        </PageStyled.Container>
    );
}

export default Login;
