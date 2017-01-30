import * as React from 'react';
import * as redux from 'redux'
import { connect } from 'react-redux';

import {
  MainSection,
  model
} from '../../modules/cb-dashboard';

export default class Dashboards extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <MainSection />
      </div>
    );
  }
}
