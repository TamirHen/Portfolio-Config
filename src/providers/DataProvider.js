import React, { Component, createContext } from "react";
import { db } from "../utils/Firebase";

export const DataContext = createContext({ data: null });
class DataProvider extends Component {
  state = {
    data: null,
  };

  componentDidMount = () => {
    db.once("value")
      .then((snapshot) => {
        this.setState({
          data: snapshot.val(),
        });
      })
      .catch((error) => {
        console.error("Error: " + error.code);
      });
  };

  render() {
    return (
      <DataContext.Provider value={this.state.data}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
export default DataProvider;
