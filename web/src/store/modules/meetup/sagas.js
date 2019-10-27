import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { meetupFailure, meetupSuccess } from './actions';

export function* newMeetup({ payload }) {
  try {
    const { id, file_id, title, description, date, location } = payload.data;

    const meetup = {
      file_id,
      title,
      description,
      date,
      location,
    };

    const response = yield call(api.post, 'meetups', meetup);

    toast.success('Perfil atualizado com sucesso');

    yield put(meetupSuccess(response.data));

    history.push(`/meetups/${id}`);
  } catch (error) {
    toast.error('Erro ao atualizar seu perfil, confira seus dados');
    yield put(meetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, file_id, title, description, date, location } = payload.data;
    const meetup = {
      file_id,
      title,
      description,
      date,
      location,
    };

    const response = yield call(api.put, `/meetups/${id}`, meetup);

    toast.success('Perfil atualizado com sucesso');

    yield put(meetupSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar seu perfil, confira seus dados');
    yield put(meetupFailure());
  }
}
export default all([
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
