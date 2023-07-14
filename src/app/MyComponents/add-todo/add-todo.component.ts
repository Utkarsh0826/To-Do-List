import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string | undefined;
  discription: string | undefined;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
   
  onSubmit(){
    const todo = {
      sno: 0,
      title: this.title,
      desc:this.discription,
      active: true
    }

    this.todoAdd.emit(todo);

  }

}
