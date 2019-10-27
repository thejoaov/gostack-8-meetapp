import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 10px;

  label {
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    p {
      margin: 20px 0;
      color: #fb6f91;
      align-self: center;
      font-weight: bold;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
