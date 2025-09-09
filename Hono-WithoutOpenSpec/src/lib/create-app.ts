import type { AppBindings } from "@/lib/types";

import { pinoLogger } from "@/middleware/pino-logger";
import { Hono } from "hono";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

export function createRouter() {
  return new Hono<AppBindings>({
    strict: false,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use(serveEmojiFavicon("⛳"));
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}
