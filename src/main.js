"use strict";
/**@type {import("../typings/phaser")} */
exports.__esModule = true;
var LoadScene_1 = require("./scenes/LoadScene");
var game = new Phaser.Game({
    width: 800,
    height: 600,
    scene: [
        LoadScene_1.LoadScene
    ],
    render: {
        pixelArt: true
    }
});
