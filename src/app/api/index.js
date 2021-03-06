import courses from './courseFixtures';
import topics from './topicsFixtures';
import lessons from './lessonsFixtures';

import * as entityConstants from 'app/state/schema';

const entities = {
  [entityConstants.COURSE]: courses,
  [entityConstants.TOPIC]: topics,
  [entityConstants.LESSON]: lessons,
};

export default {
  get: (entity, id) => new Promise(resolve => {
    setTimeout(() => {
      if (id) return resolve(entities[entity].find(object => object.id === id));
      return resolve(entities[entity]);
    }, 300);
  }),
};
