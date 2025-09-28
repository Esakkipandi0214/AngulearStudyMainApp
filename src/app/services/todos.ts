import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)
  TodoItems: Array<Todo> = [
    {
      title:"groceries",
      id:0,
      userId:1,
      completed:false
    },
    {
      title:"toothpaste",
      id:1,
      userId:2,
      completed:false
    }
  ] 

  //  function to get data todolist data from external apis using httpclient

  getTodosFromApi(){
    const url = "https://jsonplaceholder.typicode.com/todos"

    return this.http.get<Array<Todo>>(url)
  }
}
