import got from 'got';
import { ApiError } from "../errors/apiErrors";
import { config } from "../config/config";


export class HttpClient {
    constructor(
        private readonly baseUrl: string = config.apiBaseUrl,
    ) {}
    private url(path: string) {
        return `${this.baseUrl}${path}`;
    }

    async get(path: string, id: number) {
        try {
            const res = await got.get(`${this.url(path)}/${id}`);

            return res.body;
        } catch (err) {
            throw this.handleError(err);
        }
    }

    async post(path: string, body: any) {
        try {
            const res = await got.post(this.url(path), body);

            return res.body;
        } catch (err) {
            throw this.handleError(err);
        }
    }

    async delete(path: string, id: number) {
        try {
            const res = await got.delete(`${this.url(path)}/${id}`);

            return res.body;
        } catch (err) {
            throw this.handleError(err);
        }
    }


    private handleError(err: any) {
        if (err.response) {
            return new ApiError(
                err.response.body?.message || "API Error",
                err.response.status,
                err.response.body
            );
        }

        return new ApiError(
            err.message || "Network Error",
            0 // 0 typically indicates a network error
        );
    }
}