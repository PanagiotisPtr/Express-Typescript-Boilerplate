import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req , res) => {
  res.json({
    message: 'Hello, World!',
    status: 'success'
  });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('Listening on port ' + port);
});
