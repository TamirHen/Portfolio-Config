import React, { useContext } from "react";
import uuid from "react-uuid";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { DataContext } from "../providers/DataProvider";

import "./ConfigNovBar.css";

const ConfigNavBar = () => {
  const data = useContext(DataContext);
  let counter = 1;

  const panelStyles = {
    padding: "15px 20px",
    color: "#aaa",
    fontSize: "14px",
  };

  return (
    <>
      <div className="shadow" />
      <div
        style={{
          minWidth: "250px",
          backgroundColor: "#f7f7fa",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "fixed",
            minWidth: "inherit",
            overflow: "auto",
            height: "100vh",
            paddingTop: "30px",
          }}
        >
          <Sidenav activeKey="1">
            <Sidenav.Body>
              <Nav>
                {/* Configuration */}
                <Nav.Item
                  panel
                  style={{
                    padding: "15px 20px",
                    color: "#1675e0",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Configuration
                </Nav.Item>

                <Nav.Item panel style={panelStyles}>
                  Header
                </Nav.Item>

                {/* Header text */}
                <Dropdown
                  eventKey={counter++}
                  className="nav-item"
                  title="Text"
                  icon={<Icon icon="pencil" />}
                >
                  {/* Title */}
                  <Dropdown.Item eventKey={counter++}>Title</Dropdown.Item>

                  {/* Subtitle */}
                  <Dropdown.Item eventKey={counter++}>Subtitle</Dropdown.Item>
                </Dropdown>

                {/* Header Links */}
                <Dropdown
                  eventKey={counter++}
                  title="Links"
                  icon={<Icon icon="link" />}
                >
                  {data.headerLinks.map((headerLink) => (
                    <Dropdown.Item
                      key={uuid()}
                      eventKey={`${counter}-${headerLink}`}
                    >
                      {headerLink}
                    </Dropdown.Item>
                  ))}
                </Dropdown>

                <Nav.Item panel style={panelStyles}>
                  Body
                </Nav.Item>

                {/* Cubes */}
                <Dropdown
                  eventKey={counter++}
                  title="Cubes"
                  icon={<Icon icon="cubes" />}
                >
                  {data.cubes.map((cube) => (
                    <Dropdown.Item
                      key={uuid()}
                      eventKey={`${counter}-${cube.name}`}
                    >
                      {cube.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown>

                {/* Pages */}
                <Dropdown
                  eventKey={counter++}
                  title="Pages"
                  icon={<Icon icon="web" />}
                >
                  <Dropdown.Item>Home</Dropdown.Item>
                  <Dropdown.Item>Project</Dropdown.Item>
                  <Dropdown.Menu
                    key={uuid()}
                    eventKey={`${counter}-hlink`}
                    title="Hlinks"
                  >
                    {data.pages.hlinks.map((hlink) => (
                      <Dropdown.Item key={uuid()}>{hlink.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Item panel style={panelStyles}>
                  Footer
                </Nav.Item>

                {/* Footer text */}
                <Nav.Item eventKey={counter++} icon={<Icon icon="pencil" />}>
                  Text
                </Nav.Item>

                <Nav.Item panel style={panelStyles}>
                  Settings
                </Nav.Item>

                <Dropdown
                  eventKey={counter++}
                  title="Break Points"
                  icon={<Icon icon="pc" />}
                >
                  {Object.keys(data.breakPoints).map((keyName) => (
                    <Dropdown.Item key={uuid()}>
                      {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      </div>
    </>
  );
};

export default ConfigNavBar;
