import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { MdLocationOn, MdEvent } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { Container, Content, Footer } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function DetailMeetup({ match }) {
  const profile = useSelector(state => state.user.profile);

  const [meetup, setMeetup] = useState({});
  const [creator, setCreator] = useState({});

  useEffect(() => {
    const { id } = match.params;
    async function loadMeetup() {
      try {
        const response = await api.get(`/meetups/${id}`);
        setCreator(response.data.creator);
        const data = {
          ...response.data,
          imageUrl: response.data.image.url,
          formattedDate: format(
            parseISO(response.data.date),
            "dd ' de ' MMMM ' às' H BBBB",
            {
              locale: pt,
            }
          ),
        };

        setMeetup(data);
      } catch (error) {
        history.push('/notfound');
      }
    }
    loadMeetup();
  }, [match.params]);

  async function handleCancel(id) {
    await api.delete(`/meetups/${id}`);
    toast.info('Meetup cancelado.');
    history.push('/dashboard');
  }

  return (
    <Container>
      <header>
        <div>
          <h1>{meetup.title}</h1>
          <h3>{creator.name}</h3>
        </div>
        {creator.id === profile.id && (
          <aside>
            <button
              onClick={() =>
                history.push(`/meetup/${meetup.id}/edit`, { meetup })
              }
              className="edit"
              type="button"
            >
              Editar
            </button>
            <button onClick={() => handleCancel(meetup.id)} type="button">
              Cancelar
            </button>
          </aside>
        )}
      </header>
      <Content>
        <img src={meetup.imageUrl} alt={meetup.title} />
        <p className="description">Descrição:</p>
        <p>{meetup.description}</p>
        <Footer>
          <p>
            <MdEvent /> {meetup.formattedDate}
          </p>
          <p>
            <MdLocationOn /> {meetup.location}
          </p>
        </Footer>
      </Content>
    </Container>
  );
}
