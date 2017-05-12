import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITool } from './itool';
@Injectable()
export class ToolService {

  private url = 'http://localhost:3000/api/tools';

  constructor(private http: Http) { }

  getTools(): Observable<ITool[]> {
    return this.http.get(this.url)
      .map((response: Response) => <ITool[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getTool(name: string): Observable<ITool> {
    return this.http.get(this.url + `/${name}`)
      .map((response: Response) => <ITool>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteTool(name: string): any {
    return this.http.delete(this.url + `/${name}`)
      .map((response: Response) => response.json())
      .do(data => console.log('Delete: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
