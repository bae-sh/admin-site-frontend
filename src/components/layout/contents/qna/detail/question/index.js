import React from 'react';
import * as Styled from './styled';

function QnAQuestionContent(props) {
    const {
        id, authorId, authorName, title, content, date, images,
    } = props;
    const lastDate = date.split(/T|-|[.]/);

    return (
        <Styled.Container>
            <div>
                <h1>question!</h1>
                <div>
                    <div className='detail_title1'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]} | ${authorName}`}</div>
                    <div className='detail_title2'>{title}</div>
                </div>
                <div className='detail_content'>{content}</div>
            </div>
        </Styled.Container>
    );
}

export default QnAQuestionContent;
