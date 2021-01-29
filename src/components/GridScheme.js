/* eslint-disable eqeqeq */
import React from "react";
import { useMediaQuery } from "react-responsive";
import uuid from "react-uuid";

const Grid = (props) => {
  const { data, page, hlink } = props;
  const { mobile, tablet } = data.breakPoints;
  const isTablet = useMediaQuery({
    query: `(max-width: ${tablet || "1200px"})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobile || "600px"})`,
  });
  const gridRows = isTablet
    ? isMobile
      ? data.pages[page]?.grid.mobile?.rows || hlink?.grid.mobile?.rows
      : data.pages[page]?.grid.tablet?.rows || hlink?.grid.tablet?.rows
    : data.pages[page]?.grid.rows || hlink?.grid?.rows;
  const gridColumns = isTablet
    ? isMobile
      ? data.pages[page]?.grid.mobile?.columns || hlink?.grid.mobile?.columns
      : data.pages[page]?.grid.tablet?.columns || hlink?.grid.tablet?.columns
    : data.pages[page]?.grid.columns || hlink?.grid.columns;

  const style = {
    gallery: {
      display: "grid",
      gridTemplateRows: `repeat(${gridRows || 8}, 5vw)`,
      gridTemplateColumns: `repeat(${gridColumns || 8}, 1fr)`,
      gridGap: "15px",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
  };

  const setTable = () => {
    return new Array(gridRows)
      .fill()
      .map(() =>
        new Array(gridColumns).fill(
          <div style={{ border: "2px dashed black" }}></div>
        )
      );
  };

  return <div style={style.gallery}>{setTable()}</div>;
};

export default Grid;
