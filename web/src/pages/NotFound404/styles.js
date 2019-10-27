import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  color: #fff;
  text-align: center;

  justify-content: center;
  h1 {
    font-size: 150px;
  }
  h2 {
    font-size: 60px;
    margin-bottom: 50px;
  }
  h3 {
    font-size: 20px;
    a {
      color: #f94d6a;
      transition: all 0.2s;
      &:hover {
        color: ${lighten(0.1, '#F94D6A')};
      }
    }
  }
`;
