import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import { uploadQuestion, getFilesUrl } from '../../../../../api';
import * as Styled from './styled';

function QnAUPloadContent() {
    const queryClient = useQueryClient();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const editorRef = useRef();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
                (async () => {
                    const formData = new FormData();
                    formData.append('files', blob);

                    const url = await getFilesUrl(formData);
                    callback(url.data[0].fileUrl, url.data[0].fileName);
                })();

                return false;
            });
        }

        return () => {};
    }, [editorRef]);

    const uploadMutation = useMutation(
        (dataToSubmit) => {
            uploadQuestion(dataToSubmit);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('qnas');
            },
        },
    );

    const getUrls = async (event) => {
        let selectedFiles = [];
        // DnD 생각
        // selectedFiles = e.type === 'change' ? e.target.files : e.dataTransfer.files;
        selectedFiles = event.target.files;
        let temp = files;
        const formData = new FormData();
        Object.values(selectedFiles).map((file) => formData.append('files', file));
        const data = await getFilesUrl(formData);

        data.data.map((file) => {
            temp = [
                ...temp,
                {
                    fileName: file.fileName,
                    fileUrl: file.fileUrl,
                },
            ];
        });
        setFiles(temp);
    };

    const onSubmit = async (data) => {
        const dataToSubmit = {
            title: data.title,
            content: editorRef.current.getInstance().getMarkdown(),
            files: files,
        };
        uploadMutation.mutate(dataToSubmit, {
            onSuccess: () => {
                navigate('/qna');
            },
        });
    };

    const onError = (error) => {
        if (error.title) {
            alert(error.title.message);
        }
    };

    return (
        <Styled.Container>
            <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit, onError)}>
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
                    onChange={() => {
                        getUrls(event);
                    }}
                />
                <Editor
                    placeholder='질문 내용을 입력해주세요'
                    previewStyle='tab'
                    plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                    ref={editorRef}
                />
                <div>
                    <input type='submit' className='submit_btn' value='등록' />
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
