import React from 'react';
import MaterialTitlePanel from './MaterialTitlePanel';
import PropTypes from 'prop-types';

import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const nodes = [{
    value: 'mars',
    label: 'Mars',
    children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
    ],
}];

const state = {
  checked: [],
  expanded: [],
}

class SidebarContent extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: [],
      expanded: ["mars"],
    };
  }

  render() {
    console.log("this.state: ", this.state)
    return (
      <MaterialTitlePanel title="Menu" style={styles.sidebar}>
        <CheckboxTree
          nodes={nodes}
          checked={this.state.checked}
          expanded={this.state.expanded}
          onCheck={checked => this.setState({ checked })}
          onExpand={expanded => this.setState({ expanded })}
        />
      </MaterialTitlePanel>
    )
  }
}

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
