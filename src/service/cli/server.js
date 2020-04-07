'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const offersRouter = require(`../routes/offers`);

const DEFAULT_PORT = 3000;

const app = express();

app.use(express.json());
app.use(`/offers`, offersRouter);

module.exports = {
  name: `--server`,
  run(args) {
    const [userPort] = args;
    const port = Number(parseInt(userPort, 10)) || DEFAULT_PORT;

    app.listen(port, () => console.log(chalk.green(`Ожидаю соединений на ${port}`)));
  },
};
