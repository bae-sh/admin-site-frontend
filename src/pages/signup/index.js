import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';

function Signup() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <Styled.Container>
                <div className='inner'>Signup</div>
            </Styled.Container>
        </PageStyled.Container>
    );
}

export default Signup;
