import { denormalize } from 'denormalizr';
import get from 'lodash.get';
import merge from 'lodash.merge';

import schema from 'app/schema';

function entities(state = {}, action) {
  switch (action.type) {
    case 'LOAD_ENTITIES':
      return merge({}, action.entities, state);
    default:
      return state;
  }
}

export function getEntities(state = {}, entity, id) {
  if (id) {
    return denormalize(get(state[entity], id), state, schema[entity]);
  }
  return denormalize(state[entity], state, schema[entity]);
}

export default entities;
