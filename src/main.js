"use strict";
export const __esModule = true;
import { LoadScene } from "./scenes/LoadScene";
var game = new Phaser.Game({
    width: 800,
    height: 600,
    scene: [
        LoadScene
    ],
    render: {
        pixelArt: true
    }
});
