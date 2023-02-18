import {Router} from 'express';
import { registerC2BCallback, simulateC2B, stkPush } from '../contollers/MpesaControllers.js';
import {validationMiddleware} from '../joi/middleware/middleware.js';
import {initPaymentSchema} from '../joi/schemas/schema.js';


const router = Router();

router.post('/stkpush/init', validationMiddleware(initPaymentSchema.params,  'body'), stkPush);
router.post('/c2b/callback/register', registerC2BCallback);
router.post('/c2b/simulate', simulateC2B);

export default router;