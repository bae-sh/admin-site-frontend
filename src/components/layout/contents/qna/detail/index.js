import React from 'react';
import { useNavigate } from 'react-router-dom';
import QnAQuestionContent from './question';
import QnAAnswerContent from './answer';

const test = {
    data: {
        id: 2,
        authorId: 'rlatjrud1232',
        authorName: '김서경',
        title: '알고리즘 질문점',
        content: '백준 1234번 문제 모르겠어',
        createAt: '2022-04-07T16:03:42.214525',
        lastModifiedAt: '2022-04-07T16:03:42.214525',
        images: [
            {
                fileName: '치킨사진.png',
                fileUrl:
                    'https://d260rb3auh0wa7.cloudfront.net/qna/questionc34f06a4-a2d2-42b6-b12a-7bca0de3f58c',
            },
            {
                fileName: '리트리버.png',
                fileUrl:
                    'https://d260rb3auh0wa7.cloudfront.net/qna/question2e5ffbaf-84c8-4636-b836-f1349db44ae1',
            },
        ],
        answers: [
            {
                id: 5,
                authorId: 'rlatjrud1232',
                authorName: '김서경',
                content: '이 문제는 이겁니다~',
                images: [
                    {
                        fileName: '치킨사진.png',
                        fileUrl:
                            'https://d260rb3auh0wa7.cloudfront.net/qna/answerba37a492-c9ed-4b8c-a89e-e7d565ae328d',
                    },
                    {
                        fileName: '피자.png',
                        fileUrl:
                            'https://d260rb3auh0wa7.cloudfront.net/qna/answer7cb36f01-8786-42bb-9aae-ff4801e243ec',
                    },
                ],
            },
            {
                id: 8,
                authorId: 'rlatjrud1232',
                authorName: '김서경',
                content: '이 문제는 이겁니다~',
                images: [
                    {
                        fileName: '치킨사진.png',
                        fileUrl:
                            'https://d260rb3auh0wa7.cloudfront.net/qna/answerc5b45d80-7b32-4caf-81d6-20a01ae42563',
                    },
                    {
                        fileName: '피자.png',
                        fileUrl:
                            'https://d260rb3auh0wa7.cloudfront.net/qna/answerbb2fcd14-5c52-4217-a28c-7ecfade8836f',
                    },
                ],
            },
            {
                id: 11,
                authorId: 'rlatjrud1232',
                authorName: '김서경',
                content: '이 문제는 이겁니다~',
                images: [
                    {
                        fileName: '치킨사진.png',
                        fileUrl:
                            'https://d260rb3auh0wa7.cloudfront.net/qna/answerac01d5f2-a359-41cf-b70e-f3b871e8bae6',
                    },
                    {
                        fileName: '피자.png',
                        fileUrl:
                            'https://d260rb3auh0wa7.cloudfront.net/qna/answer96590785-ce54-4b9e-9a57-6156b4918176',
                    },
                ],
            },
        ],
    },
    message: '질문 조회 성공',
};

function QnADetailContent({ id }) {
    console.log(id);
    return (
        <div>
            <h1>{id}</h1>
            <QnAQuestionContent
                id={test.data.id}
                authorId={test.data.authorId}
                authorName={test.data.authorName}
                title={test.data.title}
                content={test.data.content}
                date={test.data.lastModifiedAt}
                images={test.data.images}
            />
            <QnAAnswerContent answers={test.data.answers} />
        </div>
    );
}

export default QnADetailContent;
