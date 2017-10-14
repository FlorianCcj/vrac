import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {Http} from '@angular/http';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';

@Injectable()
export class TodosService {

  constructor(private http: Http) {

  }

  getTodos() {
    return this.http.get('../../../assets/server/todos/getTodos.json')
    	.map(res => res.json());
  }

  /*addTodo( title ) {
    return Observable.timer(2000)
      .mapTo({id: Math.random(), title, completed: false})
  }*/
}