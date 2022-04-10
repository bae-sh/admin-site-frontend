/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
import React from 'react';
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

import * as Styled from './styled';
import { postAnnouncement, uploadImage } from '../../../../../api';

function AnnouncementUploadContent() {
    const queryClient = useQueryClient();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const editorRef = React.useRef();
    React.useEffect(() => {
        if (editorRef.current) {
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
                (async () => {
                    const formData = new FormData();
                    formData.append('image', blob);

                    const url = await uploadImage(formData);
                    callback(url.data.fileUrl, 'alt text');
                })();

                return false;
            });
        }

        return () => {};
    }, [editorRef]);

    const uploadMutation = useMutation((formData) => postAnnouncement(formData), {
        onSuccess: () => {
            queryClient.invalidateQueries('announcements');
        },
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        data.file.length && Object.values(data.file).map((file) => formData.append('files', file));
        formData.append('title', data.title);
        formData.append('content', editorRef.current.getInstance().getMarkdown());
        uploadMutation.mutate(formData, {
            onSuccess: () => {
                navigate('/announcement');
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
                />
                <div className='content_input'>
                    <Editor
                        placeholder='내용을 입력해주세요.'
                        previewStyle='tab'
                        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                        ref={editorRef}
                        height='500px'
                    />
                </div>
                <div className='btn_container'>
                    <input type='submit' value='올리기' className='submit_btn' />
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

export default AnnouncementUploadContent;
