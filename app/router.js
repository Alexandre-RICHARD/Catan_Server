const {
    Router
} = require('express');
const router = Router();

const mainController = require('./controllers/mainController');

router.post('/register', mainController.oneMorePlayer);
router.post('/disconnect', mainController.oneLessPlayer);
router.post('/chatmessage', mainController.messageOnChat)

module.exports = router;