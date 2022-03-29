import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';
import { modalVisibleState } from '../../../atoms';
import Nav from '../../nav';
import Logo from '../../../images/logo/admin_logo.png';
import * as Styled from './styled';

function Header() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState);
    const [userToggled, setUserToggled] = React.useState(false);
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
                    <div
                        className='user'
                        onClick={() => setUserToggled(!userToggled)}
                        aria-hidden='true'
                    >
                        <FaUserAlt size={20} />
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
