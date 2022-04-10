import React from 'react';
import * as Styled from './styled';

function QnAQuestionContent(props) {
    console.log(props);
    const {
        id, authorId, authorName, title, content, date, images,
    } = props;
    const lastDate = date.split(/T|-|[.]/);

    return (
        <Styled.Container>
            <div>
                <h1>question!</h1>
                <div>{title}</div>
                <div>{authorName}</div>
                <div>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]}`}</div>
                <div>{content}</div>
            </div>
        </Styled.Container>
    );
}

export default QnAQuestionContent;
