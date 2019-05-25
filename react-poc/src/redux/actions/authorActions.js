import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';


export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
    return function(dispacth) {
        return authorApi
            .getAuthors()
            .then( authors=> {
                dispacth(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                throw error;
            });
    };
}