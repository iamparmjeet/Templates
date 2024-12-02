import env from "@/env";
import { logger } from "hono-pino";
import { pino } from "pino";

export function pinoLogger() {
  return logger({
    pino: pino(
      {

        level: env.LOG_LEVEL || "info",
      },
      env.NODE_ENV === "production"
        ? undefined
        : pino.transport({
          target: "pino-pretty",
          options: { colorize: true },
        }),
    ),
    http: {
      referRequestIdKey: "requestId", // Use the updated key
    },
  });
}
