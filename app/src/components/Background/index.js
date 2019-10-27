import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import colors from '~/styles/colors';

export default styled(LinearGradient).attrs({
  colors: [colors.linearstart, colors.linearend],
})`
  flex: 1;
`;
