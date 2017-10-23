import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailComponent {
	@Input() todo;
  @Output() removeClicked = new EventEmitter<any>();
	@Output() archiveClicked = new EventEmitter<any>();
	
  constructor() { }

  remove(todo: any) {
    this.removeClicked.emit(todo);
  }

  archive(todo: any) {
  	this.archiveClicked.emit(todo);
  }

}
