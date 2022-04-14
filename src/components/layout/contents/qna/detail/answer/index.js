import React from 'react';
import * as Styled from './styled';
import QnAAnswerListItemContent from './listItem';

function QnAAnswerContent(props) {
    const { answers } = props;
    return (
        <Styled.Container>
            {answers.map((item) => (
                <QnAAnswerListItemContent item={item} key={item.id} />
            ))}
        </Styled.Container>
    );
}

export default QnAAnswerContent;
