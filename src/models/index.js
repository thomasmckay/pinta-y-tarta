// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WordGroupModel, SentenceSectionModel, SentenceModel } = initSchema(schema);

export {
  WordGroupModel,
  SentenceSectionModel,
  SentenceModel
};