import { HttpClient } from "./httpClient";

export class ApiService {
    constructor(
        private readonly http: HttpClient
    ) {}

    async getJob(id: number = 1) {
        return this.http.get("/job", id);
    }

    async postJob() {
        const body: {[key: string]: any} = {
            job: {
        jobDetails: {
            title: "QA title1",
            location: "Mount Pleasant Township, Pennsylvania, United States",
            description: {
                details: ""
            },
            experienceInYears: 1,
            paymentFrequency: "Daily",
            salary: 100,
            currency: "Bolivian",
            department: "Engineering",
            industry: "Pharmacy",
            profile: "AUT",
            employmentType: "Labor",
            jobFunction: "Frontend Developer",
            experience: "Senior Level",
            workMode: "Remote",
            skills: []
        },
        jobStatus: "DRAFT"
    },
    jobCreationStatus: {
        jobStep: "JOB_DETAILS",
        jobSaveMode: "DRAFT"
    }
        };
        return this.http.post("/job", body);
    }

    async deleteJob() {
        const id = 462
        return this.http.delete("/job", id);
    }
}