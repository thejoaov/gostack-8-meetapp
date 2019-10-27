import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import Loader from 'react-loader-spinner';

import api from '~/services/api';
import history from '~/services/history';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { Container } from './styles';

export default function EditMeetup({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${id}`);
        setMeetup({
          ...response.data,
          date: parseISO(response.data.date),
        });
        setLoading(false);
      } catch (err) {
        history.push('/notfound');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      await api.put(`meetups/${id}`, data);
      toast.success('Meetup atualizado!');
      history.push(`/meetup/${id}`);
    } catch (err) {
      const errData = err.response.data;
      toast.error(
        errData && errData.error
          ? `Erro: ${errData.error}`
          : 'Erro durante a edição do Meetup, por favor, tente novamente mais tarde'
      );
      setLoading(false);
    }
  }

  const schema = Yup.object().shape({
    image_id: Yup.number().transform(value => (!value ? undefined : value)),
    title: Yup.string().required('O título é obrigatório'),
    description: Yup.string().required('A descrição é obrigatória'),
    date: Yup.date().required('A data é obrigatória'),
    location: Yup.string().required('A localização é obrigatória'),
  });

  return (
    <Container>
      {loading ? (
        <div className="loading">
          <Loader type="TailSpin" color="#fff" width={32} height={32} />
        </div>
      ) : (
        <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
          <ImageInput name="image_id" />
          <Input name="title" placeholder="Título" />
          <Input name="description" placeholder="Descrição" multiline />
          <DatePicker name="date" placeholder="Data" />
          <Input name="location" placeholder="Localização" />

          <aside>
            <button
              type="button"
              className="cancel"
              onClick={() => history.push(`/meetup/${meetup.id}`)}
              disabled={loading}
            >
              Cancelar
            </button>
            <button type="submit" disabled={loading}>
              Salvar
            </button>
          </aside>
        </Form>
      )}
    </Container>
  );
}
