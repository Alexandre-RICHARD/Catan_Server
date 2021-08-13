const mainController = {
    playerList: {},
    oneMorePlayer: (req, res, next) => {
        const io = req.app.get('socketio');
        try {
            mainController.playerList[req.body.socketId] = req.body.nickname;
            res.json('Joueur enregistré sur le serveur');
            io.emit('playerList', mainController.playerList);
        } catch (error) {
            res.status(404).json(error.message);
        }
    },
    oneLessPlayer: (req, res, next) => {
        const io = req.app.get('socketio');
        console.log(`ID : ${req.body.socketId} -> OUT`);
        delete mainController.playerList[req.body.socketId];
        io.emit('playerList', mainController.playerList);
    }
};

module.exports = mainController;