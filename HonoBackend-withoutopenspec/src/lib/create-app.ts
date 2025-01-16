import type { AppBindings } from "@/lib/types";

import { pinoLogger } from "@/middleware/pino-logger";
import { Hono } from "hono";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

export default function createApp() {
  const app = new Hono<AppBindings>();
  app.use(serveEmojiFavicon("⛳"));
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}
