import { Schema, arrayOf } from 'normalizr';

export const courses = new Schema('courses');
export const topics = new Schema('topics');

courses.define({
  topics: arrayOf(topics),
});
