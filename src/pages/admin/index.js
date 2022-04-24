/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';
import StudentList from '../../components/studentList';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import { modalVisibleState } from '../../atoms';
import { fetchStudentList } from '../../api';

function Admin() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [modalIsOpen, setModalIsOpen] = useState('none');
    const [studentList, setStudentList] = useState([]);
    const [selectNumber, setSelectNumber] = useState(0);
    useEffect(() => {
        fetchStudentList(setStudentList);
    }, []);
    console.log(studentList);
    Modal.setAppElement('#root');
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Styled.Container>
                    <Styled.HeaderLeft>
                        <span>관리자 페이지</span>
                    </Styled.HeaderLeft>
                    <Styled.Body>
                        <Styled.SubHeader>
                            <span>회원 목록</span>
                        </Styled.SubHeader>
                        <Styled.Content>
                            <Styled.ContentHeader>
                                <span>이름</span>
                                <span>학번</span>
                                <span>정보</span>
                            </Styled.ContentHeader>
                            <Styled.ContentBox>
                                {studentList.map((item, idx) => (
                                    <StudentList
                                        type='info'
                                        setModalIsOpen={setModalIsOpen}
                                        setSelectNumber={setSelectNumber}
                                        item={item}
                                        idx={idx}
                                        key={item.studentNumber}
                                    />
                                ))}
                            </Styled.ContentBox>
                        </Styled.Content>
                    </Styled.Body>
                    <Styled.Body>
                        <Styled.SubHeader>
                            <span>권한 신청</span>
                        </Styled.SubHeader>
                        <Styled.Content>
                            <Styled.ContentHeader>
                                <span>이름</span>
                                <span>학번</span>
                                <span>정보</span>
                            </Styled.ContentHeader>
                            <StudentList type='apply' setModalIsOpen={setModalIsOpen} />
                        </Styled.Content>
                    </Styled.Body>
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
                                <Styled.ModalTitle>회원정보</Styled.ModalTitle>
                                <Styled.ModalBody>
                                    <div>이름 : {`${studentList[selectNumber].name}`}</div>
                                    <div>학번 : {`${studentList[selectNumber].studentNumber}`}</div>
                                    <div>ID : {`${studentList[selectNumber].id}`}</div>
                                    <div>
                                        전화번호 : {`${studentList[selectNumber].phoneNumber}`}
                                    </div>
                                    <div>권한 : {`${studentList[selectNumber].role}`}</div>
                                </Styled.ModalBody>
                            </>
                        ) : (
                            <>
                                <Styled.ModalTitle>권한신청</Styled.ModalTitle>
                                <Styled.ModalBody>
                                    <div>이름 : 배성현</div>
                                    <div>학번 : 201802100</div>
                                    <div>현재권한 : 관리자</div>
                                    <div>신청권한 : 관리자</div>
                                    <div>
                                        <Styled.PermissionBtn>승인</Styled.PermissionBtn>
                                        <Styled.PermissionBtn>거절</Styled.PermissionBtn>
                                    </div>
                                </Styled.ModalBody>
                            </>
                        )}

                        <Styled.CloseBtn>
                            <GrFormClose onClick={() => setModalIsOpen('none')} />
                        </Styled.CloseBtn>
                    </Modal>
                </Styled.Container>
            </div>
        </PageStyled.Container>
    );
}

export default Admin;
