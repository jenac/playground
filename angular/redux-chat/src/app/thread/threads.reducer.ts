import { Thread } from './thread.model';
import * as ThreadActions from './thread.actions';
import { Action } from 'redux';

export interface ThreadsEntities {
  [id: string]: Thread
};

export interface ThreadsState {
  ids: string[];
  entities: ThreadsEntities;
  currentThreadId?: string;
};

export const initialState: ThreadsState = {
  ids: [],
  currentThreadId: null,
  entities: {}
};

export const ThreadsReducer = (state: ThreadsState = initialState, action: Action): ThreadsState => {
  switch(action.type) {
    case ThreadActions.ADD_THREAD: {
      const thread = (<ThreadActions.AddThreadAction>action).thread;
      if (state.ids.includes(thread.id)) {
        return state;
      }
      return {
        ids: [...state.ids, thread.id],
        currentThreadId: state.currentThreadId,
        entities: Object.assign({}, state.entities, {
          [thread.id]: thread
        })
      };
    }
    case ThreadActions.ADD_MESSAGE: {
      const thread = (<ThreadActions.AddMessageAction>action).thread;
      const message = (<ThreadActions.AddMessageAction>action).message;

      const isRead = message.thread.id === state.currentThreadId ? true : message.isRead;
      const newMessage = Object.assign({}, message, { isRead });
      
      const oldThread = state.entities[thread.id];
      const newThread = Object.assign({}, oldThread, {
        messages: [...oldThread.messages, newMessage]
      });

      return {
        ids: state.ids,
        currentThreadId: state.currentThreadId,
        entities: Object.assign({}, state.entities, {
          [thread.id]: newThread
        })
      };
    }
    case ThreadActions.SELECT_THREAD: {
      const thread = (<ThreadActions.SelectThreadAction>action).thread;
      const oldThread = state.entities[thread.id];

      const newMessages = oldThread.messages.map(
        (message) => Object.assign({}, message, { isRead: true })
      );

      const newThread = Object.assign({}, oldThread, {
        messages: newMessages
      });

      return {
        ids: state.ids,
        currentThreadId: thread.id,
        entities: Object.assign({}, state.entities, {
          [thread.id]: newThread
        })
      };
    }
    default:
      return state;
  }
};

