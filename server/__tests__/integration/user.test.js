import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../../src/app';
import truncate from '../util/truncate';

import factory from '../factories';

describe('Users tests', () => {
  beforeEach(async done => {
    await truncate();
    done();
  });

  it('Should encrypt user password when new user created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('Should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('Should be able to login', async () => {
    const user = await factory.attrs('User');

    // Create user
    await request(app)
      .post('/users')
      .send(user);

    const { email, password } = user;
    // Login
    const response = await request(app)
      .post('/sessions')
      .send({ email, password });

    expect(response.status).toBe(200);
  });

  it('Should not be able to login without a valid email or password', async () => {
    const user = await factory.attrs('User', {
      email: 'nao',
      password: 'nao',
    });

    // Create user
    await request(app)
      .post('/users')
      .send(user);

    const { email, password } = user;
    // Login
    const response = await request(app)
      .post('/sessions')
      .send({ email, password });

    expect(response.status).toBe(400);
  });

  it('Should be able to retrieve token', async () => {
    const user = await factory.attrs('User');

    // Create user and login
    await request(app)
      .post('/users')
      .send(user);
    const { email, password } = user;

    // Login
    const response = await request(app)
      .post('/sessions')
      .send({ email, password });
    expect(response.body).toHaveProperty('token');
  });

  it('Should have a valid token', async () => {
    const user = await factory.attrs('User');

    // Create user and login
    await request(app)
      .post('/users')
      .send(user);
    const { email, password } = user;

    // Login
    const login = await request(app)
      .post('/sessions')
      .send({ email, password });

    // Retrieve token
    const { token } = login.body;

    // Validate token using some route that needs it
    const response = await request(app)
      .get('/organizing')
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(200);
  });

  it('Should be able to update his profile', async () => {
    const user = await factory.attrs('User');

    // Create user and login
    await request(app)
      .post('/users')
      .send(user);
    const { email, password } = user;

    // Login
    const login = await request(app)
      .post('/sessions')
      .send({ email, password });

    // Retrieve token
    const { token } = login.body;

    // Update profile
    const name = 'Joseph Joestar';
    const newEmail = 'joseph@joestar.com';
    const response = await request(app)
      .put('/users')
      .send({ name, email: newEmail })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.body.name).toBe(name);
  });

  it('Should not be able to udpate profile without a valid token', async () => {
    const user = await factory.attrs('User');

    // Create user and login
    await request(app)
      .post('/users')
      .send(user);
    const { email, password } = user;

    // Login
    const login = await request(app)
      .post('/sessions')
      .send({ email, password });

    // Retrieve token
    const { token } = login.body;

    // Update profile
    const name = 'Joseph Joestar';
    const newEmail = 'joseph@joestar.com';
    const response = await request(app)
      .put('/users')
      .send({ name, email: newEmail })
      .set({ Authorization: `Bearer ${token}sadas` });

    expect(response.status).toBe(401);
  });

  it('Should be able to change the password', async () => {
    const user = await factory.attrs('User');

    // Create user and login
    await request(app)
      .post('/users')
      .send(user);
    const { email, password } = user;

    // Login
    const login = await request(app)
      .post('/sessions')
      .send({ email, password });

    // Retrieve token
    const { token } = login.body;

    // Update profile
    const newPassword = '12345678';
    const response = await request(app)
      .put('/users')
      .send({ email, password: newPassword, confirmPassword: newPassword })
      .set({ Authorization: `Bearer ${token}` });

    expect(response.status).toBe(200);
  });
});
