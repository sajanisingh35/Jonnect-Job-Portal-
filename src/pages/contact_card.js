import React from "react";
import { Icon } from "@iconify/react";
import "../libs/style/contact_card.css";
const contact_card = () => {
  return (
    <>
      <div className="main__title">Connect With Us</div>
      <div className="main">
        <div className="card">
          <div className="card__title">
            <div className="card__body">
              <div className="card__image">
                <Icon
                  icon="bx:phone-call"
                  color="gray"
                  width="100"
                  height="80"
                />
              </div>
              <center>+9779818181818</center>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">
            <div className="card__body">
              <div className="card__image">
                <Icon
                  icon="ri:mail-send-fill"
                  color="gray"
                  width="100"
                  height="80"
                />
              </div>
              <a href="https://www.google.com/" target="_blank">
                <center>Jonnect@gmail.com</center>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">
            <div className="card__body">
              <div className="card__image">
                <Icon
                  icon="dashicons:location"
                  color="gray"
                  width="100"
                  height="80"
                />
              </div>
              <center>Paknajol,Kathmandu</center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact_card;
