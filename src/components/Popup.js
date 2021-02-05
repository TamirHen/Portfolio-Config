import React from "react";
import { Input, Button } from "rsuite";
import { updateDB } from "../utils/Firebase";

import "./Popup.css";

const Popup = (props) => {
  const { onClose, cube, headerText } = props;

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
    }
  };

  return (
    <div className="popup-background">
      <form className="popup" onSubmit={submit}>
        <div className="close-button" onClick={onClose}>
          X
        </div>
        {cube && (
          <>
            <div className="popup-field">
              <h6 className="popup-field-header">ID: </h6>
              <Input disabled defaultValue={cube.id} name="cubeId" />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Name: </h6>
              <Input defaultValue={cube.name} name="cubeName" />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Description: </h6>
              <Input
                componentClass="textarea"
                rows={3}
                defaultValue={cube.description}
                name="cubeDescription"
              />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Genre: </h6>
              <Input defaultValue={cube.genre} name="cubeGenre" />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Image URL: </h6>
              <Input defaultValue={cube.image} name="cubeImage" />
            </div>
          </>
        )}
        {headerText && (
          <>
            <div className="popup-field">
              <h6 className="popup-field-header">Title: </h6>
              <Input defaultValue={headerText.title} name="headerTextTitle" />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Subtitle: </h6>
              <Input
                defaultValue={headerText.subtitle}
                name="headerTextSubtitle"
              />
            </div>
          </>
        )}
        <div className="save-button-wrapper">
          <Button type="submit" className="save-button" color="green">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Popup;
