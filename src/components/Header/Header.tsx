import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';

import { User } from './../../state/types';

import './header.scss';

interface Props {
  onLogout: () => void;
  user: User;
}

export const Header = ({ onLogout, user }: Props) => {
  return (
    <div className="header">
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="#">Trial Messenger</NavbarBrand>

        <Nav navbar>
          <NavItem>
            <NavLink href="#" onClick={onLogout}>
              <span>
                Logout <strong>{user.username}</strong>
              </span>
              <img src={user.avatar} alt="Avatar" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
