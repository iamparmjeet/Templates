import type { Environment } from "@/env";
import type { PinoLogger } from "hono-pino";

export interface AppBindings {
  Bindings: Environment;
  Variables: {
    logger: PinoLogger;
  };
}

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;
