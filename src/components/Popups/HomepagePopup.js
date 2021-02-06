import React, { useContext } from "react";
import { Input, Dropdown, Divider } from "rsuite";
import { DataContext } from "../../providers/DataProvider";

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
          {data.pages.home.images.map((image) => (
            <>
              <div className="popup-field">
                <Divider style={{ margin: "0px 0px 5px 0px" }} />
                <div className="image-dropdown-wrapper">
                  <h5 className="popup-field-header centered">Image:</h5>
                  <Dropdown
                    title={cubes.find((cube) => cube.id === image.cubeId).name}
                  >
                    {cubes.map((cube) => {
                      return <Dropdown.Item>{cube.name}</Dropdown.Item>;
                    })}
                  </Dropdown>
                </div>

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
          ))}
        </>
      )}
    </>
  );
};

export default HomepagePopup;
