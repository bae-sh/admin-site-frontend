import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../../images/logo/admin_logo.png';
import Paging from '../../../paging';
import * as Styled from './styled';

const tempAnnouncementList = {
    data: [
        {
            id: 3,
            authorId: 'rlatjrud1232',
            authorName: '김서경',
            title: '귀여운 사진 보고가세요.',
            content:
                '리트리버 너무 귀엽죠?리트리버 너무 귀엽죠?리트리버 너무 귀엽죠?리트리버 너무 귀엽죠?',
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
        {
            id: 4,
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
        {
            id: 5,
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
        {
            id: 6,
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
                        'https://d2uupwi4mli9pv.cloudfront.net/announcement/05c09c3a-565b-4ef8-80f0-dc770d23d4d2',
                },
                {
                    fileName: '피자.png',
                    fileUrl:
                        'https://d2uupwi4mli9pv.cloudfront.net/announcement/3412cd32-a9df-4287-8366-92238e49946f',
                },
            ],
        },
        {
            id: 9,
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
                        'https://d2uupwi4mli9pv.cloudfront.net/announcement/bf3488d5-854b-46ee-a437-8c4c931ab4a6',
                },
                {
                    fileName: '피자.png',
                    fileUrl:
                        'https://d2uupwi4mli9pv.cloudfront.net/announcement/0741ddb1-b51a-4c00-8729-041b702ce752',
                },
            ],
        },
    ],
    pageInfo: {
        currentPage: 0,
        totalPages: 2,
        numberOfElements: 5,
        pageSize: 6,
        totalElements: 6,
    },
    message: '공지사항 목록 조회 성공',
};

function AnnouncementList() {
    // const clickedIndex = useRecoilValue(announcementTabIndexState);
    const [currentPage, setCurrentPage] = React.useState(0);
    React.useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);
    // todo : get board data from server
    return (
        <Styled.Container>
            <Styled.FlexContainer>
                {tempAnnouncementList.data.map((item) => {
                    const date = item.lastModifiedAt.split(/T|-|[.]/);
                    return (
                        <li className='item_card' key={item.id}>
                            <div className='wrap_container'>
                                <div className='announcement_title'>
                                    <Link to={`/announcement/${item.id}`}>{item.title}</Link>
                                </div>
                                <div className='announcement_content'>{item.content}</div>
                                <div className='same'>
                                    <span className='announcement_date'>{`${date[0]}년 ${date[1]}월 ${date[2]}일 ${date[3]}`}</span>
                                    <span className='announcement_author_name'>{`작성자 ${item.authorName}`}</span>
                                </div>
                                {item.images[0] ? (
                                    <img
                                        className='item_img'
                                        alt={item.images[0].fileName}
                                        src={item.images[0].fileUrl}
                                    />
                                ) : (
                                    <img className='item_img' alt='admin_logo' src={Logo} />
                                )}
                            </div>
                        </li>
                    );
                })}
            </Styled.FlexContainer>
            <Paging
                currentPage={currentPage + 1}
                setCurrentPage={setCurrentPage}
                totalCount={tempAnnouncementList.pageInfo.totalElements}
                pageSize={6}
            />
        </Styled.Container>
    );
}

export default AnnouncementList;
