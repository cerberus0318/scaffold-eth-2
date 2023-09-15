export default class ForgeScene extends Phaser.Scene {
  coinsCollected = 0;

  backgroundLayer?: Phaser.Tilemaps.TilemapLayer;
  wallLayer?: Phaser.Tilemaps.TilemapLayer;
  itemLayer?: Phaser.Tilemaps.TilemapLayer;
  labelLayer?: Phaser.Tilemaps.TilemapLayer;

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
  animatedForge: any;
  polygons: any;
  speed: any;

  constructor() {
    super("forge");
  }

  init(): void {
    this.gameWidthMiddle = this.sys.game.config.width;
    this.gameWidthMiddle /= 2;
    this.gameHeightMiddle = this.sys.game.config.height;
    this.gameHeightMiddle /= 2;

    this.staticXJsPos = window.innerWidth / 2;
    this.staticYJsPos = (window.innerHeight / 8) * 5; // + (this.gameHeightMiddle / 2) + (this.gameHeightMiddle / 4);

    this.joystickConfig = {
      x: this.staticXJsPos,
      y: this.staticYJsPos,
      enabled: true,
    };
    this.speed = 20;
  }

  preload(): void {
    this.load.scenePlugin("AnimatedTiles", "./assets/AnimatedTiles.js", "animatedForge", "animatedForge");
  }

  create(data: any): void {
    this.cursors = this.input.keyboard?.createCursorKeys();
    this.map = this.make.tilemap({ key: "forgeMap" });
    const groundTiles = this.map.addTilesetImage("gold") as any;

    this.backgroundLayer = this.map.createLayer("Background", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.wallLayer = this.map.createLayer("Wall", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.itemLayer = this.map.createLayer("Item", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;
    this.labelLayer = this.map.createLayer("Label", groundTiles, 0, 0) as Phaser.Tilemaps.TilemapLayer;

    // Boundary Effect
    this.player = this.physics.add.sprite(520, 650, "dude").setScale(0.9);
    this.wallLayer.setCollisionBetween(1, 4000);
    this.physics.add.collider(this.player, this.wallLayer);
    this.physics.add.overlap(
      this.player,
      this.wallLayer,
      (player, tile: any) => {
        if ((tile.x === 15 || tile.x === 16) && tile.y === 22) {
          this.scene.start("battle", { cPos: data.cPos });
        }
      },
      undefined,
      this,
    );

    // Animation
    this.animatedForge.init(this.map);
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

  createVirtualJoystick() {
    this.joyStick = (this.plugins.get(`rexVirtualJoystick`) as any)
      ?.add(
        this,
        Object.assign({}, this.joystickConfig, {
          radius: 32,
          base: this.add.image(0, 0, "base").setDisplaySize(110, 110),
          thumb: this.add.image(0, 0, "thumb").setDisplaySize(60, 60),
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
    this.animatedForge.updateAnimatedTiles();
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
      if (this.speed > 200) this.speed = 200;
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
