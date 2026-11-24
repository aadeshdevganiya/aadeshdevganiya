import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transperant" },
          // color: { value: "transperant" },
        },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          links: {
            enable: true,
            color: "#000000",
            distance: 150,
          },
        },
      }}
    />
  );
}
