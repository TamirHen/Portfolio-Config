import React, { useContext } from "react";
import uuid from "react-uuid";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { DataContext } from "../providers/DataProvider";

const ConfigNavBar = () => {
  const data = useContext(DataContext);
  let counter = 1;

  const panelStyles = {
    padding: "15px 20px",
    color: "#aaa",
    fontSize: "14px",
  };
  const dividerStyles = {
    // height: "1px",
    // backgroundColor: "#e5e5ea",
  };

  return (
    <div
      style={{
        minWidth: "250px",
        backgroundColor: "#f7f7fa",
        paddingTop: "30px",
      }}
    >
      <div style={{ position: "fixed", minWidth: "inherit" }}>
        <Sidenav activeKey="1">
          <Sidenav.Body>
            <Nav>
              {/* Configuration */}
              <Nav.Item
                panel
                eventKey={counter++}
                icon={<Icon icon="dashboard" />}
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

              {/* Title */}
              <Nav.Item eventKey={counter++} icon={<Icon icon="dashboard" />}>
                Title
              </Nav.Item>

              {/* Subtitle */}
              <Nav.Item eventKey={counter++} icon={<Icon icon="group" />}>
                Subtitle
              </Nav.Item>

              {/* Header Links */}
              <Dropdown
                eventKey={counter++}
                title="Header Links"
                icon={<Icon icon="magic" />}
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

              <Nav.Item divider style={dividerStyles} />
              <Nav.Item panel style={panelStyles}>
                Body
              </Nav.Item>

              {/* Cubes */}
              <Dropdown
                eventKey={counter++}
                title="Cubes"
                icon={<Icon icon="magic" />}
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
                icon={<Icon icon="magic" />}
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

              <Nav.Item divider style={dividerStyles} />
              <Nav.Item panel style={panelStyles}>
                Footer
              </Nav.Item>

              {/* Footer text */}
              <Nav.Item eventKey={counter++} icon={<Icon icon="dashboard" />}>
                Footer Text
              </Nav.Item>

              <Nav.Item divider style={dividerStyles} />
              <Nav.Item panel style={panelStyles}>
                Settings
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
};

export default ConfigNavBar;
