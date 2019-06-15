import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: string = '8080';

app.get('/', (_: Request, res: Response) => {
  res.json({
    message: 'Another message',
    status: 'success'
  });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('Listening on port ' + port);
});
