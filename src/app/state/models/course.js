import { combineReducers } from 'redux';
import { normalize, arrayOf } from 'normalizr';
import api from 'app/api';
import { loadModels } from 'app/state/actions';
import merge from 'lodash.merge';

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

}

Course.modelName = 'Course';
Course.schema = {};

export default Course;
