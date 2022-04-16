import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import * as Styled from './styled';

function QnAAnswerListItemContent({ item }) {
    const lastDate = item.lastModifiedAt.split(/T|-|[.]/);
    return (
        <Styled.Container>
            <div className='detail_title' key={item.id}>
                <div className='detail_title1'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]} | ${item.authorName}`}</div>
                <div className='detail_content'>
                    <Viewer initialValue={item.content} />
                </div>
            </div>
        </Styled.Container>
    );
}

export default QnAAnswerListItemContent;
