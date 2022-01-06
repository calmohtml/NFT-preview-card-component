import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { info, images, avatar } from "../styles/equilibrium.module.css";

const Equilibrium = () => {
  return (
    <Fragment>
      <div className={info}>
        <h1>
          <a>Equilibrium #3429</a>
        </h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className={images}>
          <span>
            <StaticImage
              src="../images/icon-ethereum.svg"
              alt="Image of Ethereum"
              placeholder="tracedSVG"
            />
            <p>0.041 ETH</p>
          </span>
          <span>
            <StaticImage
              src="../images/icon-clock.svg"
              alt="Image of clock"
              placeholder="tracedSVG"
            />
            <p>3 days left</p>
          </span>
        </div>
        <hr />
        <div className={avatar}>
          <span>
            <StaticImage
              src="../images/image-avatar.png"
              alt="Image of avatar"
              placeholder="tracedSVG"
            />
            <p>
              Creation of <a>Jules Wyvern</a>
            </p>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Equilibrium;
