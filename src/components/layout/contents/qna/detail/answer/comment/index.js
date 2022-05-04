import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as Styled from './styled';
import {
    deleteAnswerComment,
    modifyAnswerComment,
    uploadAnswerComment,
} from '../../../../../../../api';

function Comment({ comments, qId, aId }) {
    const queryClient = useQueryClient();
    const [inputValue, setInputValue] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUserEmail(JSON.parse(localStorage.getItem('user')).email);
        }
    }, []);

    const deleteMutation = useMutation((ids) => deleteAnswerComment(ids[0], ids[1], ids[2]), {
        onSuccess: () => {
            queryClient.invalidateQueries('qna', { id: qId });
        },
    });

    const uploadMutation = useMutation(
        (dataToSubmit) => uploadAnswerComment(dataToSubmit, qId, aId),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('qna', { id: qId });
            },
        },
    );

    const onSubmit = (data) => {
        const dataToSubmit = {
            comment: data,
        };
        uploadMutation.mutate(dataToSubmit, {
            onSuccess: () => {
                alert('댓글 등록!');
            },
        });
    };

    return (
        <Styled.Container>
            {comments.map((item) => {
                const lastDate = item.modifiedAt.split(/T|-|[.]/);
                return (
                    <div className='wrap_container' key={item.id}>
                        <div className='comment_container'>
                            <div className='comment_title_container'>
                                <span className='comment_title_author_infor'>{`${item.authorId} | ${item.authorName}`}</span>
                                <span className='comment_title_date_infor'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]}`}</span>
                            </div>
                            <div className='content'>{item.comment}</div>
                        </div>
                        {userEmail === item.authorId && (
                            <div className='btn_container'>
                                <span
                                    className='modify_btn'
                                    aria-hidden='true'
                                    onClick={() => {
                                        alert('수정 보류');
                                    }}
                                >
                                    수정
                                </span>
                                <span
                                    className='delete_btn'
                                    aria-hidden='true'
                                    onClick={() => {
                                        deleteMutation.mutate([qId, aId, item.id], {
                                            onSuccess: () => {
                                                alert('댓글 삭제!');
                                            },
                                        });
                                    }}
                                >
                                    삭제
                                </span>
                            </div>
                        )}
                    </div>
                );
            })}
            <div className='input_container'>
                <div className='input_title'>댓글 달기</div>
                <input
                    type='text'
                    className='input_comment'
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <span
                    className='comment_upload_btn'
                    onClick={() => {
                        onSubmit(inputValue);
                    }}
                >
                    등록
                </span>
            </div>
        </Styled.Container>
    );
}

export default Comment;
