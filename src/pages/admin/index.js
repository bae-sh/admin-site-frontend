import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';
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
const ModalTitle = styled.h1`
    font-size: 32px;
    font-weight: 400;
`;
const ModalBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
    font-size: 24px;
    font-weight: 350;
    div {
        width: 70%;
        margin: 10px 0;
    }
`;
const CloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 40px;
`;
const PermissionBtn = styled.button`
    background-color: white;
    width: 60px;
    padding: 5px;
    border-radius: 4px;
    margin-right: 20px;
    border: 1px solid #111;
    cursor: pointer;
`;
function Admin() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [modalIsOpen, setModalIsOpen] = useState('2');
    Modal.setAppElement('#root');
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
                                    <StudentInfoBtn onClick={() => setModalIsOpen('info')}>
                                        보기
                                    </StudentInfoBtn>
                                </ContentList>
                            </ContentBox>
                        </Content>
                    </Body>
                    <Modal
                        isOpen={modalIsOpen !== 'none'}
                        style={{
                            content: {
                                width: '600px',
                                height: '550px',
                                margin: 'auto',
                                padding: '60px',
                            },
                        }}
                    >
                        {modalIsOpen === 'info' ? (
                            <>
                                <ModalTitle>회원정보</ModalTitle>
                                <ModalBody>
                                    <div>이름 : 배성현</div>
                                    <div>학번 : 201802100</div>
                                    <div>ID : b5460881</div>
                                    <div>이메일 : hyeon1293@gmail.com</div>
                                    <div>전화번호 : 010-9160-1798</div>
                                    <div>권한 : 관리자</div>
                                </ModalBody>
                            </>
                        ) : (
                            <>
                                <ModalTitle>권한신청</ModalTitle>
                                <ModalBody>
                                    <div>이름 : 배성현</div>
                                    <div>학번 : 201802100</div>
                                    <div>현재권한 : 관리자</div>
                                    <div>신청권한 : 관리자</div>
                                    <div>
                                        <PermissionBtn>승인</PermissionBtn>
                                        <PermissionBtn>거절</PermissionBtn>
                                    </div>
                                </ModalBody>
                            </>
                        )}

                        <CloseBtn>
                            <GrFormClose onClick={() => setModalIsOpen('none')} />
                        </CloseBtn>
                    </Modal>
                </Styled.Container>
            </div>
        </PageStyled.Container>
    );
}

export default Admin;
