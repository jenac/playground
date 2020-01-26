import { Thread } from './thread.model';

export interface ThreadsEntities {
  [id: string]: Thread
};

export interface ThreadsState {
  ids: string[];
  entities: ThreadsEntities;
  currentThreadId?: string;
};

const initialState: ThreadsState = {
  ids: [],
  currentThreadId: null,
  entities: {}
};