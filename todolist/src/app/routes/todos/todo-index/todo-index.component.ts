import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { getTodos } from "../../../core/core.module";

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.css']
})
export class TodoIndexComponent implements OnInit {

  todos : Observable<any>;

  constructor(private store : Store<any>) {
  	this.store.dispatch(getTodos());
    this.todos = store.select("todos");
  }

  ngOnInit() {
  }

}
