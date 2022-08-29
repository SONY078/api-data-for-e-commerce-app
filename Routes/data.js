const express = require('express');
const dataController = require('../Controllers/content')
const DataRouter = express.Router();
DataRouter.route('/products').get(dataController);
module.exports = DataRouter;