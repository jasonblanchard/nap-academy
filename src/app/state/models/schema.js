import { Schema } from 'redux-orm';
import { Course, Topic, Lesson } from './index';

const schema = new Schema();
schema.register(Course, Topic, Lesson);

export default schema;
