export interface AppSate {
    users: UserState;
    threads: ThreadState;
}

const rootReducer: Reducer<AppSate> = combineReducers<AppState> ({
    users: UsersReducer,
    threads: ThreadsReducer
});

export default rootReducer;