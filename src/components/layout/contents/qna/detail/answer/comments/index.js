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
            <div className='comments_container'>
                <div className='input_container'>
                    <div className='input_title'>
                        댓글
                        <span className='title_number'>{comments.length}</span>
                    </div>
                    <div className='comment_container'>
                        {comments.map((item) => (
                            <Comment key={item.id} qId={qId} aId={aId} item={item} />
                        ))}
                    </div>

                    <textarea
                        className='input_comment'
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                    <button
                        type='button'
                        className='comment_upload_btn'
                        onClick={() => {
                            onSubmit(inputValue);
                        }}
                    >
                        댓글 작성
                    </button>
                </div>
            </div>
        </Styled.Container>
    );
}

export default Comments;
