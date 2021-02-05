import React, { useState } from "react";
import { Button } from "rsuite";
import { updateDB } from "../utils/Firebase";
import uuid from "react-uuid";

import "./Popup.css";
import CubePopup from "./Popups/CubePopup";
import HeaderTextPopup from "./Popups/HeaderTextPopup";
import HeaderLinksPopup from "./Popups/HeaderLinksPopup";

const Popup = (props) => {
  const { onClose, cube, headerText, headerLinks, setHeaderLinks } = props;
  const [numOfHeaderLinks, setNumOfHeaderLinks] = useState(0);
  const [headerLinksKey, setHeaderLinksKey] = useState(uuid());

  const submit = (event) => {
    event.preventDefault();
    let fields = {};
    if (cube) {
      fields = {
        id: cube.id,
        name: event.target.cubeName.value,
        description: event.target.cubeDescription.value,
        genre: event.target.cubeGenre.value,
        image: event.target.cubeImage.value,
      };
      updateDB(`cubes/${cube.index}`, fields) === "saved" && onClose();
      return;
    } else if (headerText) {
      fields = {
        title: event.target.headerTextTitle.value,
        subtitle: event.target.headerTextSubtitle.value,
      };
      updateDB("title", fields.title) === "saved" &&
        updateDB("subtitle", fields.subtitle) === "saved" &&
        onClose();
      return;
    } else if (headerLinks) {
      fields = [];
      for (let index = 1; index <= numOfHeaderLinks; index++) {
        fields.push(event.target[`link-${index}`].value);
      }
      updateDB("headerLinks", fields) === "saved" && onClose();
      return;
    }
  };

  return (
    <div className="popup-background">
      <form className="popup" onSubmit={submit}>
        <div className="close-button" onClick={onClose}>
          X
        </div>
        {cube && <CubePopup cube={cube} />}
        {headerText && <HeaderTextPopup headerText={headerText} />}
        {headerLinks && (
          <HeaderLinksPopup
            key={headerLinksKey}
            headerLinks={headerLinks}
            setHeaderLinks={setHeaderLinks}
            numOfHeaderLinks={numOfHeaderLinks}
            setNumOfHeaderLinks={setNumOfHeaderLinks}
            setHeaderLinksKey={setHeaderLinksKey}
          />
        )}
        <div className="save-button-wrapper">
          <Button type="submit" className="save-button" color="blue">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Popup;
