import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from "rxjs/Rx";

import {AppState} from "../../interfaces/appState";
import {addTodo, toggleAll} from "../../core/store/todos/todos.actions";
import {Todo} from "../../models/todo.model"

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todo$ = new Rx.Subject()
        .map((value: string) => ( value.trim() === '' ? {type: null, payload: null} : addTodo(new Todo(value))));

    toggleAll$ =  new Rx.Subject()
        .map((payload) =>  toggleAll(payload));

    constructor(store: Store<AppState>) {
        Rx.Observable.merge(
            this.todo$,
            this.toggleAll$
        )
            .subscribe(store.dispatch.bind(store));
    }

}
