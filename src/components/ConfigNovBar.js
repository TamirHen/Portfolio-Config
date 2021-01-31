import React, { useContext } from "react";
import uuid from "react-uuid";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { DataContext } from "../providers/DataProvider";

const ConfigNavBar = () => {
  const data = useContext(DataContext);

  return (
    <div
      style={{
        minWidth: "250px",
        backgroundColor: "#f7f7fa",
        paddingTop: "30px",
      }}
    >
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
              Configuration
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="dashboard" />}>
              Title
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Icon icon="group" />}>
              Subtitle
            </Nav.Item>
            <Dropdown
              eventKey="4"
              title="Header Links"
              icon={<Icon icon="magic" />}
            >
              {data.headerLinks.map((headerLink) => (
                <Dropdown.Item key={uuid()} eventKey={`4-${headerLink}`}>
                  {headerLink}
                </Dropdown.Item>
              ))}
            </Dropdown>
            <Dropdown eventKey="5" title="Cubes" icon={<Icon icon="magic" />}>
              {data.cubes.map((cube) => (
                <Dropdown.Item key={uuid()} eventKey={`5-${cube.name}`}>
                  {cube.name}
                </Dropdown.Item>
              ))}
            </Dropdown>

            <Dropdown
              eventKey="6"
              title="Settings"
              icon={<Icon icon="gear-circle" />}
            >
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              <Dropdown.Menu eventKey="4-5" title="Custom Action">
                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default ConfigNavBar;
