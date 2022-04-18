import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getMyData } from '../../api';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';

function MyPage() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [myData, setMyData] = useState({
        id: '',
        name: '',
        phoneNumber: '',
        role: '',
        studentNumber: '',
        userId: '',
    });

    useEffect(() => {
        getMyData().then((res) => {
            setMyData(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <div>
                    <span>이름 : </span>
                    <span>{myData.name}</span>
                </div>
                <div>
                    <span>휴대폰번호 : </span>
                    <span>{myData.phoneNumber}</span>
                </div>
                <div>
                    <span>학번 : </span>
                    <span>{myData.studentNumber}</span>
                </div>
                <div>
                    <span>역할 : </span>
                    <span>{myData.role}</span>
                </div>
                <div>
                    <span>ID : </span>
                    <span>{myData.userId}</span>
                </div>
            </div>
        </PageStyled.Container>
    );
}

export default MyPage;
