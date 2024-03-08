// Import the framework and instantiate it
import Fastify from 'fastify'
import { Rcon } from 'rcon-client'
import Cors from '@fastify/cors'
//import fastifyCors from '@fastify/cors'

const fastify = Fastify();



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
      return reply.code(200).send(await rcon.send(requestBody.message));
    }
    else {
      return reply.code(401).send({ message: 'Could not authenticate!' });
    }

  }
  catch(error){
    return reply.code(400).send({ message: error.message });
  }

  
  

})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}