import courses from './courseFixtures';
import topics from './topicsFixtures';

import * as entityConstants from 'app/schema';

const entities = {
  [entityConstants.COURSES]: courses,
  [entityConstants.TOPICS]: topics,
};

export default {
  get: (entity, id) => new Promise(resolve => {
    setTimeout(() => {
      if (id) return resolve(entities[entity].find(object => object.id === id));
      return resolve(entities[entity]);
    }, 300);
  }),
};
