import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  equilibrium__container,
  equilibrium__middle,
} from "../styles/image.module.css";

const Image = () => {
  return (
    <div className={equilibrium__container}>
      <StaticImage
        src="../images/image-equilibrium.jpg"
        alt="Image of NFT Equilibrium"
        placeholder="blurred"
      />
      <div className={equilibrium__middle}>
        <StaticImage
          src="../images/icon-view.svg"
          alt="Image of View"
          placeholder="tracedSVG"
        />
      </div>
    </div>
  );
};

{
  /* 
<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">John Doe</div>
  </div>
</div> 
*/
}

export default Image;
