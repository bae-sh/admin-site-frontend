import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as Styled from './styled';

const navList = [
    { path: '/board', name: '게시판' },
    { path: '/calendar', name: '일정' },
    { path: '/member', name: '임원진' },
];

function Nav() {
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
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
