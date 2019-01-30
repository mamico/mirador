import React, { Component } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ConnectedWorkspaceControlPanelButtons from './WorkspaceControlPanelButtons';
import ns from '../config/css-ns';

/**
 * Provides the panel responsible for controlling the entire workspace
 */
class WorkspaceControlPanel extends Component {
  /**
   * render
   * @return {String} - HTML markup for the component
   */
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classNames(classes.drawer, ns('workspace-control-panel'))}
        variant="permanent"
        classes={{ paper: classNames(classes.drawer) }}
        open
      >
        <ConnectedWorkspaceControlPanelButtons />
      </Drawer>
    );
  }
}

WorkspaceControlPanel.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

/**
 * @private
 */
const styles = theme => ({
  ctrlBtn: {
    margin: theme.spacing.unit,
  },
});

const enhance = compose(
  withStyles(styles),
  // further HOC go here
);

export default enhance(WorkspaceControlPanel);
