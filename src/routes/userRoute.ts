import { Router } from 'express';
import { createUserController } from '../useCase/userUseCase/create';


const router = Router();

router.post('/createUser', (request, response) => {
  return createUserController.handle(request, response);
});

export { router as userRouter };