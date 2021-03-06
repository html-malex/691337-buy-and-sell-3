'use strict';

const express = require(`express`);

const offersRoutes = require(`./routes/offers`);
const myRoutes = require(`./routes/my`);
const searchRoutes = require(`./routes/search`);
const registerRoutes = require(`./routes/register`);
const loginRoutes = require(`./routes/login`);

const PORT = 8080;
const PUBLIC_DIR = `markup`;

const Routes = {
  'offers': offersRoutes,
  'my-tickets': myRoutes,
  'search': searchRoutes,
  'register': registerRoutes,
  'login': loginRoutes,
};

const app = express();

app.set(`views`, `./src/express/templates`);
app.set(`view engine`, `pug`);

app.use(express.static(PUBLIC_DIR));

Object.entries(Routes).forEach(([key, value]) => app.use(`/${key}`, value));
app.get(`/`, (req, res) => res.render(`main`));

app.listen(PORT, () => console.log(`Server is on ${PORT}`));
