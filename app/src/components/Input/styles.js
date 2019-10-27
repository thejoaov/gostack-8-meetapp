import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: ${colors.input};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.placeholder,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${colors.font};
`;
