// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PostModel } = initSchema(schema);

export {
  PostModel
};