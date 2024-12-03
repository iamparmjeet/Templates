import { testClient } from "hono/testing";
import { describe, expect, expectTypeOf, it } from "vitest";

import createApp, { createTestApp } from "@/lib/create-app";

import router from "./tasks.index";

describe("tasks List", () => {
  it("responds with an array", async () => {
    const testRouter = createTestApp(router);
    const response = await testRouter.request("/tasks");
    const result = await response.text();
    console.log(result);
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    expectTypeOf(result).toBeArray();
  });

  it("responds with an array again", async () => {
    const client = testClient(createApp().route("/", router));
    const res = await client.tasks.$get();
    const json = await res.json();
    expectTypeOf(json).toBeArray();
  });
});
