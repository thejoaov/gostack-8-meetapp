import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Meetup from '../app/models/Meetup';
import Subscription from '../app/models/Subscription';
import File from '../app/models/File';

const models = [User, File, Meetup, Subscription];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);

    this.mongoConnection = mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/meetapp',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );

    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
