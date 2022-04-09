import axios from 'axios';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { url } from '../../url';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';

function Board() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const onClick = () => {
        axios({
            method: 'post',
            url: `${url}/qna`,
            data: { title: '1234', content: '123' },
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5MzMyMjM0LCJleHAiOjE2NDkzMzQwMzR9.Rsg8bZvaMF9cuH9UeTQqr3VSWhYP59YoNz0n1O0Ns4M',
            },
        })
            .then((response) => {
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>Board</div>
            <button type='button' onClick={onClick}>
                btn
            </button>
        </PageStyled.Container>
    );
}

export default Board;
