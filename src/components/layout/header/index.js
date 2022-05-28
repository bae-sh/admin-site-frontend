import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';
import { getMyProfileImg } from '../../../api';
import { modalVisibleState, userIdState } from '../../../atoms';
import Nav from '../../nav';
import Logo from '../../../images/logo/admin_logo2.svg';
import profileImg from '../../../images/profile.png';
import * as Styled from './styled';

const NavImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const NavTap = styled.div`
    position: absolute;
    width: 100px;
    top: 55px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
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
    .logout {
        color: red;
    }
    :hover {
        background-color: #e5e5e5;
    }
`;
const Avata = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    @media screen and (max-width: 1023px) {
        width: 24px;
        height: 24px;
    }
`;

function Header() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
    const [userToggled, setUserToggled] = React.useState(false);
    const [tapVisible, setTapVisible] = React.useState(false);
    const isLoggined = useRecoilValue(userIdState);
    const setUserState = useSetRecoilState(userIdState);
    const [myImg, setMyImg] = React.useState(profileImg);
    const logoutClick = () => {
        localStorage.clear();
        setUserState({ userId: '' });
    };

    React.useEffect(() => {
        getMyProfileImg(setMyImg, profileImg);
    }, [isLoggined]);

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
                <div className='headerNav'>
                    <Nav />
                </div>
                <div className='headerRight'>
                    <div className='user' aria-hidden='true'>
                        {isLoggined.userId === '' ? (
                            <Link to='/login'>
                                <Styled.Login>로그인</Styled.Login>
                            </Link>
                        ) : (
                            <NavImg onClick={() => setTapVisible(!tapVisible)}>
                                {/* <FaUserAlt size={20} /> */}
                                <Avata src={myImg} />
                                <NavTap visible={tapVisible}>
                                    <NavBox>
                                        <Link to='/mypage'>프로필</Link>
                                    </NavBox>
                                    <NavBox>
                                        <Link className='logout' to='/' onClick={logoutClick}>
                                            로그아웃
                                        </Link>
                                    </NavBox>
                                </NavTap>
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
