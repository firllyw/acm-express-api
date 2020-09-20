const Player = require("../model/player");

exports.index = function (req, res) {
    let param = req.query['name']
    Player.find(function(err, players) {
        res.json({
            message:"ok",
            data: players
        })
        if(err) {
            res.json({
                status: err.status,
                message:err
            })
        }
    })
};

exports.add = function (req, res) {
    const player = new Player(req.body.data);
    player.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err => {
        res.json({
            status: err.status,
            message:err
        })
    })
};
