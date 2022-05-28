import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import { useMutation, useQueryClient } from 'react-query';
import { AiOutlineFile } from 'react-icons/ai';
import Comments from '../comments';
import * as Styled from './styled';
import { deleteAnswer, downloadFile } from '../../../../../../../api';

function QnAAnswerListItemContent({ qId, item }) {
    const fileId = React.useRef(0);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const lastDate = item.lastModifiedAt.split(/T|-|[.]/);
    const viewerRef = useRef();
    const { content } = item;

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

    useEffect(() => {
        const instance = viewerRef.current.getInstance();
        instance.setMarkdown(content);
    }, [content]);

    return (
        <Styled.Container>
            <div className='answer_container' key={item.id}>
                <div className='wrap_container'>
                    <div className='detail_title_container'>
                        <div className='detail_title1'>
                            <span className='a_marker'>A</span>
                        </div>
                        <div className='detail_title2'>
                            <div className='detail_title2_author_infor'>{`${item.authorName}님의 답변`}</div>
                            <div className='detail_title2_date_infor'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]} | ${item.authorId}`}</div>
                        </div>
                    </div>
                    <div>
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
                </div>
                <div className='content'>
                    <Viewer ref={viewerRef} />
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
                                <AiOutlineFile />
                                {_item.fileName}
                            </span>
                        );
                    })}
                </div>
                <Comments comments={item.comments} qId={qId} aId={item.id} />
            </div>
        </Styled.Container>
    );
}

export default QnAAnswerListItemContent;
