// Import the framework and instantiate it
import Fastify from 'fastify';
import { Rcon } from 'rcon-client';
import fastifyCors from '@fastify/cors';

const fastify = Fastify();

// Enable CORS for all routes
fastify.register(fastifyCors, {
  origin: true,
  allowedHeaders: [
      'Origin', 
      'X-Requested-With', 
      'Accept', 
      'Content-Type', 
      'Authorization'
  ],
  methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
});


// Declare a route
fastify.post('/sendMessage', async function handler(request, reply) {
  try {
    const requestBody = request.body;
    const rcon = await Rcon.connect({
      host: requestBody.host,
      port: requestBody.port,
      password: requestBody.password
    });

    if (rcon.authenticated) {
      const response = await rcon.send(requestBody.message);
      // Return the response as JSON
      return reply.code(200).send({ message: response });
    } else {
      return reply.code(401).send({ message: 'Could not authenticate!' });
    }
  } catch (error) {
    return reply.code(400).send({ message: error.message });
  }
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}