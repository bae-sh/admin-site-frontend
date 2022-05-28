import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';
import Title from '../../components/layout/title';
import QnAContent from '../../components/layout/contents/qna';

function QnA() {
    const modalVisible = useRecoilValue(modalVisibleState);

    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='🙋‍♀️ Q&A 게시판' description='질문... 그리고 대답.' />
                <QnAContent />
            </div>
        </PageStyled.Container>
    );
}

export default QnA;
