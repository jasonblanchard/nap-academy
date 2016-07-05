import { normalize, arrayOf } from 'normalizr';

import api from 'app/api';
import * as schema from 'app/schema';

function loadEntities(entity, entities) {
  return {
    type: 'LOAD_ENTITIES',
    entities,
  };
}

export function fetchEntity(entity, id = null) {
  return function (dispatch) {
    api.get(entity, id).then(response => {
      let normedResponse = null;
      if (Array.isArray(response)) {
        normedResponse = normalize(response, arrayOf(schema[entity]));
      } else {
        normedResponse = normalize(response, schema[entity]);
      }
      dispatch(loadEntities(entity, normedResponse.entities));
    });
  };
}
