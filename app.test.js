const request = require("supertest");
const app = require("./app");

describe("Node.js Demo App", () => {
    test("Home page should return success", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "Hello! CI/CD Pipeline is working!"
        );
    });

    test("Health API should return OK", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
    });
});