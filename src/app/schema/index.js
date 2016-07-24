import { Schema, arrayOf } from 'normalizr';

export const COURSE = 'course';
export const TOPIC = 'topic';
export const LESSON = 'lesson';

const schema = {
  [COURSE]: new Schema(COURSE),
  [TOPIC]: new Schema(TOPIC),
  [LESSON]: new Schema(LESSON),
};

schema[COURSE].define({
  topics: arrayOf(schema[TOPIC]),
});

schema[TOPIC].define({
  lessons: arrayOf(schema[LESSON]),
});

export default schema;
