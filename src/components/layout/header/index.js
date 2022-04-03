import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';
import { modalVisibleState, userIdState } from '../../../atoms';
import Nav from '../../nav';
import Logo from '../../../images/logo/admin_logo.png';
import * as Styled from './styled';

function Header() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
    const [userToggled, setUserToggled] = React.useState(false);
    const isLoggined = useRecoilValue(userIdState);
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
                        <Link to='/login'>
                            {isLoggined.userId === '' ? (
                                <Styled.Login>로그인</Styled.Login>
                            ) : (
                                <FaUserAlt size={20} />
                            )}
                        </Link>
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
