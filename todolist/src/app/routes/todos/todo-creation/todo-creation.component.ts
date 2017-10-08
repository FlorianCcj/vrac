import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-creation',
  templateUrl: './todo-creation.component.html',
  styleUrls: ['./todo-creation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreationComponent implements OnInit {

	control : FormControl = new FormControl("");
  @Output() add = new EventEmitter()
	// @Input()
  
  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set reset( action ) {
    action && this.control.reset();
  }

}
