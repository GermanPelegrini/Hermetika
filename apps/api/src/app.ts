import cors from "@fastify/cors";
import Fastify from "fastify";
import { env } from "./env.js";
import { bootstrapRoutes } from "./routes/bootstrap.js";
import { healthRoutes } from "./routes/health.js";

export function createApp() {
  const app = Fastify({
    logger: true
  });

  app.register(cors, {
    origin: [env.WEB_URL]
  });

  app.register(healthRoutes, { prefix: "/api" });
  app.register(bootstrapRoutes, { prefix: "/api" });

  return app;
}
