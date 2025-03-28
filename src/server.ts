import { env } from "./env";
import { app } from "./app";

//database

app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(() => {
    app.log.info(`🚀 API Running on port ${env.PORT}!`);
  });
