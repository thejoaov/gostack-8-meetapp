import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, Profile, LogoutButton } from './styles';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar === null
                  ? 'https://api.adorable.io/avatars/40/abott@adorable.png'
                  : profile.avatar.url
              }
              alt="Profile"
            />
          </Profile>
          <LogoutButton onClick={handleLogout} type="button">
            Sair
          </LogoutButton>
        </aside>
      </Content>
    </Container>
  );
}
