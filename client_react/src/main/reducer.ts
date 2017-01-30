import { combineReducers } from 'redux';

import todos        from '../modules/todos';
import dashboard    from '../modules/cb-dashboard';
import blueprint    from '../modules/cb-blueprint';


const rootReducer = combineReducers({
  todos, dashboard, blueprint
});

export default rootReducer;

