import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../../../atoms';
import * as PageStyled from '../../../pageStyled';
import Title from '../../../../components/layout/title';
import AnswerModifyContent from '../../../../components/layout/contents/qna/detail/answer/modify';

function AnswerModify() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='📋 Q&A 게시판' description='' />
                <AnswerModifyContent />
            </div>
        </PageStyled.Container>
    );
}

export default AnswerModify;
