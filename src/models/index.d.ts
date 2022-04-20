import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WordGroupModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SentenceSectionModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SentenceModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class WordGroupModel {
  readonly id: string;
  readonly spanish?: string | null;
  readonly english?: string | null;
  readonly sentencesectionmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WordGroupModel, WordGroupModelMetaData>);
  static copyOf(source: WordGroupModel, mutator: (draft: MutableModel<WordGroupModel, WordGroupModelMetaData>) => MutableModel<WordGroupModel, WordGroupModelMetaData> | void): WordGroupModel;
}

export declare class SentenceSectionModel {
  readonly id: string;
  readonly sentencemodelID: string;
  readonly WordGroupModels?: (WordGroupModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SentenceSectionModel, SentenceSectionModelMetaData>);
  static copyOf(source: SentenceSectionModel, mutator: (draft: MutableModel<SentenceSectionModel, SentenceSectionModelMetaData>) => MutableModel<SentenceSectionModel, SentenceSectionModelMetaData> | void): SentenceSectionModel;
}

export declare class SentenceModel {
  readonly id: string;
  readonly SentenceSectionModels?: (SentenceSectionModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SentenceModel, SentenceModelMetaData>);
  static copyOf(source: SentenceModel, mutator: (draft: MutableModel<SentenceModel, SentenceModelMetaData>) => MutableModel<SentenceModel, SentenceModelMetaData> | void): SentenceModel;
}