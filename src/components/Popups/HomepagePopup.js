import React from "react";
import { Input } from "rsuite";

const HomepagePopup = (props) => {
  const { homepage } = props;

  return (
    <>
      <h4 className="popup-header">
        Homepage {homepage.charAt(0).toUpperCase() + homepage.slice(1)}
      </h4>

      {homepage === "grid" ? (
        <>
          <div className="popup-field">
            <h6 className="popup-field-header">Desktop: </h6>
            <div className="one-line-inputs">
              <Input
                className="one-line-item"
                defaultValue={homepage.grid?.rows}
                name="homepageDesktopGridRows"
                placeholder="Rows"
              />
              X
              <Input
                className="one-line-item"
                defaultValue={homepage.grid?.columns}
                name="homepageDesktopGridColumns"
                placeholder="Columns"
              />
            </div>
          </div>
          <div className="popup-field">
            <h6 className="popup-field-header">Tablet: </h6>
            <div className="one-line-inputs">
              <Input
                className="one-line-item"
                defaultValue={homepage.grid?.rows}
                name="homepageTabletGridRows"
                placeholder="Rows"
              />
              X
              <Input
                className="one-line-item"
                defaultValue={homepage.grid?.columns}
                name="homepageTabletGridColumns"
                placeholder="Columns"
              />
            </div>
          </div>
          <div className="popup-field">
            <h6 className="popup-field-header">Mobile: </h6>
            <div className="one-line-inputs">
              <Input
                className="one-line-item"
                defaultValue={homepage.grid?.rows}
                name="homepageMobileGridRows"
                placeholder="Rows"
              />
              X
              <Input
                className="one-line-item"
                defaultValue={homepage.grid?.columns}
                name="homepageMobileGridColumns"
                placeholder="Columns"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="popup-field">
            <h6 className="popup-field-header">Desktop: </h6>
            <Input
              defaultValue={homepage.grid?.rows}
              name="homepageDesktopGridRows"
            />
            <Input
              defaultValue={homepage.grid?.columns}
              name="homepageDesktopGridColumns"
            />
          </div>
          <div className="popup-field">
            <h6 className="popup-field-header">Tablet: </h6>
            <Input
              defaultValue={homepage.grid?.tablet?.rows}
              name="homepageTabletGridRows"
            />
            <Input
              defaultValue={homepage.grid?.tablet?.columns}
              name="homepageTabletGridColumns"
            />
          </div>
          <div className="popup-field">
            <h6 className="popup-field-header">Mobile: </h6>
            <Input
              defaultValue={homepage.grid?.mobile?.rows}
              name="homepageMobileGridRows"
            />
            <Input
              defaultValue={homepage.grid?.mobile?.columns}
              name="homepageMobileGridColumns"
            />
          </div>
        </>
      )}
    </>
  );
};

export default HomepagePopup;
