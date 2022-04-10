import React from 'react';
import * as Styled from './styled';
import QnAAnswerListContent from './list';

function QnAAnswerContent(props) {
    const { answers } = props;
    return (
        <Styled.Container>
            <div>
                <h1>Answer!!</h1>
            </div>
            <QnAAnswerListContent answers={answers} />
        </Styled.Container>
    );
}

export default QnAAnswerContent;
