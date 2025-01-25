import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";

export default function GameView() {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/public/juego/Build_v13/Build/Build_v13.loader.js",
    dataUrl: "/public/juego/Build_v13/Build/Build_v13.data",
    frameworkUrl: "/public/juego/Build_v13/Build/Build_v13.framework.js",
    codeUrl: "/public/juego/Build_v13/Build/Build_v13.wasm",

  });


  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );

      window.addEventListener("resize", function () {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio, screenSize]
  );



  return (
    <>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ 
          visibility: isLoaded ? "visible" : "hidden",
          width: screenSize.width,
          height: screenSize.height, 
        }}
        devicePixelRatio={devicePixelRatio}
      />
    </>
  )
}


