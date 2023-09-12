export default class BattleScene extends Phaser.Scene {
  coinsCollected = 0;

  backgroundLayer?: Phaser.Tilemaps.TilemapLayer;
  wallLayer?: Phaser.Tilemaps.TilemapLayer;
  waterLayer?: Phaser.Tilemaps.TilemapLayer;
  fireLayer?: Phaser.Tilemaps.TilemapLayer;
  treeLayer?: Phaser.Tilemaps.TilemapLayer;
  doorLayer?: Phaser.Tilemaps.TilemapLayer;
  railroadLayer?: Phaser.Tilemaps.TilemapLayer;
  labelLayer?: Phaser.Tilemaps.TilemapLayer;
  boxLayer?: Phaser.Tilemaps.TilemapLayer;
  boxtwoLayer?: Phaser.Tilemaps.TilemapLayer;
  itemLayer?: Phaser.Tilemaps.TilemapLayer;
  bridgeLayer?: Phaser.Tilemaps.TilemapLayer;

  showDebug = false;
  player?: Phaser.Physics.Arcade.Sprite;
  debugGraphics?: Phaser.GameObjects.Graphics;
  cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  map?: Phaser.Tilemaps.Tilemap;
  joystickConfig?: any;
  joyStick?: any;
  cursorKeys?: any;
  staticXJsPos?: any;
  staticYJsPos?: any;
  gameWidthMiddle?: any;
  gameHeightMiddle?: any;
  lastCursorDirection: any;
  animatedMiner: any;
  polygons: any;
  speed?: any;

  constructor() {
    super("battle");
  }

  init(): void {
    this.gameWidthMiddle = this.sys.game.config.width;
    this.gameWidthMiddle /= 2;
    this.gameHeightMiddle = this.sys.game.config.height;
    this.gameHeightMiddle /= 2;

    this.staticXJsPos = window.innerWidth / 2 - 24;
    this.staticYJsPos = (window.innerHeight / 8) * 5; // + (this.gameHeightMiddle / 2) + (this.gameHeightMiddle / 4);

    this.joystickConfig = {
      x: this.staticXJsPos,
      y: this.staticYJsPos,
      enabled: true,
    };
    this.speed = 20;
  }

  preload(): void {
    this.load.image("32x32", "assets/tilemaps/tiles/32x32.png");
    this.load.tilemapTiledJSON("minerMap", "assets/tilemaps/maps/miner.tmj");
    this.load.image("room", "assets/tilemaps/tiles/room.png");
    this.load.image("gold", "assets/tilemaps/tiles/gold.png");
    this.load.tilemapTiledJSON("shopMap", "assets/tilemaps/maps/shopRoom.tmj");
    this.load.tilemapTiledJSON("depotMap", "assets/tilemaps/maps/depot.tmj");
    this.load.tilemapTiledJSON("forgeMap", "assets/tilemaps/maps/forge.tmj");
    this.load.tilemapTiledJSON("recruMap", "assets/tilemaps/maps/recru.tmj");
    this.load.spritesheet("dude", "assets/sprites/guy_2.png", {
      frameWidth: 31,
      frameHeight: 32,
    });
    this.load.image("base", "./assets/base.png");
    this.load.image("thumb", "./assets/thumb.png");
    this.load.scenePlugin("AnimatedTiles", "./assets/AnimatedTiles.js", "animatedMiner", "animatedMiner");
  }

  create(data: any): void {
    this.sys.game.canvas.width = 1024;
    this.sys.game.canvas.height = 550;

    this.cursors = this.input.keyboard?.createCursorKeys();
    this.map = this.make.tilemap({ key: "minerMap" });
    const groundTiles = this.map.addTilesetImage("32x32") as any;

    this.backgroundLayer = this.map.createLayer("Background", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.wallLayer = this.map.createLayer("Wall", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.waterLayer = this.map.createLayer("Water", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.treeLayer = this.map.createLayer("Tree", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.doorLayer = this.map.createLayer("Door", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.railroadLayer = this.map.createLayer("Railroad", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.labelLayer = this.map.createLayer("Label", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.fireLayer = this.map.createLayer("Fire", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.boxLayer = this.map.createLayer("Box", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.boxtwoLayer = this.map.createLayer("Box Two", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.itemLayer = this.map.createLayer("Item", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.bridgeLayer = this.map.createLayer("Bridge", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;

    // Boundary Effect
    const pos = data.cPos;
    if (pos) {
      this.player = this.physics.add.sprite(pos.x, pos.y + 4, "dude").setScale(0.85);
    } else {
      this.player = this.physics.add.sprite(200, 200, "dude").setScale(0.85);
    }

    this.boxLayer.setDepth(20);
    this.boxtwoLayer.setDepth(30);
    // this.fireLayer.setDepth(10);

    this.wallLayer.setCollisionBetween(1, 4000);
    this.physics.add.collider(this.player, this.wallLayer);

    // Detect Door Collision
    this.physics.add.collider(this.player, this.bridgeLayer);
    this.physics.add.overlap(
      this.player,
      this.bridgeLayer,
      (player, tile: any) => {
        if ((tile.x === 3 || tile.x === 4) && tile.y === 2) {
          this.scene.start("shop", { cPos: { x: this.player?.x, y: this.player?.y } });
        }
        if ((tile.x === 10 || tile.x === 11) && tile.y === 4) {
          this.scene.start("depot", { cPos: { x: this.player?.x, y: this.player?.y } });
        }
        if ((tile.x === 14 || tile.x === 15) && tile.y === 7) {
          this.scene.start("forge", { cPos: { x: this.player?.x, y: this.player?.y } });
        }
        if ((tile.x === 14 || tile.x === 15) && tile.y === 21) {
          this.scene.start("recru", { cPos: { x: this.player?.x, y: this.player?.y } });
        }
        if (tile.x === 3 && tile.y === 21) {
          console.log("Scene5");
        }
        if (tile.x === 25 && tile.y === 27) {
          console.log("Scene6");
        }
        if (tile.x === 22 && tile.y === 6) {
          console.log("Scene7");
        }
      },
      undefined,
      this,
    );

    // Animation
    this.animatedMiner.init(this.map);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", {
        start: 3,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", {
        start: 6,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("dude", {
        start: 9,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("dude", {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.player.setCollideWorldBounds(true);
    this.player.setFrame(1);
    this.physics.add.collider(this.player, this.wallLayer);
    this.physics.world.bounds.width = 1024;
    this.physics.world.bounds.height = 1024;
    this.cameras.main.setBounds(0, 0, 1024, 1024);
    this.cameras.main.startFollow(this.player, true, 0.8, 0.8);

    this.createVirtualJoystick();
    this.updateJoystickState();
  }

  changeScene() {
    console.log("Goto ROOM!!!");
  }

  createVirtualJoystick() {
    this.joyStick = (this.plugins.get(`rexVirtualJoystick`) as any)
      ?.add(
        this,
        Object.assign({}, this.joystickConfig, {
          radius: 32,
          base: this.add.image(0, 0, "base").setDisplaySize(110, 110).setDepth(100),
          thumb: this.add.image(0, 0, "thumb").setDisplaySize(60, 60).setDepth(100),
        }),
      )
      .on("update", this.update, this);
    this.cursorKeys = this.joyStick.createCursorKeys();

    // // Listener event to reposition virtual joystick
    // // whatever place you click in game area
    this.input.on("pointerdown", (pointer: { x: any; y: any }) => {
      this.joyStick.x = pointer.x;
      this.joyStick.y = pointer.y;
      this.joyStick.base.x = pointer.x;
      this.joyStick.base.y = pointer.y;
      this.joyStick.thumb.x = pointer.x;
      this.joyStick.thumb.y = pointer.y;
    });

    // // Listener event to return virtual
    // // joystick to its original position
    this.input.on("pointerup", () => {
      this.joyStick.x = this.staticXJsPos;
      this.joyStick.y = this.staticYJsPos;
      this.joyStick.base.x = this.staticXJsPos;
      this.joyStick.base.y = this.staticYJsPos;
      this.joyStick.thumb.x = this.staticXJsPos;
      this.joyStick.thumb.y = this.staticYJsPos;
      this.lastCursorDirection = "center";
      // this.setCursorDebugInfo();
    });
  }
  updateJoystickState() {
    this.moveCharacter(this.cursorKeys);
  }

  update(): void {
    const isMobile = this.sys.game.device.os.android || this.sys.game.device.os.iOS;
    this.animatedMiner.updateAnimatedTiles();
    if (isMobile) {
      this.moveCharacter(this.cursorKeys);
    } else {
      this.joyStick.setVisible(false);
      this.moveCharacter(this.cursors);
    }
  }

  moveCharacter(cursorTarget: any): void {
    if (cursorTarget.left.isDown || cursorTarget.right.isDown || cursorTarget.up.isDown || cursorTarget.down.isDown) {
      this.speed += 3;
      if (this.speed > 150) this.speed = 150;
    } else {
      this.speed -= 10;
      if (this.speed < 20) this.speed = 20;
    }
    const previousVelocity: any = this.player?.body?.velocity.clone();
    (this.player?.body as any).setVelocity(0);
    //movement
    if (cursorTarget?.left.isDown) {
      (this.player?.body as any).setVelocityX(-this.speed);
    } else if (cursorTarget?.right.isDown) {
      (this.player?.body as any).setVelocityX(this.speed);
    }

    if (cursorTarget?.up.isDown) {
      (this.player?.body as any).setVelocityY(-this.speed);
    } else if (cursorTarget?.down.isDown) {
      (this.player?.body as any).setVelocityY(this.speed);
    }

    this.player?.body?.velocity.normalize().scale(this.speed);

    //animations
    if (cursorTarget?.up.isDown) {
      this.player?.anims.play("up", true);
    } else if (cursorTarget?.down.isDown) {
      this.player?.anims.play("down", true);
    } else if (cursorTarget?.left.isDown) {
      this.player?.anims.play("left", true);
    } else if (cursorTarget?.right.isDown) {
      this.player?.anims.play("right", true);
    } else {
      this.player?.anims.stop();
    }

    //set idle animations
    if (this.player?.body?.velocity.x === 0 && this.player.body.velocity.y === 0) {
      if (previousVelocity?.x < 0) {
        this.player.setFrame(4);
      } else if (previousVelocity?.x > 0) {
        this.player.setFrame(7);
      } else if (previousVelocity?.y < 0) {
        this.player.setFrame(10);
      } else if (previousVelocity.y > 0) {
        this.player.setFrame(1);
      }
    }
  }
}
