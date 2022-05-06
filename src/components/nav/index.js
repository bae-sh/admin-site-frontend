import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalVisibleState, qnasPageState } from '../../atoms';
import * as Styled from './styled';

const navList = [
    { path: '/announcement', name: '공지사항' },
    { path: '/gallery', name: '갤러리' },
    { path: '/qna', name: 'Q&A' },
    { path: '/calendar', name: '일정' },
    { path: '/member', name: '임원진' },
];

function Nav() {
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
    const setQnasPage = useRecoilState(qnasPageState)[1];

    return (
        <Styled.Container modalVisible={modalVisible}>
            {navList.map((item) => (
                <li key={item.name}>
                    <NavLink
                        to={item.path}
                        onClick={() => {
                            if (modalVisible) {
                                setModalVisible(false);
                            }
                            if (item.name === 'Q&A') {
                                setQnasPage(0);
                            }
                        }}
                        style={({ isActive }) => ({ fontWeight: isActive ? '900' : 'inherit' })}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </Styled.Container>
    );
}

export default Nav;
