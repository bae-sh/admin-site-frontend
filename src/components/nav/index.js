import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
    modalVisibleState,
    announcementPageState,
    galleryPageState,
    qnasPageState,
} from '../../atoms';
import * as Styled from './styled';

const navList = [{ path: '/member', name: '임원진' },
    { path: '/announcement', name: '공지사항' },
    { path: '/gallery', name: '갤러리' },
    { path: '/qna', name: 'Q&A' },
    { path: '/calendar', name: '일정' },
];

function Nav() {
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
    const setAnnouncementPage = useSetRecoilState(announcementPageState);
    const setGalleryPage = useSetRecoilState(galleryPageState);
    const setQnasPage = useSetRecoilState(qnasPageState);

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
                            if (item.name === '공지사항') {
                                setAnnouncementPage(0);
                            } else if (item.name === '갤러리') {
                                setGalleryPage(0);
                            } else if (item.name === 'Q&A') {
                                setQnasPage(0);
                            }
                        }}
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'underline' : 'inherit',
                        })}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </Styled.Container>
    );
}

export default Nav;
