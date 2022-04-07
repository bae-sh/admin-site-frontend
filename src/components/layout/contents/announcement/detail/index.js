import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

const temp = {
    data: {
        id: 3,
        authorId: 'rlatjrud1232',
        authorName: '김서경',
        title: '귀여운 사진 보고가세요.',
        content: '리트리버 너무 귀엽죠?',
        createAt: '2022-03-28T03:51:15.31638',
        lastModifiedAt: '2022-03-28T04:33:85.19723',
        images: [
            {
                fileName: '치킨사진.png',
                fileUrl:
                    'https://d2uupwi4mli9pv.cloudfront.net/announcement/f49c15e9-fea6-4e7e-981d-7c9699166aa1',
            },
            {
                fileName: '피자.png',
                fileUrl:
                    'https://d2uupwi4mli9pv.cloudfront.net/announcement/05040533-c440-4ee0-a092-46fe025b93e0',
            },
        ],
    },
    message: '공지사항 조회 성공',
};

function AnnouncementDetailContent(id) {
    const navigate = useNavigate();
    const date = temp.data.lastModifiedAt.split(/T|-|[.]/);
    console.log(id);
    temp.data.images.map((item) => console.log(item.fileUrl));
    return (
        <Styled.Container>
            <div className='detail_title'>
                <div className='detail_title1'>{`${date[0]}년 ${date[1]}월 ${date[2]}일 ${date[3]} | ${temp.data.authorName}`}</div>
                <div className='detail_title2'>{temp.data.title}</div>
            </div>
            <div className='detail_content'>
                {temp.data.images.map((item) => (
                    <img
                        className='item_img'
                        key={item.fileUrl}
                        alt={item.fileName}
                        src={item.fileUrl}
                    />
                ))}
                <div className='content'>{temp.data.content}</div>
                <span
                    className='back_btn'
                    aria-hidden='true'
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    목록 보기
                </span>
            </div>
        </Styled.Container>
    );
}

export default AnnouncementDetailContent;
