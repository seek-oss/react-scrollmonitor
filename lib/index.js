import { Component, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import scrollMonitor from './scrollMonitor';

export default class ScrollMonitor extends Component {
  static propTypes = {
    visibilityChange: PropTypes.func,
    stateChange: PropTypes.func,
    enterViewport: PropTypes.func,
    fullyEnterViewport: PropTypes.func,
    exitViewport: PropTypes.func,
    partiallyExitViewport: PropTypes.func,
    children: PropTypes.node.isRequired
  };

  componentDidMount() {
    const { visibilityChange, stateChange, enterViewport,
      fullyEnterViewport, exitViewport, partiallyExitViewport } = this.props;

    this.monitor = scrollMonitor.create(this._component);

    if (visibilityChange) {
      this.monitor.visibilityChange(visibilityChange);
    }
    if (stateChange) {
      this.monitor.stateChange(stateChange);
    }
    if (enterViewport) {
      this.monitor.enterViewport(enterViewport);
    }
    if (fullyEnterViewport) {
      this.monitor.fullyEnterViewport(fullyEnterViewport);
    }
    if (exitViewport) {
      this.monitor.exitViewport(exitViewport);
    }
    if (partiallyExitViewport) {
      this.monitor.partiallyExitViewport(partiallyExitViewport);
    }
  }

  componentWillUnmount() {
    this.monitor.destroy();
  }

  render() {
    const { children } = this.props;

    return cloneElement(Children.only(children), {
      ref: c => {
        this._component = c;
      }
    });
  }
}
