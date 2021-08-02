const express = require('express'),
    router = express.Router(),
    hello = require('../controllers/hello')

// call hello.hello function 
router.get('/', hello.hello)
// export router
module.exports = router