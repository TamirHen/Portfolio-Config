import React from "react";
import Grid from "../components/Grid";
import GridScheme from "../components/GridScheme";

const Home = (props) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <GridScheme page="home" {...props} />
        <Grid page="home" {...props} />
      </div>
    </>
  );
};

export default Home;
