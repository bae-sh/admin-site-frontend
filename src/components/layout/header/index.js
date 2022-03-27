import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import Nav from '../../nav';
import Logo from '../../../images/logo/admin_logo.png';
import * as Styled from './styled';

function Header() {
    const navigate = useNavigate();
    return (
        <Styled.Container>
            <div className='innerHeader'>
                <input
                    type='image'
                    className='logo'
                    src={Logo}
                    alt='Logo'
                    onClick={() => navigate('/')}
                />
                <Nav />
                <FaUserAlt className='user' onClick={() => navigate('/login')} />
            </div>
        </Styled.Container>
    );
}

export default Header;
