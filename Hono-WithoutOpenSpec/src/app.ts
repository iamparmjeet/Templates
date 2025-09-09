import createApp from "@/lib/create-app";
import index from "@/routes/index.routes";

const app = createApp();

const routes = [
  index,
];

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.info("Info Error");
  throw new Error("Error Page");
});

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
