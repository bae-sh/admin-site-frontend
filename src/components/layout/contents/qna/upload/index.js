import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { uploadQuestion } from '../../../../../api';
import * as Styled from './styled';

function QnAUPloadContent() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const editorRef = useRef();

    const qnaUploadHandler = () => {
        console.log(editorRef.current.getInstance());
        const dataToSubmit = {
            title: '테스트타이틀22',
            content: '테스트 컨텐트22',
            files: [
                {
                    fileName: 'ㅁㄹ',
                    fileUrl: 'ㅁㄹ',
                },
            ],
        };

        const { data } = uploadQuestion(dataToSubmit);
        console.log(data);
    };

    return (
        <Styled.Container>
            <form encType='multipart/form-data'>
                <input
                    {...register('title', { required: '제목을 입력해주세요.' })}
                    placeholder='제목을 입력해주세요.'
                    className='title_input'
                />
                <input
                    type='file'
                    multiple
                    accept='파일 확장자'
                    {...register('file')}
                    className='file_input'
                />
                <Editor
                    placeholder='질문 내용을 입력해주세요'
                    plugins={[codeSyntaxHighlight]}
                    ref={editorRef}
                />
                <div>
                    <span
                        className='submit_btn'
                        aria-hidden='true'
                        onClick={qnaUploadHandler}
                    >
                        등록
                    </span>
                    <span
                        className='back_btn'
                        aria-hidden='true'
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        취소
                    </span>
                </div>
            </form>
        </Styled.Container>
    );
}

export default QnAUPloadContent;
