import { Component, OnInit } from '@angular/core';

interface toDoObject {
  toDo: string;
  complete: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  public name = "Josh Mathiak";
  public count = 0;
  public todo = "";
  public obj = "";
  public toDoList = new Array();


  onClick(){
    let tdo = {
      toDo: this.todo,
      complete: false
    };
    this.toDoList.push(tdo);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
