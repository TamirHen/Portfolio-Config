import React from "react";
import { Input, Button } from "rsuite";

import "./Popup.css";

const Popup = (props) => {
  const { onClose, cube } = props;

  return (
    <div className="popup-background">
      <div className="popup">
        <div className="close-button" onClick={onClose}>
          X
        </div>
        {cube && (
          <>
            <div className="popup-field">
              <h6 className="popup-field-header">ID: </h6>
              <Input disabled value={cube.id} />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Name: </h6>
              <Input value={cube.name} />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Description: </h6>
              <Input value={cube.description} />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Genre: </h6>
              <Input value={cube.genre} />
            </div>
            <div className="popup-field">
              <h6 className="popup-field-header">Image URL: </h6>
              <Input value={cube.image} />
            </div>
          </>
        )}
        <div className="save-button-wrapper">
          <Button className="save-button" color="green">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
