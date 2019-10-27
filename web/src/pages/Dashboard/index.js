import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Container, Meetup } from './styles';
import history from '~/services/history';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('meetups');
      const data = response.data.map(m => ({
        ...m,
        formattedDate: format(parseISO(m.date), "d 'de' MMMM', às' h'h'", {
          locale: pt,
        }),
      }));
      setMeetup(data);
    }
    loadSchedule();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <button type="button" onClick={() => history.push('/meetup/new')}>
          Novo Meetup
        </button>
      </header>
      <ul>
        {meetup.map(item => (
          <Meetup
            onClick={() => history.push(`/meetup/${item.id}`, { item })}
            key={item.title}
            past={item.past}
          >
            <strong>{item.title}</strong>
            <p>{item.creator.name}</p>
            <p>{item.formattedDate}</p>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
