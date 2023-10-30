import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import poster from '../../images/admin.png';

function Home() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <Styled.Container>
                <img src={poster} alt='admin' />
            </Styled.Container>
        </PageStyled.Container>
    );
}

export default Home;
