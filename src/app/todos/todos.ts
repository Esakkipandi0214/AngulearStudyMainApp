import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todos.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {

  todoservices = inject(TodosService);
  TodoItems = signal<Array<Todo>>([]);


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // Method1: uisng static todos from todo service
    // console.log(this.todoservices.TodoItems);
    // this.TodoItems.set(this.todoservices.TodoItems);

    // Method2: using external endpoint and function from the todo service
    
    this.todoservices.getTodosFromApi().
    pipe(  // for error handling 
      catchError((err)=>{
        console.error(err);
        throw err ;
      })
    )
    .subscribe((todos)=>{ // for successfull fetch
        this.TodoItems.set(todos);
      })

  }

}
