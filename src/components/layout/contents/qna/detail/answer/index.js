import React from 'react';
import * as Styled from './styled';
import QnAAnswerListItemContent from './listItem';

function QnAAnswerContent(props) {
    const { qId, answers } = props;
    return (
        <Styled.Container>
            {answers.map((item) => (
                <QnAAnswerListItemContent qId={qId} item={item} key={item.id} />
            ))}
        </Styled.Container>
    );
}

export default QnAAnswerContent;
