import React from 'react';
import { Link } from 'react-router-dom';
import QnaList from './list';
import * as Styled from './styled';

const addItem = {
    name: '질문하기',
    id: 'add_qna',
};

function QnAContent() {
    return (
        <Styled.Container>
            <div className='add_post'>
                <ul className='add_list'>
                    <li key={addItem.id}>
                        <Link to='/qna/upload'>
                            <span className='add_link'>{addItem.name}</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <QnaList />
        </Styled.Container>
    );
}

export default QnAContent;
