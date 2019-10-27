import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Meetup from '~/pages/Meetup/DetailMeetup';
import NotFound404 from '~/pages/NotFound404';
import NewMeetup from '~/pages/Meetup/NewMeetup';
import EditMeetup from '~/pages/Meetup/EditMeetup';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/meetup/new" exact component={NewMeetup} isPrivate />
      <Route path="/meetup/:id" exact component={Meetup} isPrivate />
      <Route path="/meetup/:id/edit" exact component={EditMeetup} isPrivate />

      <Route path="*" component={NotFound404} isPrivate />
      <Route path="*" component={NotFound404} />
    </Switch>
  );
}
