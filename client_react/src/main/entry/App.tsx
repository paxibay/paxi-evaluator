import * as React from 'react';
import Navbar from './Navbar';
export default class App extends React.Component<{}, {}> {
  render() {    const topStyle = {
      topPadding: 'topPadding'
    };
    let contentTop = `container ${topStyle.topPadding}`;    return (      <div>        <Navbar />         <div className={contentTop}>          {this.props.children}        </div>      </div>    );  }}