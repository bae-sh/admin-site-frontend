/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';
import StudentList from '../../components/studentList';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import { modalVisibleState } from '../../atoms';
import { fetchApplyList, fetchApprove, fetchReject, fetchStudentList } from '../../api';

function Admin() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [modalIsOpen, setModalIsOpen] = useState('none');
    const [studentList, setStudentList] = useState([]);
    const [applyList, setApplyList] = useState([]);
    const [selectNumber, setSelectNumber] = useState(0);
    useEffect(() => {
        fetchStudentList(setStudentList);
        fetchApplyList(setApplyList);
    }, []);
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
                            <Styled.ContentBox>
                                {applyList.map((item, idx) => (
                                    <StudentList
                                        type='apply'
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
                                    <div>이름 : {`${studentList[selectNumber]?.name}`}</div>
                                    <div>
                                        학번 : {`${studentList[selectNumber]?.studentNumber}`}
                                    </div>
                                    <div>Id : {`${studentList[selectNumber]?.userId}`}</div>
                                    <div>
                                        전화번호 : {`${studentList[selectNumber]?.phoneNumber}`}
                                    </div>
                                    <div>권한 : {`${studentList[selectNumber]?.role}`}</div>
                                </Styled.ModalBody>
                            </>
                        ) : (
                            <>
                                <Styled.ModalTitle>권한신청</Styled.ModalTitle>
                                <Styled.ModalBody>
                                    <div>이름 : {`${applyList[selectNumber]?.name}`}</div>
                                    <div>학번 : {`${applyList[selectNumber]?.studentNumber}`}</div>
                                    <div>아이디 : {`${applyList[selectNumber]?.userId}`}</div>
                                    <div>현재권한 : {`${applyList[selectNumber]?.role}`}</div>
                                    <div>
                                        신청권한 : {`${applyList[selectNumber]?.registerRoleType}`}
                                    </div>
                                    <div>
                                        <Styled.PermissionBtn
                                            onClick={async () => {
                                                await fetchApprove(applyList[selectNumber].id);
                                                await fetchApplyList(setApplyList);
                                                setModalIsOpen('none');
                                            }}
                                        >
                                            승인
                                        </Styled.PermissionBtn>
                                        <Styled.PermissionBtn
                                            onClick={async () => {
                                                await fetchReject(applyList[selectNumber].id);
                                                await fetchApplyList(setApplyList);
                                                setModalIsOpen('none');
                                            }}
                                        >
                                            거절
                                        </Styled.PermissionBtn>
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
