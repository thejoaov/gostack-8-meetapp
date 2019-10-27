import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import Meetup from '~/components/Meetup';

import { Container, List, Empty, EmptyText } from './styles';
import Background from '~/components/Background';
import colors from '~/styles/colors';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadSubscriptions() {
    setLoading(true);

    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(item) {
    try {
      await api.delete(`subscriptions/${item.id}`);
      Alert.alert(
        'Success',
        `Sua inscrição no meetup "${item.meetup.title}" foi cancelada.`,
      );
      loadSubscriptions();
    } catch (error) {
      const message = error.response.data.error;
      Alert.alert('Error', message);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        {loading && <Loading />}

        {!loading &&
          (subscriptions.length ? (
            <List
              data={subscriptions}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Meetup
                  data={item.meetup}
                  handleCancel={() => handleCancel(item)}
                />
              )}
            />
          ) : (
            <Empty>
              <Icon name="event-busy" size={45} color={colors.placeholder} />
              <EmptyText>
                Você ainda não se inscreveu em nenhum meetup
              </EmptyText>
            </Empty>
          ))}
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-activity" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
