import { isNgTemplate } from '@angular/compiler';
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
  public filteredList = new Array();
  public displayStatus = "all";
  public addValue = false;

  public addValueList = [
    {
      display:"Incomplete",
      value:false
    },
    {
      display:"Complete",
      value:true
    }
  ]
  onChange(selectedValue:any)
  {
    console.log(selectedValue);
    this.addValue=selectedValue;

  }
  onClick(){
    let tdo = {
      toDo: this.todo,
      complete: this.addValue
    };
    console.log(tdo)
    this.toDoList.push(tdo);
    if(this.displayStatus === "Complete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===true)
    }else if(this.displayStatus === "Incomplete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===false)
    }else{
      this.filteredList = this.toDoList
    }
  }

  showComplete(){
    this.displayStatus = "Complete";
    this.filteredList = this.toDoList.filter(items => items.complete==='true')
  }

  
  showIncomplete(){
    this.displayStatus = "Incomplete";
    this.filteredList = this.toDoList.filter(items => items.complete===false)
  }
  showAll(){
    this.displayStatus = "All";
    this.filteredList = this.toDoList;
  }

  markIncomplete(ioi:any)
  {
    let index = this.toDoList.indexOf(ioi);
    ioi.complete = false;
    this.toDoList[index] = ioi;
    if(this.displayStatus === "Complete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===true)
    }else if(this.displayStatus === "Incomplete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===false)
    }else{
      this.filteredList = this.toDoList
    }

  }

  markComplete(ioi:any)
  {
    let index = this.toDoList.indexOf(ioi);
    ioi.complete = true;
    this.toDoList[index] = ioi;
    if(this.displayStatus === "Complete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===true)
    }else if(this.displayStatus === "Incomplete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===false)
    }else{
      this.filteredList = this.toDoList
    }

  }

  deleteItem(ioi:any)
  {
    let index = this.toDoList.indexOf(ioi);
    this.toDoList.splice(index, 1);
    if(this.displayStatus === "Complete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===true)
    }else if(this.displayStatus === "Incomplete")
    {
      this.filteredList = this.toDoList.filter(items => items.complete===false)
    }else{
      this.filteredList = this.toDoList
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
