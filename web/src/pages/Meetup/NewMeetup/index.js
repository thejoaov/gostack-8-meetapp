import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import api from '~/services/api';
import history from '~/services/history';

export default function EditMeetup() {
  async function handleSubmit(data) {
    console.tron.log(data);
    const response = await api.post('/meetups', data);
    const { id } = response.data;
    history.push(`/meetup/${id}`);
  }

  const schema = Yup.object().shape({
    image_id: Yup.number()
      .transform(value => (!value ? undefined : value))
      .required('A imagem é obrigatória'),
    title: Yup.string().required('O título é obrigatório'),
    description: Yup.string().required('A descrição é obrigatória'),
    date: Yup.date().required('A data é obrigatória'),
    location: Yup.string().required('A localização é obrigatória'),
  });

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />

        <Input name="title" placeholder="Título" />
        <Input name="description" multiline placeholder="Descrição" />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />
        <aside>
          <button type="submit">Criar Meetup</button>
        </aside>
      </Form>
    </Container>
  );
}
