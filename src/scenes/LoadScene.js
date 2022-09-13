"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LoadScene = void 0;
var CST_1 = require("../CST");
var MenuScene_1 = require("./MenuScene");
var LoadScene = /** @class */ (function (_super) {
    __extends(LoadScene, _super);
    function LoadScene() {
        return _super.call(this, {
            key: CST_1.CST.SCENES.LOAD
        }) || this;
    }
    LoadScene.prototype.init = function () {
    };
    LoadScene.prototype.loadImages = function () {
        this.load.setPath("./assets/image");
        for (var prop in CST_1.CST.IMAGE) {
            this.load.image(CST_1.CST.IMAGE[prop], CST_1.CST.IMAGE[prop]);
        }
    };
    LoadScene.prototype.loadAudio = function () {
        this.load.setPath("./assets/audio");
        for (var prop in CST_1.CST.AUDIO) {
            //@ts-ignore
            this.load.audio(CST_1.CST.AUDIO[prop], CST_1.CST.AUDIO[prop]);
        }
    };
    LoadScene.prototype.loadSprites = function (frameConfig) {
        this.load.setPath("./assets/sprite");
        for (var prop in CST_1.CST.SPRITE) {
            //@ts-ignore
            this.load.spritesheet(CST_1.CST.SPRITE[prop], CST_1.CST.SPRITE[prop], frameConfig);
        }
    };
    LoadScene.prototype.preload = function () {
        var _this = this;
        //load image, spritesheet, sound
        this.loadAudio();
        this.loadSprites({
            frameHeight: 32,
            frameWidth: 32
        });
        this.loadImages();
        //create loading bar
        var loadnigBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //White
            }
        });
        /*
        Loader Events:
            complete - when loading everything
            progress - loader number progress in decimal
        */
        //smiulate large load
        /*
        for(let i=0; i<100; i++){
             this.load.spritesheet("cat" + i, "./assets/cat.png", {
                 frameHeight: 32,
                 frameWidth: 32
             });
        }*/
        this.load.on("progress", function (percent) {
            loadnigBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
            console.log(percent);
        });
        this.load.on("complete", function () {
            console.log("done");
        });
        this.load.on("load", function (file) {
            console.log(file.src);
        });
    };
    LoadScene.prototype.create = function () {
        this.scene.add(CST_1.CST.SCENES.MENU, MenuScene_1.MenuScene, false);
        this.scene.start(CST_1.CST.SCENES.MENU);
    };
    return LoadScene;
}(Phaser.Scene));
exports.LoadScene = LoadScene;
