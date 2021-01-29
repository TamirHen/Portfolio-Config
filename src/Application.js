import React, { useContext } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataContext } from "./providers/DataProvider";

function App() {
  const data = useContext(DataContext);

  const style = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    },
  };

  return (
    <>
      {data ? (
        <Router>
          <Switch>
            <>
              <div style={style.mainContainer}>
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
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
