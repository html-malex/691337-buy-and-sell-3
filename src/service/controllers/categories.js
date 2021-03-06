'use strict';

const {storage} = require(`../../storage`);

module.exports.getAll = async (req, res) => {
  const categories = storage.getCategories();
  return res.json(categories);
};
