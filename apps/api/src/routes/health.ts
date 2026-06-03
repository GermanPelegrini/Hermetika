import type { FastifyPluginAsync } from "fastify";
import type { ApiHealthResponse } from "@hermetika/types";

export const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get<{ Reply: ApiHealthResponse }>("/health", async () => ({
    status: "ok",
    service: "hermetika-api",
    timestamp: new Date().toISOString()
  }));
};
