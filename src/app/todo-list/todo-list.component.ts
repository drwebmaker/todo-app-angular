import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { findIndex } from 'lodash';
import { todoList } from '../data/data.mock';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  public data: DataInterface[];
  public todoForm: FormGroup;
  public lastTodoIndex = 1;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.data = todoList;
    this.initForm();
    this.lastTodoIndex = (this.data.length !== 0) ? this.data.length + 1 : 1;
  }

  public eventHandler({type, todoId}) {
    this[`${type}Todo`](todoId);
  }

  public archiveTodo(id): void {
    this.data = this.data.map(todo => {
      if (todo.id === id) {
        todo.archived = true;
      }
      return todo;
    });
  }

  public unarchiveTodo(id): void {
    this.data = this.data.map(todo => {
      if (todo.id === id) {
        todo.archived = false;
      }
      return todo;
    });
  }
  public toggleTodo(id): void {
    this.data = this.data.map(todo => {
      if (todo.id === id) {

        if (todo.archived) {
          return;
        }
        todo.done = !todo.done;
      }
      return todo;
    });
  }

  public removeTodo(id): void {
    this.data = this.data.filter((item) => item.id !== id);
  }

  public createTodo(): void {
    if (this.todoForm.value.text.length <= 0 ) {
      return;
    }
    this.data = this.data.concat([this.buildTodo(this.todoForm.value.text)]);
    this.todoForm.reset();
  }

  public buildTodo(text): DataInterface {
    return {
      id: this.lastTodoIndex++,
      text,
      done: false,
      archived: false
    };
  }

  private initForm(): void {
    this.todoForm = this.fb.group({
      text: null
    });
  }

}
