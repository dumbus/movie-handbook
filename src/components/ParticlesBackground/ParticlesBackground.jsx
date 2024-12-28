import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import React, { useEffect, useMemo, useState } from 'react';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: '#000000' }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' }
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 }
        }
      },
      particles: {
        color: { value: '#ffffff' },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          outModes: { default: 'bounce' }
        },
        number: {
          value: 120,
          density: { enable: true, area: 800 }
        },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } }
      },
      detectRetina: true
    }),
    []
  );

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default ParticlesBackground;
