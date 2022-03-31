import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                    <div className='user' aria-hidden='true'>
                        <Link to='/login'>
                            <FaUserAlt size={20} />
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
