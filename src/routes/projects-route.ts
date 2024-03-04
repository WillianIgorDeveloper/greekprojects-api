import { Router } from "express";
import { loadProjects } from "../controllers/projects-controller";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await loadProjects();

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default router;
