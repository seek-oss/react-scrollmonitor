# react-scrollmonitor

React component wrapper for [scrollMonitor](https://github.com/stutrek/scrollMonitor)

Requires React 0.13.0 or greater

## Usage

```javascript
import ScrollMonitor from 'react-scrollmonitor';

<ScrollMonitor
  enterViewport={() => console.log('Hi!')}
  exitViewport={() => console.log('Bye!')}>
  <ComponentYouWantToTrack />
</ScrollMonitor>
```

Note: You can only wrap a single child element with react-scrollmonitor. Multiple components being wrapped will result in errors. 

## Events

react-scrollmonitor supports the following events, for details on each event see the [scrollMonitor github page](https://github.com/stutrek/scrollMonitor).

* visibilityChange
* stateChange
* enterViewport
* fullyEnterViewport
* exitViewport
* partiallyExitViewport

## Server Rendering

[scrollMonitor](https://github.com/stutrek/scrollMonitor) will only work inside a browser due to it's dependency on the window object. react-scrollmonitor utilizes the scrollMonitor api inside of the componentDidMount lifecycle stage which will only run on the client. However to stop the scrollMonitor module being imported on the server and causing errors the [browser](https://github.com/defunctzombie/package-browser-field-spec) option is used in package.json to tell your build tool not to include the dependency on the server. Webpack and Browserify both support this option.

TL;DR Server rendering works
