import React from 'react';
import * as Styled from './styled';

function QnAAnswerListContent({ answers }) {
    return (
        <Styled.Container>
            {answers.map((item) => {
                console.log(item);
                // const date = item.lastModifiedAt.split(/T|-|[.]/);
                return (
                    <div className='qna-answer-list-item' key={item.id}>
                        <div>{item.authorName}</div>
                        <div>{item.content}</div>
                    </div>
                );
            })}
        </Styled.Container>
    );
}

export default QnAAnswerListContent;
