import { createApp } from "./app.js";
import { env } from "./env.js";

const app = createApp();

const start = async () => {
  try {
    await app.listen({
      port: env.API_PORT,
      host: "0.0.0.0"
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

void start();
