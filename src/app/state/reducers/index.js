import { combineReducers } from 'redux';

import entities, * as entitySelectors from 'app/state/reducers/entities';

import schema from '../models/schema';

const app = combineReducers({
  entities,
  orm: schema.reducer(),
});

export const getEntities = (state, ...rest) => entitySelectors.getEntities(state.entities, ...rest);

export default app;
