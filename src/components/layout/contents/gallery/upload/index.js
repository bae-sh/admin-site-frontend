/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
import React from 'react';
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

import * as Styled from '../../uploadStyled';
import { postGallery, uploadFiles, deleteFile } from '../../../../../api';
import FileUploadModal from '../../../fileuploadmodal';

function GalleryUploadContent() {
    const queryClient = useQueryClient();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [fileUploadModalVisible, setFileUploadModalVisible] = React.useState(false);
    const [newlyAddedFiles, setNewlyAddedFiles] = React.useState([]);
    const [files, setFiles] = React.useState([]);
    const fileId = React.useRef(0);

    const editorRef = React.useRef();
    React.useEffect(() => {
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

    React.useEffect(() => {
        let temp = files;
        newlyAddedFiles.map((file) => {
            temp = [...temp, file];
        });
        setFiles(temp);
    }, [newlyAddedFiles]);

    const uploadMutation = useMutation((submitData) => postGallery(submitData), {
        onSuccess: () => {
            queryClient.invalidateQueries('galleries');
        },
    });

    const onSubmit = (data) => {
        const submitData = {
            title: data.title,
            content: editorRef.current.getInstance().getMarkdown(),
            files,
        };
        uploadMutation.mutate(submitData, {
            onSuccess: () => {
                navigate('/gallery');
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

    return (
        <Styled.Container>
            {fileUploadModalVisible && (
                <FileUploadModal
                    setFileUploadModalVisible={setFileUploadModalVisible}
                    setNewlyAddedFiles={setNewlyAddedFiles}
                />
            )}
            <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit, onError)}>
                <input
                    {...register('title', { required: '제목을 입력해주세요.' })}
                    placeholder='제목을 입력해주세요.'
                    className='title_input'
                />
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

export default GalleryUploadContent;
