import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './styled';

const navList = [
  { path: '/board', name: '게시판' },
  { path: '/calendar', name: '일정' },
  { path: '/member', name: '임원진' },
];

function Nav() {
  return (
    <Styled.Container>
      {navList.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
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
