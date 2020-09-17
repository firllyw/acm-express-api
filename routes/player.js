const router = require('express').Router();
var controller = require('../controller/player')

router.route('/').get(controller.index).post(controller.add)



module.exports = router;