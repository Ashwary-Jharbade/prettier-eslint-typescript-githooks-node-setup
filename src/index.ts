import express from 'express';

const main = (): void => {
  let a: any = { k1: 'v1', k2: 'v2' };
  var b = Object.assign({}, a, { k3: 'v3' });
  console.log(b);
  const app = express();
  console.log();

  for (const i of a) {
    console.log(i);
  }

  app.get('/', (_, res) => {
    res.json({ status: 'success' });
  });

  app.listen(8000, () => {
    console.log('server is listening at http://localhost:8000');
  });
};

main();
