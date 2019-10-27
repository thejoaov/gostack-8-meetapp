import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  min-width: 300px;
  padding: 30px;

  ul {
    width: 100%;
    margin-top: 30px;
  }

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 32px;
    }

    button {
      height: 44px;
      width: 172px;
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
    }
  }
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  height: 64px;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 18px;
    color: #fff;
    margin-left: 30px;
  }

  p {
    font-size: 16px;
    margin-right: 30px;
    color: #888;
  }

  &:hover {
    background: ${lighten(0.08, 'rgba(255, 255, 255, 0.1)')};
  }
`;
