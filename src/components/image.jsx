import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  equilibrium__container,
  equilibrium__bg,
} from "../styles/image.module.css";

const Image = () => {
  return (
    <div className={equilibrium__container}>
      <div className={equilibrium__bg}>
        <StaticImage
          src="../images/image-equilibrium.jpg"
          alt="Image of NFT Equilibrium"
          placeholder="blurred"
        />
      </div>
    </div>
  );
};

export default Image;
