import { combineReducers } from 'redux';

import entities, * as entitySelectors from 'app/state/reducers/entities';

const app = combineReducers({
  entities,
});

export const getEntities = (state, ...rest) => entitySelectors.getEntities(state.entities, ...rest);

export default app;
