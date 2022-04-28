import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useMutation, useQueryClient } from 'react-query';
import { FaPaperclip } from 'react-icons/fa';
import * as Styled from './styled';
import { deleteAnswer, downloadFile } from '../../../../../../../api';

function QnAAnswerListItemContent({ qId, item }) {
    const fileId = React.useRef(0);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const lastDate = item.lastModifiedAt.split(/T|-|[.]/);

    const deleteMutation = useMutation((ids) => deleteAnswer(ids[0], ids[1]), {
        onSuccess: () => {
            queryClient.invalidateQueries('qna', { id: qId });
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
            <div className='answer_container' key={item.id}>
                <div className='detail_title_container'>
                    <div>
                        <div className='detail_title1'>
                            <span className='a_marker'>A</span>
                        </div>
                        <div className='detail_title2'>
                            <span className='detail_title2_author_infor'>{`${item.authorId}| ${item.authorName}`}</span>
                            <span className='detail_title2_date_infor'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]}`}</span>
                        </div>
                    </div>
                    {userEmail === item.authorId && (
                        <div className='btn_container'>
                            <span
                                className='modify_btn'
                                aria-hidden='true'
                                onClick={() => {
                                    navigate(`/qna/modify/${qId}/answers/${item.id}`, {
                                        state: item,
                                    });
                                }}
                            >
                                수정
                            </span>
                            <span
                                className='delete_btn'
                                aria-hidden='true'
                                onClick={() => {
                                    deleteMutation.mutate([qId, item.id], {
                                        onSuccess: () => {
                                            navigate(`/qna/${qId}`);
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
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                </div>
                <div className='download_file_btn_container'>
                    {item.files.map((_item) => {
                        fileId.current += 1;
                        return (
                            <span
                                className='download_file_btn'
                                aria-hidden='true'
                                key={fileId.current}
                                onClick={() => downloadFile(_item.fileUrl, _item.fileName)}
                            >
                                <FaPaperclip />  {_item.fileName}
                            </span>
                        );
                    })}
                </div>
            </div>
        </Styled.Container>
    );
}

export default QnAAnswerListItemContent;
