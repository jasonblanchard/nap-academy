import courses from './courseFixtures';
import topics from './topicsFixtures';

const entities = {
  courses,
  topics,
};

const createGetEntities = entity => () => new Promise(resolve => {
  setTimeout(() => {
    resolve(entities[entity]);
  }, 300);
});

const createGetEntity = entity => id => new Promise((resolve, reject) => {
  setTimeout(() => {
    const found = entities[entity].find(entityInstance => entityInstance.id === id);
    if (found) return resolve(found);
    return reject({ error: 'Not found' });
  }, 300);
});

export default {
  getCourses: createGetEntities('courses'),
  getCourse: createGetEntity('courses'),
  getTopics: createGetEntities('topics'),
  getTopic: createGetEntity('topics'),
};
