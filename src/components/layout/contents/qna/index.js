import React from 'react';
import { FaPlus } from 'react-icons/fa';
import QnaList from './list';
import * as Styled from './styled';

function QnAContent() {
    return (
        <Styled.Container>
            <div>
                <button type='button'>
                    <FaPlus size={35} />
                    글 작성
                </button>
            </div>
            <QnaList />
        </Styled.Container>
    );
}

export default QnAContent;
