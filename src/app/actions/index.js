import { normalize, arrayOf } from 'normalizr';

import api from 'app/api';
import schema from 'app/schema';

function loadEntities(entity, entities) {
  return {
    type: 'LOAD_ENTITIES',
    entities,
  };
}

export function fetchEntity(entityConstant, id = null) {
  return function (dispatch) {
    api.get(entityConstant, id).then(response => {
      let normedResponse = null;
      if (Array.isArray(response)) {
        normedResponse = normalize(response, arrayOf(schema[entityConstant]));
      } else {
        normedResponse = normalize(response, schema[entityConstant]);
      }
      dispatch(loadEntities(entityConstant, normedResponse.entities));
    });
  };
}
