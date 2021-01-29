/* eslint-disable eqeqeq */
import React from "react";
import Grid from "../components/Grid";
import TextBody from "../components/TextBody";
import { useParams } from "react-router-dom";

const Project = (props) => {
  const { cubeId } = useParams();
  const { data } = props;
  const cube = data.cubes.find((cube) => cube.id == cubeId);

  return (
    <>
      <Grid page="project" cubeId={cubeId} {...props} />
      <TextBody
        title={cube.name}
        subtitle={cube.genre}
        text={cube.description}
        data={data}
      />
    </>
  );
};

export default Project;
