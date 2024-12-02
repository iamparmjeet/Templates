import type { PinoLogger } from "hono-pino";

import { notFound, onError } from "@/middlewares";
import { OpenAPIHono } from "@hono/zod-openapi";
import { requestId } from "hono/request-id";

import { pinoLogger } from "./middlewares/pino-logger";

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

const app = new OpenAPIHono<AppBindings>();
app.use(requestId());
app.use(pinoLogger());
// app.get("/", c => c.text(`Request ID: ${c.get("requestId")}`));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.info("Wow Error Here");
  throw new Error("Err Find");
});

app.notFound(notFound);
app.onError(onError);

export default app;
