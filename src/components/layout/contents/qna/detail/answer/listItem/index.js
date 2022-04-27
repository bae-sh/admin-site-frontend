import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import { useMutation, useQueryClient } from 'react-query';
import * as Styled from './styled';
import { deleteAnswer, downloadFile } from '../../../../../../../api';

function QnAAnswerListItemContent({ qId, item }) {
    const fileId = React.useRef(0);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const lastDate = item.lastModifiedAt.split(/T|-|[.]/);
    const deleteMutation = useMutation(
        (deleteQID, deleteAID) => deleteAnswer(deleteQID, deleteAID),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('qna');
            },
        },
    );

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
                    <div className='detail_title1'>
                        <span className='a_marker'>A</span>
                    </div>
                    <div className='detail_title2'>
                        <span className='detail_title2_author_infor'>{`${item.authorId}| ${item.authorName}`}</span>
                        <span className='detail_title2_date_infor'>{`${lastDate[0]}년 ${lastDate[1]}월 ${lastDate[2]}일 ${lastDate[3]}`}</span>
                    </div>
                    <div>
                        {userEmail === item.authorId && (
                            <div className='btn_container'>
                                <span
                                    className='modify_btn'
                                    aria-hidden='true'
                                    onClick={() => {
                                        navigate(`/qna/${qId}/answer/modify/${item.id}`);
                                    }}
                                >
                                    수정
                                </span>
                                <span
                                    className='delete_btn'
                                    aria-hidden='true'
                                    onClick={() => {
                                        deleteMutation.mutate(item.id, {
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
                                {_item.fileName}
                            </span>
                        );
                    })}
                </div>
                <div className='content'>
                    <Viewer initialValue={item.content} />
                </div>
            </div>
        </Styled.Container>
    );
}

export default QnAAnswerListItemContent;
