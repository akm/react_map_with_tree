import React from 'react';
import { connect } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './MaterialTitlePanel';
import SidebarContent from './SidebarContent';

import Map from './Map';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

const App = () => {
  const sidebar = <SidebarContent />;

  const contentHeader = (
      <span>
        <span> Google Map</span>
      </span>
  );

  const sidebarProps = {
    sidebar: sidebar,
    docked: true,
    sidebarClassName: 'custom-sidebar-class',
    shadow: true,
    pullRight: false,
    touchHandleWidth: 20,
    dragToggleDistance: 30,
    transitions: true,
  }

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <Map/>
        </MaterialTitlePanel>
      </Sidebar>
    </MuiThemeProvider>
  )
};

export default App
