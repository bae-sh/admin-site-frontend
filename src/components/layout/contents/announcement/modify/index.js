/* eslint-disable arrow-body-style */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useAnnouncementDetail, modifyAnnouncement } from '../../../../../api';

function AnnouncementUploadContent(id) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useAnnouncementDetail(id.id);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: data.data.title,
            content: data.data.content,
        },
    });
    const navigate = useNavigate();

    const mutation = useMutation(
        (formData) => {
            modifyAnnouncement(formData, id.id);
        },
        {
            onSuccess: () => {
                return (
                    queryClient.invalidateQueries('announcements'),
                    queryClient.invalidateQueries(['announcement', { id: id.id }])
                );
            },
        },
    );

    const onSubmit = (value) => {
        const formData = new FormData();
        value.image.length &&
            Object.values(value.image).map((file) => formData.append('images', file));
        data.data.image.length &&
            Object.values(data.data.image).map((file) =>
                formData.append('deleteFileUrls', file.fileUrl),
            );
        formData.append('title', value.title);
        formData.append('content', value.content);
        mutation.mutate(formData, {
            onSuccess: () => {
                navigate(`/announcement/${id.id}`, { replace: true });
            },
        });
    };

    const onError = (err) => {
        if (err.content && err.title) {
            alert(`${err.content.message}\n${err.title.message}`);
        } else if (err.content) {
            alert(err.content.message);
        } else {
            alert(err.title.message);
        }
    };

    const renderByStatus = React.useCallback(() => {
        switch (status) {
            case 'loading':
                return <div>Loading...</div>;
            case 'error':
                if (error instanceof Error) {
                    return <div>Error: {error.message}</div>;
                }
                break;
            default:
                return (
                    <>
                        <form
                            encType='multipart/form-data'
                            onSubmit={handleSubmit(onSubmit, onError)}
                        >
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
                                <input type='submit' value='수정' className='submit_btn' />
                                <span
                                    className='back_btn'
                                    aria-hidden='true'
                                    onClick={() => {
                                        navigate(`/announcement/${id.id}`);
                                    }}
                                >
                                    취소
                                </span>
                            </div>
                        </form>
                        {isFetching && <div>Background Updating...</div>}
                    </>
                );
        }
    }, [status, isFetching]);

    return <Styled.Container>{renderByStatus()}</Styled.Container>;
}

export default AnnouncementUploadContent;
