import express from "express";
import cors from "cors";
import "dotenv/config";
import projectsRouter from "./routes/projects-route";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/projects", projectsRouter);

server.listen(process.env.PORT ?? 2000, () => {
  console.log(`✔️  Server listening on port ${process.env.PORT ?? 2000}`);
});
