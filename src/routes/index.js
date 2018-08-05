/**
 * API Routes
 */

import { Router } from 'express';
import HTTPStatus from 'http-status';

import NodeRoutes from './node.routes';
import ClientRoutes from './client.routes';
import StatsRoutes from './stats.routes';
import TokenRoutes from './token.routes';
import ValidationRoutes from './nodeValidation.routes'
import db from '../db/db'
import { app } from '../app'

import DevController from '../dev/free'
import ErrorController from '../controllers/error.controller'

// Middlewares
import logErrorService from '../services/log';

const routes = new Router();

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

if (!isTest)
  app();

routes.get('/', (req, res) => {
  res.status = 200
  res.send({
    'status': 'UP'
  })
})

routes.post('/', (req, res) => {
  res.status(200).send({
    'status': 'UP'
  })
})

routes.use('/client', ClientRoutes);
routes.use('/node', NodeRoutes);
routes.use('/stats', StatsRoutes);
routes.use('/swaps', TokenRoutes);
routes.use('/validations', ValidationRoutes)

routes.post('/logs/error', ErrorController.logTheError);
routes.post('/dev/free', DevController.getFreeAmount);

routes.all('*', (req, res, next) => {
  console.log('404 api not found')
  next()
});

routes.use(logErrorService);

export default routes;
