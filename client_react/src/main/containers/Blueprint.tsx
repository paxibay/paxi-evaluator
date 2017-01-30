import * as React from 'react';
import * as redux from 'redux'
import { connect } from 'react-redux';

import { MainSection }  from '../../modules/cb-blueprint';
import { model}         from '../../modules/cb-blueprint';
import {
  addProject,
  deleteProject,
  changeCount
} from '../../modules/cb-blueprint';

interface BlueprintProps {
  blueprint: model.IState;
  dispatch: redux.Dispatch<void>;
}

class Blueprint extends React.Component<BlueprintProps, void> {
  render() {
    const { blueprint, dispatch } = this.props;

    return (
      <div>
        <MainSection
          projects={blueprint.projects}
          settings={blueprint.settings}
          addProject={(p: model.Project) => dispatch(addProject(p))}
          deleteProject={() => dispatch(deleteProject())}
          changeCount={(s: model.Settings, n: number) => dispatch(changeCount(s, n))}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blueprint: state.blueprint
});

export default connect(mapStateToProps)(Blueprint);

