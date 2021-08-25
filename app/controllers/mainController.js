const mainController = {
    playerList: {},
    oneMorePlayer: (req, res, next) => {
        const io = req.app.get('socketio');
        try {
            if (Object.values(mainController.playerList).find(element => element === req.body.nickname) === undefined ) {
                mainController.playerList[req.body.socketId] = req.body.nickname;
                res.json('Joueur enregistré sur le serveur');
                io.emit('playerList', Object.values(mainController.playerList));
            }
            else {
                return res.status(403).json('nicknameAlreadyUse')
            }
        } catch (err) {
            res.status(404).json(err.message);
        }
    },
    oneLessPlayer: (req, res, next) => {
        const io = req.app.get('socketio');
        console.log(`ID : ${req.body.socketId} -> OUT`);
        delete mainController.playerList[req.body.socketId];
        io.emit('playerList', Object.values(mainController.playerList));
    },
    messageOnChat: (req, res, next) => {
        console.log(req.body);
        const io = req.app.get('socketio');
        io.emit('newGlobalMessage', {talker: req.body.talker, time: req.body.time, message: req.body.message});
        try {
            res.json('Message reçu');
        } catch (err) {
            res.status(404).json(err.message);
        }
    }
};

module.exports = mainController;