const mongo = require('mongoose');

var schema = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    nationality : String,
    position: [String],
});

var Player = module.exports = mongo.model('player', schema, "player");
module.exports.get = function (callback, limit) {
    Player.find(callback).limit(limit);
}   