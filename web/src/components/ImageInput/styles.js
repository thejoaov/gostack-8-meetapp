import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  align-self: stretch;
  border-radius: 10px;

  label {
    cursor: pointer;
    width: 100%;
    height: 300px;
    overflow: hidden;

    margin-bottom: 10px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 18px;
      color: #fff;
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
