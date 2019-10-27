import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';
import colors from '~/styles/colors';

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator color={colors.ctabutton} />
    </Container>
  );
}
