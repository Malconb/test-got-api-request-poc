import { ApiService } from "./services/api.service";
import { HttpClient } from "./services/httpClient";
import getLogger from "./utils/logger";

const logger = getLogger();

async function main() {
    const start = Date.now();
    const http = new HttpClient();
    const api = new ApiService(http);

    try{
        const jobData = await api.getJob();
        console.log(jobData);
        logger.info(`Response from /job: ${jobData}`);
        //const jobData = await api.postJob();
        // logger.info("Response from /job: ", jobData);
        //const jobData = await api.deleteJob();
        //logger.info(`Response from /job: ${jobData}`);
    } catch (err) {
        console.error("Error: ", err);
        logger.error(`Error: ${err}`);  
    }
    const end = Date.now();
    logger.info(`Execution time: ${end - start} ms`);
}

main();
