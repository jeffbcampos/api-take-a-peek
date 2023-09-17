import { Router } from "express";
import { Request, Response } from "express";
import { createEvaluationController } from "../useCase/evaluationUseCase/index";

const router = Router()

router.post('/evaluation', async (request: Request, response: Response) => {
    return createEvaluationController.handle(request, response)
})

export { router as evaluationRouter };