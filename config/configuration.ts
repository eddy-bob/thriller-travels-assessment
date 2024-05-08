export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  nodeEnv: process.env.NODE_ENV,

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRE,
  },
  rabbitMQ: {
    host: process.env.RABBITMQ_HOST,
    user_queue: process.env.RABBITMQ_USER_QUEUE,
    api_queue: process.env.RABBITMQ_API_QUEUE,
    auth_queue: process.env.RABBITMQ_AUTH_QUEUE,
    bookings_queue: process.env.RABBITMQ_BOOKINGS_QUEUE,
    reservations_queue: process.env.RABBITMQ_RESERVATIONS_QUEUE,
  },
});
