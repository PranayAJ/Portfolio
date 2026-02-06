import { useEffect, useRef } from "react";

export default function Snow() {
  const isPaused = useRef(false);

  useEffect(() => {
    const snow = document.getElementById("snow");

    const snowflakeSVG = `
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
          <line x1="32" y1="4"  x2="32" y2="60" />
          <line x1="4"  y1="32" x2="60" y2="32" />
          <line x1="12" y1="12" x2="52" y2="52" />
          <line x1="52" y1="12" x2="12" y2="52" />

          <!-- branches -->
          <line x1="32" y1="12" x2="26" y2="18" />
          <line x1="32" y1="12" x2="38" y2="18" />

          <line x1="32" y1="52" x2="26" y2="46" />
          <line x1="32" y1="52" x2="38" y2="46" />

          <line x1="12" y1="32" x2="18" y2="26" />
          <line x1="12" y1="32" x2="18" y2="38" />

          <line x1="52" y1="32" x2="46" y2="26" />
          <line x1="52" y1="32" x2="46" y2="38" />

          <line x1="20" y1="20" x2="26" y2="26" />
          <line x1="44" y1="20" x2="38" y2="26" />
          <line x1="20" y1="44" x2="26" y2="38" />
          <line x1="44" y1="44" x2="38" y2="38" />
        </g>
      </svg>
    `;

    function createSnowflake() {
      if (isPaused.current) return; // don't create snowflakes while paused

      const flake = document.createElement("div");
      flake.innerHTML = snowflakeSVG;

      flake.style.position = "absolute";
      flake.style.top = "-30px";
      flake.style.pointerEvents = "none";

      const size = Math.random() * 20 + 20;
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;

      const startX = Math.random() * 100;
      flake.style.left = `${startX}vw`;

      const hue = Math.random() * 20 + 190;
      flake.style.color = `hsl(${hue}, 100%, 75%)`;

      const drift = Math.random() * 120 - 60;
      const duration = Math.random() * 5 + 4;

      const rotateStart = Math.random() * 360;
      const rotateEnd = rotateStart + (Math.random() * 360 + 180);

      const start = performance.now();
      const endY = window.innerHeight * 0.5;

      function animate(now) {
        if (isPaused.current) return; // stop animation immediately

        const t = (now - start) / (duration * 1000);
        if (t >= 1) {
          flake.remove();
          return;
        }

        const y = t * endY;
        const x = drift * t;
        const rot = rotateStart + (rotateEnd - rotateStart) * t;

        flake.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
      snow.appendChild(flake);
    }

    const interval = setInterval(createSnowflake, 250);

    // ---------- STOP ON SCROLL ----------
    const handleScroll = () => {
      // pause + remove all snowflakes
      isPaused.current = true;
      snow.innerHTML = "";

      // only resume when back at top
      if (window.scrollY === 0) {
        isPaused.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="snow" />;
}
