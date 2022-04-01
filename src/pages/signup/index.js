import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';
import SignupContainer from '../../components/loginbox/SignupContainer';

function Signup() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <SignupContainer />
            </div>
        </PageStyled.Container>
    );
}

export default Signup;
