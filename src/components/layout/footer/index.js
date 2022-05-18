import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';
import { modalVisibleState, userIdState } from '../../../atoms';
import Nav from '../../nav';
import Logo from '../../../images/logo/admin_logo2.svg';
import * as Styled from './styled';

function Footer() {
    return (
        <Styled.Container>
            <div className='Footer'>footer</div>
        </Styled.Container>
    );
}

export default Footer;
