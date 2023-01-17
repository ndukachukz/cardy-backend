import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';

export default (app: Application): void => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(compression());

  // serviceRoutes
  app.use('/pre-approve', indexRouter);

  // JWT Validate middleware

  // catch 404 and forward to error handler
  app.all('*', function (_req: Request, res: Response): Response {
    return res.sendStatus(404);
  });

  app.use('*', function (err: any, req: Request, res: Response): void {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
  });
};
