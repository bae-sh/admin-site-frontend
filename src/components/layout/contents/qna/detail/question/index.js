import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useMutation, useQueryClient } from 'react-query';
import { deleteQuestion, downloadFile } from '../../../../../../api';
import * as Styled from './styled';

function QnAQuestionContent(props) {
    const fileId = React.useRef(0);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { id, authorEmail, authorName, title, content, date, files } = props;
    const lastDate = date.split(/T|-|[.]/);

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
    return (
        <Styled.Container>
            <div className='detail_title_container'>
                <div className='detail_title1'>
                    <span className='q_marker'>Q</span>
                    {title}
                </div>
                <div className='detail_title2'>
                    <span className='detail_title2_author_infor'>{`${authorEmail} | ${authorName}`}</span>
                    <span className='detail_title2_date_infor'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]}`}</span>
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
                            {item.fileName}
                        </span>
                    );
                })}
            </div>
            <div className='content'>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </Styled.Container>
    );
}

export default QnAQuestionContent;
