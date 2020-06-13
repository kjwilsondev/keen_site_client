import React, { Component } from "react";
import Logo from "../Logo";
import "./styles.css";
import girlSing from "../../girl_sing.jpg";
import Carousel from "./components/Carousel";
import Post from "../../components/Post";
import Popup from "../../components/Popup";

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="home">
        {/* <Logo picture={keenLogo} /> */}
        <Carousel />
        {/* <Post title="FIRST POST" picture={girlSing} /> */}
        <div className="icons">
          <a target="_blank" href="https://www.instagram.com/keenmusicgroup/">
            <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/Keen-Media-115002463374522/"
          >
            <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
          </a>
          <a target="_blank" href="https://twitter.com/keenmusicgroup">
            <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
          </a>
          <a
            target="_blank"
            href="https://open.spotify.com/artist/5GITUEMmJSSaCT3rr4pQXq"
          >
            <FontAwesomeIcon className="icon" icon={faSpotify} size="2x" />
          </a>
        </div>
        <div className="subscribe">
          {/* TODO: add callback function to subscribe email */}
          <Popup callback={(email) => console.log(email)} />
        </div>
      </div>
    );
  }
}

export default Home;
