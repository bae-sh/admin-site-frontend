/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { postAnnouncement } from '../../../../../api';

function AnnouncementUploadContent() {
    const queryClient = useQueryClient();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const mutation = useMutation((formData) => postAnnouncement(formData), {
        onSuccess: () => {
            queryClient.invalidateQueries('announcements');
            navigate('/announcement');
        },
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        data.image.length &&
            Object.values(data.image).map((file) => formData.append('images', file));
        formData.append('title', data.title);
        formData.append('content', data.content);
        mutation.mutate(formData);
    };

    const onError = (error) => {
        if (error.content && error.title) {
            alert(`${error.content.message}\n${error.title.message}`);
        } else if (error.content) {
            alert(error.content.message);
        } else {
            alert(error.title.message);
        }
    };

    return (
        <Styled.Container>
            <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit, onError)}>
                <input
                    {...register('title', { required: '제목을 입력해주세요.' })}
                    placeholder='제목을 입력해주세요.'
                    className='title_input'
                />
                <input
                    type='file'
                    multiple
                    accept='image/png, image/jpeg, image/jpg'
                    {...register('image')}
                    className='image_input'
                />
                <textarea
                    {...register('content', { required: '내용을 입력해주세요.' })}
                    placeholder='내용을 입력해주세요.'
                    className='content_input'
                    rows={15}
                    cols={15}
                />
                <div className='btn_container'>
                    <input type='submit' value='올리기' className='submit_btn' />
                    <span
                        className='back_btn'
                        aria-hidden='true'
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        취소
                    </span>
                </div>
            </form>
        </Styled.Container>
    );
}

export default AnnouncementUploadContent;
