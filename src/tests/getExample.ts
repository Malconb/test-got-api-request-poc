import { describe } from "node:test";
import { ApiService } from "../services/api.service";
import { HttpClient } from "../services/httpClient";
import { expect } from "@jest/globals";


describe("GET /job", () => {
    const http = new HttpClient();
    const api = new ApiService(http);

    it("should return 200 and valid body", async () => {
        const response = await api.getJob();

        expect(response).toBe(200)
    });
})