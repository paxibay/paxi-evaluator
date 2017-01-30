import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

import { Todo } from '../model';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

interface EntryProps {
  todos: Todo[];
  clearCompleted: ()=>void;
  completeAll: ()=>void;
  editTodo: (todo:Todo, text:string)=>void;
  completeTodo: (todo:Todo)=>void;
  deleteTodo: (todo:Todo)=>void;
};
interface EntryState {
  filter: string;
};

class MainSection extends React.Component<{}, {}> {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}><h1>Dashboard in processing</h1></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={8}><MainContent /></Col>
          <Col xs={6} md={4}><Sidebar /></Col>
        </Row>
      </Grid>
    );
  }
}

export default MainSection;
