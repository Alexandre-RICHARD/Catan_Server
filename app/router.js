const {
    Router
} = require('express');
const router = Router();

const mainController = require('./controllers/mainController');

router.post('/register', mainController.test);

module.exports = router;