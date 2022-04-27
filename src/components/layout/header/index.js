import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';
import { modalVisibleState, userIdState } from '../../../atoms';
import Nav from '../../nav';
import Logo from '../../../images/logo/admin_logo.png';
import * as Styled from './styled';

const NavImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover {
        .NavHover {
            visibility: visible;
        }
    }
`;
const NavHover = styled.div`
    position: absolute;
    width: 100px;
    top: 55px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: hidden;
    transition: all 0.1s;
`;
const NavBox = styled.div`
    width: 80px;
    text-align: center;
    border: 1px solid lightgray;
    background-color: white;
    padding: 4px;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 400;
    :hover {
        background-color: #e5e5e5;
    }
`;

function Header() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
    const [userToggled, setUserToggled] = React.useState(false);
    const isLoggined = useRecoilValue(userIdState);
    const setUserState = useSetRecoilState(userIdState);
    const logoutClick = () => {
        localStorage.clear();
        setUserState({ userId: '' });
    };
    return (
        <Styled.Container modalVisible={modalVisible} userToggled={userToggled}>
            <div className='innerHeader'>
                <input
                    type='image'
                    className='headerLogo'
                    src={Logo}
                    alt='Logo'
                    onClick={() => navigate('/')}
                />
                <Nav className='headerNav' />
                <div className='headerRight'>
                    <div className='user' aria-hidden='true'>
                        {isLoggined.userId === '' ? (
                            <Link to='/login'>
                                <Styled.Login>로그인</Styled.Login>
                            </Link>
                        ) : (
                            <NavImg>
                                <FaUserAlt size={20} />

                                <NavHover className='NavHover'>
                                    <NavBox>
                                        <Link to='/mypage'>프로필</Link>
                                    </NavBox>
                                    <NavBox>
                                        <Link to='/' onClick={logoutClick}>
                                            로그아웃
                                        </Link>
                                    </NavBox>
                                </NavHover>
                            </NavImg>
                        )}
                    </div>
                    <div
                        className='hamburger'
                        onClick={() => setModalVisible(!modalVisible)}
                        aria-hidden='true'
                    >
                        {!modalVisible ? <FaBars size={20} /> : <FaTimes size={20} />}
                    </div>
                </div>
            </div>
        </Styled.Container>
    );
}

export default Header;
