import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteAnswerComment, modifyAnswerComment } from '../../../../../../../../api';

function Comment({ qId, aId, item }) {
    const queryClient = useQueryClient();
    const [userEmail, setUserEmail] = useState('');
    const lastDate = item.modifiedAt.split(/T|-|[.]/);
    const [isModified, setIsModified] = useState(false);
    const [modifiedValue, setModifiedValue] = useState(item.comment);

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

    const modifyMutation = useMutation(
        (datas) => modifyAnswerComment(datas[0], datas[1], datas[2], datas[3]),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('qna', { id: qId });
            },
        },
    );

    const onSubmit = (datas) => {
        const dataToSubmit = {
            comment: datas[0],
        };
        modifyMutation.mutate([dataToSubmit, datas[1], datas[2], datas[3]], {
            onSuccess: () => {
                alert('댓글 수정!');
                setIsModified(false);
            },
        });
    };

    return (
        <div className='wrap_container'>
            <div className='comment_container'>
                <div className='comment_title_container'>
                    <span className='comment_title_author_infor'>{`${item.authorId} | ${item.authorName}`}</span>
                    <span className='comment_title_date_infor'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]}`}</span>
                </div>
                {!isModified ? (
                    <div className='content'>{item.comment}</div>
                ) : (
                    <input
                        type='text'
                        className='input_comment'
                        value={modifiedValue}
                        onChange={(event) => setModifiedValue(event.target.value)}
                    />
                )}
            </div>
            {userEmail === item.authorId &&
                (!isModified ? (
                    <div className='btn_container'>
                        <span
                            className='modify_btn'
                            aria-hidden='true'
                            onClick={() => {
                                setIsModified(true);
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
                ) : (
                    <div className='btn_container'>
                        <span
                            className='modify_upload_btn'
                            aria-hidden='true'
                            onClick={() => {
                                onSubmit([modifiedValue, qId, aId, item.id]);
                            }}
                        >
                            등록
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default Comment;
