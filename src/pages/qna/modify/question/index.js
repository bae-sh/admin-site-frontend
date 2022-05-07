import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../../../atoms';
import * as PageStyled from '../../../pageStyled';
import Title from '../../../../components/layout/title';
import QuestionModifyContent from '../../../../components/layout/contents/qna/detail/question/modify';

function QuestionModify() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='📋 Q&A 게시판' description='' />
                <QuestionModifyContent />
            </div>
        </PageStyled.Container>
    );
}

export default QuestionModify;
