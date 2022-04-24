import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import { modalVisibleState } from '../../atoms';

const Body = styled.div`
    margin: 30px 10px;
    padding: 10px;
`;
const Content = styled.div`
    border: 1px solid black;
    margin-top: 20px;
    height: 50vh;
    padding: 20px;
`;
const ContentHeader = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    font-weight: 400;
    padding: 10px 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
`;
const ContentBox = styled.div`
    height: 40vh;
    overflow: scroll;
`;
const ContentList = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    font-weight: 350;
    padding: 10px;
`;
const StudentInfoBtn = styled.button`
    border: 1px solid gray;
    border-radius: 6px;
    padding: 2px;
    width: 40px;
    cursor: pointer;
    background-color: white;
`;
function Admin() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Styled.Container>
                    <Styled.HeaderLeft>
                        <span>관리자 페이지</span>
                    </Styled.HeaderLeft>
                    <Body>
                        <Styled.SubHeader>
                            <span>회원 목록</span>
                        </Styled.SubHeader>
                        <Content>
                            <ContentHeader>
                                <span>이름</span>
                                <span>학번</span>
                                <span>정보</span>
                            </ContentHeader>
                            <ContentBox>
                                <ContentList>
                                    <span>배성현</span>
                                    <span>201802100</span>
                                    <StudentInfoBtn>보기</StudentInfoBtn>
                                </ContentList>
                            </ContentBox>
                        </Content>
                    </Body>
                </Styled.Container>
            </div>
        </PageStyled.Container>
    );
}

export default Admin;
