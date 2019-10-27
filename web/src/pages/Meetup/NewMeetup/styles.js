import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      font-size: 14px;
      border: 0;
      border-radius: 4px;
      width: 100%;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 150px;
      min-height: 150px;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      line-height: 25px;
      padding: 10px 15px;
      color: #fff;
      margin: 0 0 10px;
      align-self: center;
      font-size: 14px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: center;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    aside {
      width: 100%;
      display: flex;
      justify-content: flex-end;

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
  }
`;
