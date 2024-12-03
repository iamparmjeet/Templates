import index from "@/index.route";
import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import tasks from "@/routes/tasks/tasks.index";

const app = createApp();

const routes = [
  index,
  tasks,
] as const;

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = typeof routes[number];

export default app;
