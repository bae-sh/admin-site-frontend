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

    const answerUploadHandler = () => {
        console.log('Answer is uploaded!!');
    };

    const render = React.useCallback(() => {
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
        const { answers, ...question } = data.data;
        console.log(localStorage.getItem('user'));
        return (
            <Styled.Container>
                <QnAQuestionContent
                    id={question.id}
                    authorName={question.authorName}
                    title={question.title}
                    content={question.content}
                    date={question.lastModifiedAt}
                    files={question.files}
                />
                {!onUpload ? (
                    <>
                        <QnAAnswerContent answers={answers} />
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
    }, [status, isFetching]);

    return <>{render()}</>;
}

export default QnADetailContent;
