import type { FastifyPluginAsync } from "fastify";
import { appConfig } from "@hermetika/config";
import type { BootstrapSummary } from "@hermetika/types";
import { apiModules } from "../modules.js";

export const bootstrapRoutes: FastifyPluginAsync = async (app) => {
  app.get<{ Reply: BootstrapSummary }>("/bootstrap", async () => ({
    appName: appConfig.name,
    roles: ["user", "business"],
    purchaseMethods: ["ticket", "code", "qr"],
    modules: [...apiModules]
  }));
};
