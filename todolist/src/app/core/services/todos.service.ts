import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {Http} from '@angular/http'

@Injectable()
export class TodosService {

  constructor(private http: Http) {

  }

  getTodos() {
    return this.http.get('../../../assets/server/todos/getTodos.json');
  }

  addTodo( title ) {
    // creer un stream avec un nouveau todo le merger avec le getTodos
    return this.http.get('../../../assets/server/todos/addTodo.json');
  }
}