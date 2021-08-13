const mainController = {
    playerList: {},
    test: (req, res, next) => {
        const io = req.app.get('socketio');
        try {
            console.log('Un petit essai fructueux');
            console.log(req.body);
            mainController.playerList[req.body.socketId] = req.body.nickname;
            res.json('Joueur enregistré sur le serveur');
            io.emit('playerList', mainController.playerList)
        } catch (error) {
            res.status(404).json(error.message);
        }
    },
};

module.exports = mainController;