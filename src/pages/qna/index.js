import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';
import QnaList from '../../components/qna/QnaList';

function QnA() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                Q&A!
                <QnaList />
            </div>
        </PageStyled.Container>
    );
}

export default QnA;
