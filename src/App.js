import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// helpers
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

// components
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
