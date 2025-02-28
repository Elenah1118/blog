import { useEffect, useState } from "react";
import "./ParallaxBackground.css";
import ParallaxConfig from "./ParallaxConfig";

const ParallaxBackground = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * ParallaxConfig.speed);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
       <div
        className="parallax-background"
        style={{
          backgroundImage: `url(${ParallaxConfig.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: `brightness(${Math.max(1 - offset * 0.01, 0.1)}) blur(${Math.min(offset * 0.02, 5)}px)`, 
        }}
      ></div>

      <div className="content-overlay">
        <h1>Placas solares y sus ventajas.</h1>
      </div>
    </div>
  );
};

export default ParallaxBackground;
