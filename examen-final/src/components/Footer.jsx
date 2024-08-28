import { useEffect, useRef } from "react";
import "./Footer.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/social.png";
import youtube from "../assets/youtube.png";

function Footer() {
  const facebookRef = useRef(null);
  const instagramRef = useRef(null);
  const youtubeRef = useRef(null);

  useEffect(() => {
    const manejarMouseSobre = (icono) => {
      icono.style.opacity = "0";
      icono.style.zIndex = "-1";
    };

    const manejarMouseFuera = (icono) => {
      icono.style.opacity = "1";
      icono.style.zIndex = "1";
    };

    const iconos = [
      facebookRef.current,
      instagramRef.current,
      youtubeRef.current,
    ];

    iconos.forEach((icono) => {
      if (icono) {
        icono.addEventListener("mouseover", () => manejarMouseSobre(icono));
        icono.addEventListener("mouseout", () => manejarMouseFuera(icono));
      }
    });

    return () => {
      iconos.forEach((icono) => {
        if (icono) {
          icono.removeEventListener("mouseover", () =>
            manejarMouseSobre(icono)
          );
          icono.removeEventListener("mouseout", () => manejarMouseFuera(icono));
        }
      });
    };
  }, []);

  return (
    <>
      <footer id="footer">
        <div className="div__footer__texto">
          <h2 className="nombre-empresa1">TRAVELING</h2>
        </div>

        <div className="iconos">
          <a href="https://es-la.facebook.com/">
            <img
              src={facebook}
              alt="facebook"
              className="iconos1"
              ref={facebookRef}
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src={instagram}
              alt="instagram"
              className="iconos1"
              ref={instagramRef}
            />
          </a>
          <a href="https://www.youtube.com/">
            <img
              src={youtube}
              alt="youtube"
              className="iconos1"
              ref={youtubeRef}
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
