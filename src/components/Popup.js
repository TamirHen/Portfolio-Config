import React, { useState, useContext } from "react";
import { Button } from "rsuite";
import { updateDB } from "../utils/Firebase";
import uuid from "react-uuid";
import { DataContext } from "../providers/DataProvider";

import "./Popup.css";
import CubePopup from "./Popups/CubePopup";
import HeaderTextPopup from "./Popups/HeaderTextPopup";
import HeaderLinksPopup from "./Popups/HeaderLinksPopup";
import HomepagePopup from "./Popups/HomepagePopup";

const Popup = (props) => {
  const data = useContext(DataContext);
  const {
    onClose,
    cube,
    headerText,
    headerLinks,
    setHeaderLinks,
    homepage,
  } = props;
  const [numOfHeaderLinks, setNumOfHeaderLinks] = useState(0);
  const [headerLinksKey, setHeaderLinksKey] = useState(uuid());
  const [images, setImages] = useState(data.pages.home.images);

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
    } else if (homepage) {
      if (homepage === "grid") {
        fields = {
          rows: parseInt(event.target.homepageDesktopGridRows.value),
          columns: parseInt(event.target.homepageDesktopGridColumns.value),
          tablet: {
            rows: parseInt(event.target.homepageTabletGridRows.value),
            columns: parseInt(event.target.homepageTabletGridColumns.value),
          },
          mobile: {
            rows: parseInt(event.target.homepageMobileGridRows.value),
            columns: parseInt(event.target.homepageMobileGridColumns.value),
          },
        };
        updateDB("pages/home/grid", fields) && onClose();
      } else {
        updateDB("pages/home/images", images) && onClose();
      }
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
        {homepage && (
          <HomepagePopup
            homepage={homepage}
            images={images}
            setImages={setImages}
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
