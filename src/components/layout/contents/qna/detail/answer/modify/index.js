import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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

import FileUploadModal from '../../../../../fileuploadmodal';
import { uploadFiles, modifyAnswer } from '../../../../../../../api';
import * as Styled from './styled';

function AnswerModifyContent() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [fileUploadModalVisible, setFileUploadModalVisible] = useState(false);
    const [newlyAddedFiles, setNewlyAddedFiles] = useState([]);
    const [deleteFileUrls, setDeleteFileUrls] = useState([]);
    const editorRef = useRef();

    const { qId, aId } = useParams();
    const { state } = useLocation();
    const [files, setFiles] = useState(state.files);
    const [newFiles, setNewFiles] = useState([]);
    const fileId = useRef(state.files.length);

    const { handleSubmit } = useForm({});

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
        let temp2 = newFiles;
        newlyAddedFiles.forEach((file) => {
            temp = [...temp, file];
            temp2 = [...temp2, file];
        });
        setFiles(temp);
        setNewFiles(temp2);
    }, [newlyAddedFiles]);

    const modifyMutation = useMutation(
        async (dataToSubmit) => {
            await modifyAnswer(dataToSubmit, qId, aId);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('qna', { id: qId });
            },
        },
    );

    const onSubmit = () => {
        const dataToSubmit = {
            content: editorRef.current.getInstance().getMarkdown(),
            files: newFiles,
            deleteFileUrls,
        };
        modifyMutation.mutate(dataToSubmit, {
            onSuccess: () => {
                navigate(`/qna/${qId}`);
            },
        });
    };

    const onError = (error) => {
        if (error.title) {
            alert(error.title.message);
        }
    };

    const handleDeleteFile = React.useCallback(
        (file) => {
            setFiles(files.filter((val) => file !== val));
            files.forEach((val) => {
                if (file === val) {
                    setDeleteFileUrls([...deleteFileUrls, val]);
                }
            });
        },
        [files],
    );

    return (
        <Styled.Container>
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
                        initialValue={state.content}
                        previewStyle='tab'
                        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                        ref={editorRef}
                        height='500px'
                    />
                </div>
                <div className='btn_container'>
                    <input type='submit' className='submit_btn' value='등록' />
                    <span
                        className='back_btn'
                        aria-hidden='true'
                        onClick={() => {
                            navigate(`/qna/${qId}`);
                        }}
                    >
                        취소
                    </span>
                </div>
            </form>
        </Styled.Container>
    );
}

export default AnswerModifyContent;
