import React, { useContext } from "react";
import uuid from "react-uuid";
import { Input, Dropdown, Divider } from "rsuite";
import { DataContext } from "../../providers/DataProvider";
import ImagePositionInput from "../ImagePositionInput";

const HomepagePopup = (props) => {
  const data = useContext(DataContext);
  const { homepage } = props;
  const cubes = data.cubes;

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
                defaultValue={data.pages.home.grid?.rows}
                name="homepageDesktopGridRows"
                placeholder="Rows"
              />
              X
              <Input
                className="one-line-item"
                defaultValue={data.pages.home.grid?.columns}
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
                defaultValue={data.pages.home.grid?.tablet?.rows}
                name="homepageTabletGridRows"
                placeholder="Rows"
              />
              X
              <Input
                className="one-line-item"
                defaultValue={data.pages.home.grid?.tablet?.columns}
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
                defaultValue={data.pages.home.grid?.mobile?.rows}
                name="homepageMobileGridRows"
                placeholder="Rows"
              />
              X
              <Input
                className="one-line-item"
                defaultValue={data.pages.home.grid?.mobile?.columns}
                name="homepageMobileGridColumns"
                placeholder="Columns"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {data.pages.home.images.map((image, index) => (
            <div key={uuid()}>
              <div className="popup-field">
                <Divider style={{ margin: "0px 0px 5px 0px" }} />
                <div className="image-dropdown-wrapper">
                  <h5 className="popup-field-header centered">Image:</h5>
                  <Dropdown
                    title={cubes.find((cube) => cube.id === image.cubeId).name}
                  >
                    {cubes.map((cube) => {
                      return (
                        <Dropdown.Item key={uuid()}>{cube.name}</Dropdown.Item>
                      );
                    })}
                  </Dropdown>
                </div>

                <h6 className="popup-field-header">Desktop: </h6>
                <ImagePositionInput index={index} />
              </div>
              <div className="popup-field">
                <h6 className="popup-field-header">Tablet: </h6>
                <ImagePositionInput index={index} isTablet={true} />
              </div>
              <div className="popup-field">
                <h6 className="popup-field-header">Mobile: </h6>
                <ImagePositionInput index={index} isMobile={true} />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default HomepagePopup;
