import { Router } from 'express';
import multer from 'multer';
import cors from 'cors';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import OrganizingController from './app/controllers/OrganizingController';
import SubscriptionController from './app/controllers/SubscriptionController';

const routes = new Router();

const upload = multer(multerConfig);

routes.use(cors());

routes.get('/', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Fortaleza',
    }),
    message: `Welcome to ${process.env.APP_NAME}, have a nice day!`,
  });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/meetups', MeetupController.index);
routes.post('/meetups', MeetupController.store);
routes.put('/meetups/:id', MeetupController.update);
routes.get('/meetups/:id', MeetupController.show);
routes.delete('/meetups/:id', MeetupController.delete);

routes.get('/organizing', OrganizingController.index);

routes.get('/subscriptions', SubscriptionController.index);
routes.delete('/subscriptions/:id', SubscriptionController.delete);
routes.post('/meetups/:meetupId/subscriptions', SubscriptionController.store);

export default routes;
