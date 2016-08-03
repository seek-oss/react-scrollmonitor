import { Component, PropTypes, cloneElement } from 'react';
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

    const monitor = scrollMonitor.create(this._component);

    if (visibilityChange) {
      monitor.visibilityChange(visibilityChange);
    }
    if (stateChange) {
      monitor.stateChange(stateChange);
    }
    if (enterViewport) {
      monitor.enterViewport(enterViewport);
    }
    if (fullyEnterViewport) {
      monitor.fullyEnterViewport(fullyEnterViewport);
    }
    if (exitViewport) {
      monitor.exitViewport(exitViewport);
    }
    if (partiallyExitViewport) {
      monitor.partiallyExitViewport(partiallyExitViewport);
    }
  }

  render() {
    const { children } = this.props;

    return cloneElement(children, {
      ref: c => {
        this._component = c;
      }
    });
  }
}
