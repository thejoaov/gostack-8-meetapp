import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  min-width: 300px;
  padding: 30px;
  color: #fff;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    div {
      display: block;

      h3 {
        color: #999;
      }
    }
    h1 {
      color: #fff;
      font-size: 32px;
    }

    button {
      height: 42px;
      width: 116px;
      margin-left: 15px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.5s;

      &:hover {
        background: ${lighten(0.1, '#F94D6A')};
      }
    }
    .edit {
      background: #4dbaf9;
      &:hover {
        background: ${lighten(0.2, '#4dbaf9')};
      }
    }
  }
`;
export const Content = styled.div`
  font-size: 18px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 25px;
  }

  p {
    line-height: 32px;
  }
`;

export const Footer = styled.div`
  font-size: 16px;
  width: 500px;
  display: flex;
  margin: 30px;
  color: #999;
  justify-content: space-between;
  flex-direction: row;

  p {
    display: flex;
    align-items: center;

    > :first-child {
      margin-right: 5px;
    }
  }
`;
