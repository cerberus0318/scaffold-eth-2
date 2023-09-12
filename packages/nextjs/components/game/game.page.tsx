import React, { useState } from "react";
// import { UI } from "./ui/UI";
import { MetaHeader } from "~~/components/MetaHeader";

const GamePage = () => {
  // const isDevelopment = process?.env?.NODE_ENV !== "production";
  const phaserGameRef = React.useRef(null);
  const [showDialog, setShowDialog] = useState(false);
  let phaserLoading = false;

  React.useEffect(() => {
    if (phaserLoading) {
      return;
    }

    phaserLoading = true;
    const initPhaser = async () => {
      const Phaser = await import("phaser");
      const { default: GridEngine } = await import("grid-engine");
      const { default: VirtualJoystickPlugin } = await import("phaser3-rex-plugins/plugins/virtualjoystick-plugin.js");
      const { default: ShopScene } = await import("./scenes/ShopScene");
      const { default: BattleScene } = await import("./scenes/BattleScene");
      const { default: DepotScene } = await import("./scenes/DepotScene");
      const { default: ForgeScene } = await import("./scenes/ForgeScene");
      const { default: RecruScene } = await import("./scenes/RecruScene");

      // const { default: RecruScene } = await import("./scenes/RecruScene");

      const gameConfig: Phaser.Types.Core.GameConfig = {
        parent: "game-content",
        type: Phaser.AUTO,
        // width: 1280,
        // height: 720,
        pixelArt: true,
        transparent: true,
        scale: {
          // mode: Phaser.Scale.FIT,
          // autoCenter: Phaser.Scale.CENTER_BOTH, // makes weird things with the positioning due to header
          autoCenter: Phaser.Scale.CENTER_BOTH,
          height: 550,
          mode: Phaser.Scale.ScaleModes.RESIZE,
          // width: 800,
        },
        scene: [
          BattleScene,
          new ShopScene(() => {
            setShowDialog(true);
          }),
          DepotScene,
          ForgeScene,
          RecruScene,
        ],
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 0 },
            // debug: isDevelopment,
          },
        },
        plugins: {
          scene: [
            {
              key: "gridEngine",
              plugin: GridEngine,
              mapping: "gridEngine",
            },
          ],
          global: [
            {
              key: "rexVirtualJoystick",
              plugin: VirtualJoystickPlugin,
              start: true,
            },
          ],
        },
        backgroundColor: "#2d2d2d",
      };

      // @ts-ignore
      phaserGameRef.current = new Phaser.Game(gameConfig);
    };

    initPhaser();
  }, []);

  const handleButtonClick = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <div className="mt-6">
        <MetaHeader />
        <div id="game-content" className="min-w-[320px] max-w-[1024px] mx-auto" key="game-content">
          {/* <UI game={phaserGameRef.current ? phaserGameRef.current : undefined} /> */}
        </div>
        <div className={`fixed z-10 inset-0 overflow-y-auto ${showDialog ? "active" : ""}`}>
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className={`bg-white rounded-lg shadow-lg p-6 ${showDialog ? "block" : "hidden"}`}>
              <div className="text-lg font-medium mb-4">Item Box</div>
              <div className="mb-4">Item Content HERE!!!</div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleButtonClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
