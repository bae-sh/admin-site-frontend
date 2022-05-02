import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import { useMutation, useQueryClient } from 'react-query';
import { FaPaperclip } from 'react-icons/fa';
import * as Styled from './styled';
import { deleteQuestion, downloadFile } from '../../../../../../api';

function QnAQuestionContent(props) {
    const fileId = React.useRef(0);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { id, authorEmail, authorName, title, content, date, files } = props;
    const lastDate = date.split(/T|-|[.]/);
    const viewerRef = useRef();

    const deleteMutation = useMutation((deleteID) => deleteQuestion(deleteID), {
        onSuccess: () => {
            queryClient.invalidateQueries('qnas');
        },
    });

    const [userEmail, setUserEmail] = useState('');
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUserEmail(JSON.parse(localStorage.getItem('user')).email);
        }
    }, []);

    useEffect(() => {
        const instance = viewerRef.current.getInstance();
        instance.setMarkdown(content);
    }, [content]);

    return (
        <Styled.Container>
            <div className='wrap_container'>
                <div className='detail_title_container'>
                    <div className='detail_title1'>
                        <span className='q_marker'>Q</span>
                        {title}
                    </div>
                    <div className='detail_title2'>
                        <span className='detail_title2_author_infor'>{`${authorEmail} | ${authorName}`}</span>
                        <span className='detail_title2_date_infor'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]}`}</span>
                    </div>
                </div>
                {userEmail === authorEmail && (
                    <div className='btn_container'>
                        <span
                            className='modify_btn'
                            aria-hidden='true'
                            onClick={() => {
                                navigate(`/qna/modify/${id}`, {
                                    state: props,
                                });
                            }}
                        >
                            수정
                        </span>
                        <span
                            className='delete_btn'
                            aria-hidden='true'
                            onClick={() => {
                                deleteMutation.mutate(id, {
                                    onSuccess: () => {
                                        navigate('/qna');
                                    },
                                });
                            }}
                        >
                            삭제
                        </span>
                    </div>
                )}
            </div>
            <div className='content'>
                <Viewer ref={viewerRef} />
            </div>
            <div className='download_file_btn_container'>
                {files.map((item) => {
                    fileId.current += 1;
                    return (
                        <span
                            className='download_file_btn'
                            aria-hidden='true'
                            key={fileId.current}
                            onClick={() => downloadFile(item.fileUrl, item.fileName)}
                        >
                            <FaPaperclip /> {item.fileName}
                        </span>
                    );
                })}
            </div>
        </Styled.Container>
    );
}

export default QnAQuestionContent;
