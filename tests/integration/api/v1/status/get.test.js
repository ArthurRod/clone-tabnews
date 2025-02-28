test("GET to /api/v1/status should return status 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const resBody = await res.json();

  const parsedUpdateAt = new Date(resBody.update_at).toISOString();
  expect(resBody.update_at).toEqual(parsedUpdateAt);

  expect(resBody.dependencies.database.version).toEqual("16.0");
  expect(resBody.dependencies.database.max_connections).toEqual(100);
  expect(resBody.dependencies.database.opened_connections).toEqual(1);
});
