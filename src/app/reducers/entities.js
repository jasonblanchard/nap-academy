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

export function getEntities(entity, ids, state = {}) {
  if (Array.isArray(ids)) {
    return ids.map(id => state[entity][id]);
  }
  if (ids) {
    return get(state[entity], ids);
  }
  return state[entity];
}

export default entities;
