import { combineReducers } from 'redux';
import { normalize, arrayOf } from 'normalizr';
import api from 'app/api';
import { loadModels } from 'app/state/actions';
import merge from 'lodash.merge';
import { denormalize } from 'denormalizr';
import get from 'lodash.get';

import schema from 'app/state/models/schema';

class Course {
  static reducer() {
    return combineReducers({
      entities: Course.entityReducer,
      loading: Course.loadingReducer,
    });
  }

  static entityReducer(state = {}, action) {
    switch (action.type) {
      case 'LOAD_MODELS':
        return merge({}, action.payload.entities.Course, state);
      default:
        return state;
    }
  }

  static loadingReducer(state = false, action) {
    switch (action) {
      default:
        return state;
    }
  }

  static fetch(id = null) {
    return function (dispatch) {
      api.get('course', id).then(response => {
        let normedResponse = null;
        if (Array.isArray(response)) {
          normedResponse = normalize(response, arrayOf(schema.Course));
        } else {
          normedResponse = normalize(response, schema.Course);
        }
        dispatch(loadModels(normedResponse));
      });
    };
  }

  static get(state = {}, id) {
    const modelSelector = state.models.Course.entities; // TODO: Centralize this somehow.
    // const entities = Object.keys(state.models).map(model => state.models[model].entities);
    const entities = Object.keys(state.models).reduce((memo, modelKey) => {
      memo[modelKey] = state.models[modelKey].entities
      return memo;
    }, {});
    if (id) {
      return denormalize(get(modelSelector, id), entities, schema.Course);
    }
    return denormalize(modelSelector, entities, schema.Course);
  }

}

Course.modelName = 'Course';
Course.schema = {};

export default Course;
