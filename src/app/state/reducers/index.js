import { combineReducers } from 'redux';
import { modelReducer } from 'app/state/models';

import entities, * as entitySelectors from 'app/state/reducers/entities';

const app = combineReducers({
  entities,
  models: modelReducer,
});

export const getEntities = (state, ...rest) => entitySelectors.getEntities(state.entities, ...rest);

export default app;
