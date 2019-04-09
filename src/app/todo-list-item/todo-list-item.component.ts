import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() public todo: DataInterface;
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public eventTodo(type) {
    this.emitter.emit({type, todoId: this.todo.id});
  }

}
