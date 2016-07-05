import { combineReducers } from 'redux';

import entities, * as entitySelectors from 'app/reducers/entities';

const app = combineReducers({
  entities,
});

export const getEntities = (entity, ids, state) => entitySelectors.getEntities(entity, ids, state.entities);

export default app;
