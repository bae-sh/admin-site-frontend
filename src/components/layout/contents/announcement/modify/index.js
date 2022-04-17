/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
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

import * as Styled from './styled';
import { useAnnouncementDetail, modifyAnnouncement, uploadFiles } from '../../../../../api';
import FileUploadModal from '../../../fileuploadmodal';

function AnnouncementUploadContent(id) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useAnnouncementDetail(id.id);
    const [fileUploadModalVisible, setFileUploadModalVisible] = React.useState(false);
    const [newlyAddedFiles, setNewlyAddedFiles] = React.useState([]);
    const [addedFiles, setAddedFiles] = React.useState([]);
    const [deleteFileUrls, setDeleteFileUrls] = React.useState([]);
    const [files, setFiles] = React.useState(data.data.files);
    const fileId = React.useRef(0);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: data.data.title,
        },
    });
    const navigate = useNavigate();

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
        let temp2 = addedFiles;
        newlyAddedFiles.map((file) => {
            temp = [...temp, file];
            temp2 = addedFiles ? [...temp2, file] : file;
        });
        setFiles(temp);
        setAddedFiles(temp2);
    }, [newlyAddedFiles]);

    const modifyMutation = useMutation(
        (formData) => {
            modifyAnnouncement(formData, id.id);
        },
        {
            onSuccess: () => {
                return (
                    queryClient.invalidateQueries('announcements'),
                    queryClient.invalidateQueries(['announcement', { id: id.id }])
                );
            },
        },
    );

    const onSubmit = (value) => {
        const submitData = {
            title: value.title,
            content: editorRef.current.getInstance().getMarkdown(),
            files: addedFiles,
            deleteFileUrls,
        };
        modifyMutation.mutate(submitData, {
            onSuccess: () => {
                // navigate(`/announcement/${id.id}`, { replace: true });
                navigate('/announcement', { replace: true });
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
            setAddedFiles(addedFiles.filter((val) => file !== val));
            data.data.files.map((val) => {
                if (file === val) {
                    setDeleteFileUrls([...deleteFileUrls, val]);
                }
            });
        },
        [files],
    );

    const renderByStatus = React.useCallback(() => {
        switch (status) {
            case 'loading':
                return <div>Loading...</div>;
            case 'error':
                if (error instanceof Error) {
                    return <div>Error: {error.message}</div>;
                }
                break;
            default:
                return (
                    <>
                        {fileUploadModalVisible && (
                            <FileUploadModal
                                setFileUploadModalVisible={setFileUploadModalVisible}
                                setNewlyAddedFiles={setNewlyAddedFiles}
                            />
                        )}
                        <form
                            encType='multipart/form-data'
                            onSubmit={handleSubmit(onSubmit, onError)}
                        >
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
                                    fileId.current += 1;
                                    const { fileName } = file;
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
                                    initialValue={data.data.content}
                                    previewStyle='tab'
                                    plugins={[
                                        colorSyntax,
                                        [codeSyntaxHighlight, { highlighter: Prism }],
                                    ]}
                                    ref={editorRef}
                                    height='500px'
                                />
                            </div>
                            <div className='btn_container'>
                                <input type='submit' value='수정' className='submit_btn' />
                                <span
                                    className='back_btn'
                                    aria-hidden='true'
                                    onClick={() => {
                                        navigate(`/announcement/${id.id}`);
                                    }}
                                >
                                    취소
                                </span>
                            </div>
                        </form>
                        {isFetching && <div>Background Updating...</div>}
                    </>
                );
        }
    }, [status, isFetching, fileUploadModalVisible, files]);

    return <Styled.Container>{renderByStatus()}</Styled.Container>;
}

export default AnnouncementUploadContent;
