import React, { useState, useContext } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataContext } from "./providers/DataProvider";
import ConfigNavBar from "./components/ConfigNovBar";
import Popup from "./components/Popup";
import uuid from "react-uuid";

function App() {
  const data = useContext(DataContext);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [cube, setCube] = useState(null);
  const [headerText, setHeaderText] = useState(null);
  const [popupKey, setPopupKey] = useState(uuid());

  const style = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      position: "relative",
    },
  };

  const rerenderPopup = () => {
    setPopupKey(uuid());
  };

  const onClosePopup = () => {
    setDisplayPopup(false);
    setCube(null);
    setHeaderText(null);
  };

  return (
    <>
      {data ? (
        <>
          <div style={{ display: "flex" }}>
            <ConfigNavBar
              data={data}
              setDisplayPopup={setDisplayPopup}
              cube={cube}
              setCube={setCube}
              setHeaderText={setHeaderText}
              rerenderPopup={rerenderPopup}
            />
            <Router>
              <Switch>
                <>
                  <div className="main-container" style={style.mainContainer}>
                    {displayPopup && (
                      <Popup
                        key={popupKey}
                        cube={cube}
                        headerText={headerText}
                        onClose={onClosePopup}
                      />
                    )}
                    <div style={{ padding: "0px 6.94%" }}>
                      <Header data={data} />
                      <Route path="/">
                        <Body data={data} />
                      </Route>
                    </div>
                    <Footer data={data} />
                  </div>
                </>
              </Switch>
            </Router>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
