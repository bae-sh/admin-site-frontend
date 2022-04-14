import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import QnAQuestionContent from './question';
import QnAAnswerContent from './answer';
import * as Styled from './styled';
import { useQnADetail } from '../../../../../api';

function QnADetailContent({ id }) {
    const navigate = useNavigate();
    const [onUpload, setOnUpload] = useState(false);
    const {
        status, data, error, isFetching,
    } = useQnADetail(id);
    console.log(id);
    console.log(data);

    const answerUploadHandler = () => {
        console.log('Answer is uploaded!!');
    };

    if (status === 'loading') {
        return <span>Loading...</span>;
    }

    if (status === 'error') {
        return (
            <span>
                Error:
                {error.message}
            </span>
        );
    }

    return (
        <Styled.Container>
            {/* rest 연산자 생각 */}
            <QnAQuestionContent
                id={data.id}
                authorId={data.authorId}
                authorName={data.authorName}
                title={data.title}
                content={data.content}
                date={data.lastModifiedAt}
                images={data.images}
            />
            {!onUpload ? (
                <>
                    <QnAAnswerContent answers={data.answers} />
                    <span
                        className='answer_upload_btn'
                        aria-hidden='true'
                        onClick={() => {
                            setOnUpload(!onUpload);
                        }}
                    >
                        답변 등록
                    </span>
                    <span
                        className='back_btn'
                        aria-hidden='true'
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        목록 보기
                    </span>
                </>
            ) : (
                <>
                    <Editor placeholder='답변을 등록해주세요.' />
                    <span
                        className='answer_confrim_btn'
                        aria-hidden='true'
                        onClick={() => {
                            setOnUpload(!onUpload);
                            answerUploadHandler();
                        }}
                    >
                        확인
                    </span>
                    <span
                        className='answer_cancel_btn'
                        onClick={() => {
                            setOnUpload(!onUpload);
                        }}
                        aria-hidden='true'
                    >
                        취소
                    </span>
                </>
            )}
        </Styled.Container>
    );
}

export default QnADetailContent;
