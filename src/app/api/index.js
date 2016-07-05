import courses from './courseFixtures';
import topics from './topicsFixtures';

const entities = {
  courses,
  topics,
};

export default {
  get: (entity, id) => new Promise(resolve => {
    setTimeout(() => {
      if (id) return resolve(entities[entity].find(object => object.id === id));
      return resolve(entities[entity]);
    }, 300);
  }),
};
