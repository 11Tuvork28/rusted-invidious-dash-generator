const fastify = require('fastify')()
const generate_dash_file_from_formats = require('./dashUtils');

// Declare a route
fastify.post('/', async (request, reply) => {
    let formats = request.body.formats;
    let length = request.body.videoLength;
    if (length == undefined || length == null || formats == undefined || formats == null) {
        reply.sendStatus(400);
    }
    reply.header("Content-Type", "application/xml");
    reply.status(200).send(generate_dash_file_from_formats(formats,length));
  })
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      process.exit(1)
    }
  }
  start()