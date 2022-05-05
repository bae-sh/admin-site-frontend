import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Comment from './comment';
import * as Styled from './styled';
import { uploadAnswerComment } from '../../../../../../../api';

function Comments({ comments, qId, aId }) {
    const queryClient = useQueryClient();
    const [inputValue, setInputValue] = useState('');

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
                return <Comment key={item.id} qId={qId} aId={aId} item={item} />;
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

export default Comments;
