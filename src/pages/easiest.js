import React from "react";
import "../libs/style/easiest.css";
import { Icon } from "@iconify/react";
const easiest = () => {
  return (
    <div className=" easiest__main">
      <div className="easiest__title">Easiest Way To Use</div>
      <div className="main">
        <div className="easiest__grid">
          <div className="browse">
            <div className="easiest__image">
              {" "}
              <Icon icon="bx:phone-call" color="gray" width="100" height="80" />
            </div>
            <div className="easiest__mini"></div>
            <div className="easiest__body">hey</div>
          </div>
          <div className="Find">
            <div className="easiest__image">
              <Icon icon="bx:phone-call" color="gray" width="100" height="80" />
            </div>
            <div className="easiest__mini"></div>
            <div className="easiest__body">hey</div>
          </div>
          <div className="submit">
            <div className="easiest__image">
              <Icon icon="bx:phone-call" color="gray" width="100" height="80" />
            </div>
            <div className="easiest__mini"></div>
            <div className="easiest__body">hey</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default easiest;
