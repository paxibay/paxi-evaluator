import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

import MainContent  from './MainContent';
import Sidebar      from './Sidebar';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/TodoFilters';

import { Project, Settings } from '../model';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

interface MainSectionProps {
  projects: Project[];
  settings: Settings;
  addProject: (project: Project) => void;
  deleteProject: () => void;
  changeCount: (settings: Settings, number: number) => void;
};
interface MainSectionState {
  filter: string;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}><h1>Projects title</h1></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <MainContent
              projects={this.props.projects}
              settings={this.props.settings}
              addProject={this.props.addProject}
              deleteProject={this.props.deleteProject}
              changeCount={this.props.changeCount}
              />
          </Col>
          <Col xs={6} md={4}><Sidebar /></Col>
        </Row>
      </Grid>
    );
  }
}

export default MainSection;
