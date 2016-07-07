import merge from 'lodash.merge';
import get from 'lodash.get';

function entities(state = {}, action) {
  switch (action.type) {
    case 'LOAD_ENTITIES':
      return merge({}, action.entities, state);
    default:
      return state;
  }
}

export function getEntities(state = {}, entity, id) {
  if (Array.isArray(id)) {
    return id.map(entityId => state[entity][entityId]);
  }
  if (id) {
    return get(state[entity], id);
  }
  return state[entity];
}

export default entities;
