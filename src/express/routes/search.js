'use strict';

const express = require(`express`);
const searchRouter = new express.Router();

searchRouter.get(`/`, (req, res) => res.render(`search/search-result`));

module.exports = searchRouter;
