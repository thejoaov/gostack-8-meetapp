export default function mongoConfig() {
  if (process.env.NODE_ENV === 'development') {
    return `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`;
  }
  return process.env.MONGODB_URI;
}
