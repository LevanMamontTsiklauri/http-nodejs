import { createServer } from 'http';

createServer((req, res) => {
  res.write('Checking deployment');
  res.end();
}).listen(process.env.PORT);
