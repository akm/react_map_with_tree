import React from 'react';
import { connect } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      </div>
    </MuiThemeProvider>
  )
};

export default App
