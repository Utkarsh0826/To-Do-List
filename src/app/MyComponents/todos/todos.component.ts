import { Component, OnInit } from '@angular/core';
import{ Todo } from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] ;
  localItem: string| null;
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  DeleteTodo(todo: Todo){
    const ind = this.todos?.indexOf(todo);
    this.todos?.splice(ind, 1);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  AddTodo(todo: Todo){
    if(this.todos.length == 0){
    todo.sno = this.todos.length + 1;
    }
    else{
      todo.sno = (this.todos[this.todos.length - 1].sno) + 1;
    }
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}
