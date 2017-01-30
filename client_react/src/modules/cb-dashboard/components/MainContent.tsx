import * as React from 'react';
import { Button, Label, Tabs, Tab } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

class MainContent extends React.Component<{}, {}> {

  renderContent() {
    return (
      <div className="panel panel-default">
        <div className="side-panel-container">
          <span>
            <Button bsStyle="primary">
              Add
            </Button>
            <Button bsStyle="primary">
              Update
            </Button>
          </span>

          <br /><br />
          <div>
            <Label>
              vm.projectCount
              <input type="number" name="input" min="1" max="9" required />
            </Label>
          </div>
          <br /><br />
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
          </Tabs>
          <br /><br />

        </div>
      </div>
    );
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

export default MainContent;








