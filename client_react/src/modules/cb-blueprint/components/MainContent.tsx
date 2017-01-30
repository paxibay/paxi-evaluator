import * as React from 'react';
import { Grid, Row, Col }                                   from 'react-bootstrap';
import { Button, Label, Tabs, Tab }                         from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock }  from 'react-bootstrap';

import { Project, Settings } from '../model';

interface MainContentProps {
  projects: Project[];
  settings: Settings;
  addProject: (project: Project) => void;
  deleteProject: () => void;
  changeCount: (settings: Settings, number: number) => void;
};

interface MainContentState {
  projectsDetails?: {};
};

class MainContent extends React.Component<MainContentProps, MainContentState> {

  constructor(props, context) {
    super(props, context);
    this.state = {
      projectsDetails: () => {
        return (
          <Tab></Tab>
        )
      }
    };
  }

  componentDidMount() {
  }
  componentDidUpdate() {
  }

  handleSubmit(e) {
    const { settings } = this.props;
    const count = settings.count;

    const projectCount = parseInt(e.target.value.trim());

    // No change happened
    if (projectCount == count) { return; }

    this.props.changeCount(settings, projectCount);

    // Adding new project
    if (projectCount > count){
      const newProject = {
        key: projectCount,
        code: "0" + projectCount,
        title: "project 0" + projectCount
      };
      this.props.addProject(newProject);
      return;
    }

    // Deleting project
    this.props.deleteProject();
  }

  renderContent() {

    const tabs = this.props.projects.map((project, key) => {
      return (
        <Tab eventKey={key} key={key} title={project.title}>
          {project.title}
        </Tab>
      )
    });

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
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl type="number" min="1" max="9"
                  value={this.props.settings.count}
                  onChange={this.handleSubmit.bind(this)}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </form>
          </div>
          <Tabs defaultActiveKey={0} id="projects">
            {tabs}
          </Tabs>
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
