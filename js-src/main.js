/**@type {import("../typings/phaser")} */
import { LoadScene } from "./scenes/LoadScene";
let game = new Phaser.Game({
    width: 800,
    height: 600,
    scene: [
        LoadScene
    ],
    render: {
        pixelArt: true
    }
});
