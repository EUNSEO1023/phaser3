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
exports.MenuScene = void 0;
var CST_1 = require("../CST");
var MenuScene = /** @class */ (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        return _super.call(this, {
            key: CST_1.CST.SCENES.MENU
        }) || this;
    }
    MenuScene.prototype.init = function () {
    };
    MenuScene.prototype.create = function () {
        //create images (z order)
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, CST_1.CST.IMAGE.LOGO).setDepth(1);
        this.add.image(0, 0, CST_1.CST.IMAGE.TITLE).setOrigin(0).setDepth(0);
        var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, CST_1.CST.IMAGE.PLAY).setDepth(1);
        var optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, CST_1.CST.IMAGE.OPTIONS).setDepth(1);
        //create sprites (if using pixel art, remove sharpen)
        var hoverSprite = this.add.sprite(100, 100, CST_1.CST.SPRITE.CAT);
        hoverSprite.setScale(3);
        hoverSprite.setVisible(false);
        //create audio, disable pauseonblur
        this.sound.play(CST_1.CST.AUDIO.TITLE, {
            loop: true
        });
        //create animation
        this.anims.create({
            key: "walk",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers(CST_1.CST.SPRITE.CAT, {
                frames: [0, 1, 2, 3]
            })
        });
        //make image buttons interactive
        /*
            PointerEvents:
                pointerover - hovering
                pointerout - not hovering
                pointerup - click and release
                pointerdown - just click
        */
        playButton.setInteractive();
        playButton.on("pointerover", function () {
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = playButton.x - playButton.width;
            hoverSprite.y = playButton.y;
        });
        playButton.on("pointerout", function () {
            hoverSprite.setVisible(false);
        });
        playButton.on("pointerup", function () {
            //this.scene.start();
        });
        optionsButton.setInteractive();
        optionsButton.on("pointerover", function () {
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = optionsButton.x - optionsButton.width;
            hoverSprite.y = optionsButton.y;
        });
        optionsButton.on("pointerout", function () {
            hoverSprite.setVisible(false);
        });
        optionsButton.on("pointerup", function () {
            //this.scene.launch();
        });
    };
    return MenuScene;
}(Phaser.Scene));
exports.MenuScene = MenuScene;
