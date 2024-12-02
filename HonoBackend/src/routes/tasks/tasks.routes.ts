import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema } from "stoker/openapi/schemas";

import { insertTasksSchema, selectTasksSchema } from "@/db/schema";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  tags,
  method: "get",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(selectTasksSchema),
      "The List of tasks",
    ),
  },
});

export const create = createRoute({
  path: "/tasks",
  tags,
  method: "post",
  request: {
    body: jsonContentRequired(insertTasksSchema, "The Task to create"),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      selectTasksSchema,
      "The created tasks",
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(insertTasksSchema),
      "The validation error",
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
