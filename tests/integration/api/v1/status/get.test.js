let baseUrl = "http://localhost:3000";

test("GET to /api/v1/status should return 200", async () => {
  let res = await fetch(`${baseUrl}/api/v1/status`);

  expect(res.status).toEqual(200);
})