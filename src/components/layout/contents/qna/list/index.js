import React, { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

const testcase = {
    data: [
        {
            id: 20,
            authorId: 'rlatjrud1232',
            authorName: '김서경',
            title: '알고리즘 질문점',
            content: '백준 1234번 문제 모르겠어',
            createAt: '2022-04-07T16:05:12.69773',
            lastModifiedAt: '2022-04-07T16:05:12.69773',
            images: [
                {
                    fileName: '치킨사진.png',
                    fileUrl:
                        'https://d260rb3auh0wa7.cloudfront.net/qna/questionff330da2-8e56-4a4f-89f5-835699ab2b66',
                },
                {
                    fileName: '리트리버.png',
                    fileUrl:
                        'https://d260rb3auh0wa7.cloudfront.net/qna/question2185ae4a-4f90-418e-b216-18c60a1e2dca',
                },
            ],
        },
        {
            id: 23,
            authorId: 'rlatjrud1232',
            authorName: '김서경',
            title: '알고리즘 질문점',
            content: '백준 1234번 문제 모르겠어',
            createAt: '2022-04-07T16:05:31.040104',
            lastModifiedAt: '2022-04-07T16:05:31.040104',
            images: [
                {
                    fileName: '치킨사진.png',
                    fileUrl:
                        'https://d260rb3auh0wa7.cloudfront.net/qna/questiona34d6726-ff18-4b7a-9b79-16a26bca2811',
                },
                {
                    fileName: '리트리버.png',
                    fileUrl:
                        'https://d260rb3auh0wa7.cloudfront.net/qna/questiona57f11a5-2b53-4211-b9b8-eed85a4f0fe5',
                },
            ],
        },
        {
            id: 26,
            authorId: 'rlatjrud1232',
            authorName: '김서경',
            title: '알고리즘 질문점',
            content: '백준 1234번 문제 모르겠어',
            createAt: '2022-04-07T16:05:31.904591',
            lastModifiedAt: '2022-04-07T16:05:31.904591',
            images: [
                {
                    fileName: '치킨사진.png',
                    fileUrl:
                        'https://d260rb3auh0wa7.cloudfront.net/qna/question93a2d7b6-d849-49a9-8e1e-897dd16cbf40',
                },
                {
                    fileName: '리트리버.png',
                    fileUrl:
                        'https://d260rb3auh0wa7.cloudfront.net/qna/questionb7ea3c68-3d3f-4a8e-b627-85bf02746522',
                },
            ],
        },
    ],
    pageInfo: {
        currentPage: 1,
        totalPages: 2,
        numberOfElements: 3,
        pageSize: 3,
        totalElements: 6,
    },
    message: '질문 목록 조회 성공',
};

function QnaList() {
    const [currentPage, setCurrentPage] = useState(0);
    const [viewNum, setViewNum] = useState(0);
    return (
        <Styled.Container>
            <Styled.FlexContainer>
                {testcase.data.map((item) => {
                    const date = item.lastModifiedAt.split(/T|-|[.]/);
                    return (
                        <Link to={`/qna/${item.id}`} key={item.id}>
                            <li className='item_card'>
                                <div className='qna_type'>
                                    <span>과제</span>
                                </div>
                                <div className='qna_content'>
                                    <div className='qna_title'>{item.title}</div>
                                    <div className='qna_date'>{`${date[0]}년 ${date[1]}월 ${date[2]}일 ${date[3]}`}</div>
                                </div>
                                <div className='qna_viewNum'>
                                    <span>
                                        <FaRegEye size={30} />
                                    </span>
                                    <span>{viewNum}</span>
                                </div>
                                <div className='qna_author_name'>{item.authorName}</div>
                            </li>
                        </Link>
                    );
                })}
            </Styled.FlexContainer>
        </Styled.Container>
    );
}

export default QnaList;
