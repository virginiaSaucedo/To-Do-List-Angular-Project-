import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'To do List';
  tableTitle = ' Minhas Tarefas';
  
  public todoListId: number; 
  public todos: Todo[] = [];
  public form: FormGroup;

  
  //ctor -> emmet to contructor
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title : ['', Validators.compose([
        Validators.minLength(3), 
        Validators.maxLength(100),
        Validators.required
      ])]
    });
    this.load();
  }

  add(){
    const title = this.form.controls['title'].value;

    this.checkId();

    const id = this.todos.length;

    this.todos.push(new Todo(id, title, false));

    this.save();

  }
  
  remove(todo: Todo){
   
    const index = this.todos.indexOf(todo);
    
    try{
      if(index !== -1){
        this.todos.splice(index, 1);
      }
    } catch(error){
      console.log(Error);  
    }
    this.save();
  }

  markAsDone(todo : Todo){
    todo.done = true;
    this.save();
  }

  markAsUndone(todo : Todo){
    todo.done = false;
    this.save();
  } 

  checkId(){
    
    if (this.todoListId){
      this.todoListId++;
    } else {
      this.todoListId = 1;
    }
  }

  save(){
     const data = JSON.stringify(this.todos);
     localStorage.setItem('todos', data);
  }

  load(){

    const data = localStorage.getItem('todos');
    data? this.todos = JSON.parse(data) : this.todos = [];
    
    
  }
}
