import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import spotifylogo1 from "../../assets/images/Spotify_Logo1.png";
import spotifylogo2 from "../../assets/images/Spotify_Logo2.png";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={spotifylogo1} alt="spotify" />
          <h2>Streaming de música online</h2>
        </div>

        <img
          src={spotifylogo2}
          alt="Plataforma de música"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Artista" />
            Artista
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Ouvir Musica" />
            Ouvir Música
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexÃµes realizadas.{" "}
          <img src={purpleHeartIcon} alt="CoraÃ§Ã£o Roxo" />
        </span>
      </div>
    </div>
  );
}
