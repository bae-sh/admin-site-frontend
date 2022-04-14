import React from 'react';
import * as Styled from './styled';

function QnAAnswerListItemContent({ item }) {
    return (
        <Styled.Container>
            <div className='detail_title' key={item.id}>
                <div className='detail_title1'>{item.authorName}</div>
                <div className='detail_content'>{item.content}</div>
            </div>
        </Styled.Container>
    );
}

export default QnAAnswerListItemContent;
