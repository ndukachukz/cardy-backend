import express from 'express';
import indexController from '../controller/index.controller.js';
import { validateMiddleware } from '../middleware/index.js';
import { preApprovalDataSchema } from '../schema/index.schema.js';

const router = express.Router();

router
  .get('/', function (req, res) {
    res.send(req.path + 'Cardy Endpoint pre-approved Reached');
  })
  .post('/', validateMiddleware(preApprovalDataSchema), indexController);

export default router;
