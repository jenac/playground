import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCallError } from './apiStatusActions';


export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
    return function(dispacth) {
        dispacth(beginApiCall());
        return authorApi
            .getAuthors()
            .then( authors=> {
                dispacth(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                dispacth(apiCallError());
                throw error;
            });
    };
}