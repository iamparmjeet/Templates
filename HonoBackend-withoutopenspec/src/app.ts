import { Hono } from "hono";
import { notFound } from "stoker/middlewares";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.notFound(notFound);

export default app;
