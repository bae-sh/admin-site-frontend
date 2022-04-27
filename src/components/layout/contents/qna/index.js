import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QnaList from './list';
import * as Styled from './styled';

function QnAContent() {
    const [toggleAddBtn, setToggleAddBtn] = useState(false);
    return (
        <Styled.Container>
            <div className='btn_container'>
                <span className='add_btn'>
                    <Link to='/qna/upload'>질문 등록</Link>
                </span>
            </div>
            <QnaList />
        </Styled.Container>
    );
}

export default QnAContent;
