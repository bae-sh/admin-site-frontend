import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Comment from './comment';
import * as Styled from './styled';
import { uploadQuestionComment } from '../../../../../../../api';

function Comments({ comments, qId }) {
    const queryClient = useQueryClient();
    const [inputValue, setInputValue] = useState('');

    const uploadMutation = useMutation((dataToSubmit) => uploadQuestionComment(dataToSubmit, qId), {
        onSuccess: () => {
            queryClient.invalidateQueries('qna', { id: qId });
        },
    });

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
            <div className='input_container'>
                <div className='input_title'>댓글</div>
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
            {comments.map((item) => (
                <Comment key={item.id} qId={qId} item={item} />
            ))}
        </Styled.Container>
    );
}

export default Comments;
