import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


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
  public todo: string = '';
  public obj = "";
  public toDoList = new Array();
  public filteredList = new Array();
  public displayStatus = "All";
  public addValue = false;
  faPlus = faPlus;
  public displayList =[
    {
      display:"All Tasks",
      value:"All"
    },{
      display:"Completed Tasks",
      value:"Complete"
    },
    {
      display:"Incomplete Tasks",
      value:"Incomplete"
    },
  ]
  onChange(selectedValue:any)
  {
    console.log(selectedValue);
    this.addValue=selectedValue;

  }

  onDisplayChange(sValue:any)
  {
    console.log(sValue);
    this.displayStatus=sValue;
    this.filterLists();
  }
  onClick(){
    let tdo = {
      toDo: this.todo,
      complete: this.addValue
    };
    console.log(tdo)
    this.toDoList.push(tdo);
    this.filterLists();
  }

  showComplete(){
    this.displayStatus = "Complete";
    this.filteredList = this.toDoList.filter(items => items.complete===true)
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
    this.filterLists();

  }

  markComplete(ioi:any)
  {
    let index = this.toDoList.indexOf(ioi);
    ioi.complete = true;
    this.toDoList[index] = ioi;
    this.filterLists();

  }

  deleteItem(ioi:any)
  {
    let index = this.toDoList.indexOf(ioi);
    this.toDoList.splice(index, 1);
    this.filterLists();
  }

  filterLists()
  {
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
