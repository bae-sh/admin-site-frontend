/* eslint-disable indent */
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import { FaCommentDots } from 'react-icons/fa';
import FileUploadModal from '../../../fileuploadmodal';
import QnAQuestionContent from './question';
import QnAAnswerContent from './answer';
import * as Styled from './styled';
import { useQnADetail, uploadAnswer, uploadFiles, deleteFile } from '../../../../../api';

function QnADetailContent({ id }) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { status, data, error, isFetching } = useQnADetail(id);
    const [fileUploadModalVisible, setFileUploadModalVisible] = useState(false);
    const [newlyAddedFiles, setNewlyAddedFiles] = useState([]);
    const editorRef = useRef();
    const [files, setFiles] = useState([]);
    const fileId = useRef(0);
    const { handleSubmit } = useForm();

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
                (async () => {
                    const formData = new FormData();
                    formData.append('files', blob);

                    const url = await uploadFiles(formData);
                    callback(url.data[0].fileUrl, `alt ${url.data[0].fileName}`);
                })();
                return false;
            });
        }
        return () => {};
    }, [editorRef]);

    useEffect(() => {
        let temp = files;
        newlyAddedFiles.map((file) => {
            temp = [...temp, file];
            return temp;
        });
        setFiles(temp);
    }, [newlyAddedFiles]);

    const uploadMutation = useMutation((dataToSubmit) => uploadAnswer(dataToSubmit, id), {
        onSuccess: () => {
            queryClient.invalidateQueries('qna', { id: id });
        },
    });

    const onSubmit = () => {
        const dataToSubmit = {
            content: editorRef.current.getInstance().getMarkdown(),
            files,
        };
        uploadMutation.mutate(dataToSubmit, {
            onSuccess: () => {
                alert('답변등록!');
            },
        });
    };

    const onError = (err) => {
        if (err.title) {
            alert(err.title.message);
        }
    };

    const handleDeleteFile = React.useCallback(
        (file) => {
            setFiles(files.filter((val) => file !== val));
            files.map((val) => {
                if (file === val) {
                    deleteFile({
                        deleteFileUrls: [val],
                    });
                }
            });
        },
        [files],
    );

    if (status === 'loading') return <span>Loading...</span>;
    if (status === 'error') return <div>Error: {error.message}</div>;

    const { answers, ...question } = data.data;
    console.log(data.data);

    return (
        <Styled.Container>
            <QnAQuestionContent
                id={id}
                authorEmail={question.authorEmail}
                authorName={question.authorName}
                title={question.title}
                content={question.content}
                date={question.lastModifiedAt}
                files={question.files}
                comments={question.comments}
            />
            <QnAAnswerContent qId={id} answers={answers} />
            <div className='editor-container'>
                <div className='editor-title'><FaCommentDots />  답변하기!!</div>
                {fileUploadModalVisible && (
                    <FileUploadModal
                        setFileUploadModalVisible={setFileUploadModalVisible}
                        setNewlyAddedFiles={setNewlyAddedFiles}
                    />
                )}
                <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit, onError)}>
                    <span
                        className='add_file_btn'
                        aria-hidden='true'
                        onClick={() => {
                            setFileUploadModalVisible(!fileUploadModalVisible);
                        }}
                    >
                        파일 첨부
                    </span>
                    <div className='uploaded_file_container'>
                        {files.map((file) => {
                            const { fileName } = file;
                            fileId.current += 1;
                            return (
                                <div className='uploaded_file' key={fileId.current}>
                                    <span>{fileName}</span>
                                    <BsTrash
                                        onClick={() => {
                                            handleDeleteFile(file);
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className='content_input'>
                        <Editor
                            placeholder='내용을 입력해주세요'
                            previewStyle='tab'
                            plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                            ref={editorRef}
                        />
                    </div>
                    <div className='btn_container'>
                        <input type='submit' className='submit_btn' value='답변 등록' />
                        <span
                            className='back_btn'
                            aria-hidden='true'
                            onClick={() => {
                                navigate('/qna');
                            }}
                        >
                            목록
                        </span>
                    </div>
                </form>
            </div>
            {isFetching && <div>Background Updating…</div>}
        </Styled.Container>
    );
}

export default QnADetailContent;
