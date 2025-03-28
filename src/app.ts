import fastify from "fastify";
import { routes } from "@/infra/http/routes";
import { env } from "./env";

import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { ZodError } from "zod";
import fastifyJwt from "@fastify/jwt";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

const logger = app.log;

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});
app.register(helmet);
app.register(cors);
app.register(routes);
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", errors: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    logger.error(error);
  } else {
    // TODO: should log to an external tool
  }
  return reply.status(500).send({ message: "Internal server error." });
});

export { app, logger };
