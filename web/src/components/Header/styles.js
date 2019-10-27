import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 10px 0 20px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-left: 10px;

      &:hover {
        fill: #fff;
      }
    }
  }

  aside {
    font-size: 14px;
    display: flex;
    align-items: center;

    a {
      transition: all 0.2s;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid #eee;
  transition: all 0.5s;

  div {
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 15px;
  }
`;

export const LogoutButton = styled.button`
  margin-left: 30px;
  height: 44px;
  width: 71px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.5s;

  &:hover {
    background: ${lighten(0.08, '#F94D6A')};
  }
`;
