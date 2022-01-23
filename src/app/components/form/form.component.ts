import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faPlus, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


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

  public name = "Josh ";
  public count = 0;
  public todo: string = '';
  public obj = "";
  public toDoList = new Array();
  public filteredList = new Array();
  public displayStatus = "All";
  public addValue = false;
  faPlus = faPlus;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
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
      complete: this.addValue,
      status: 'Incomplete'
    };
    console.log(tdo)
    this.toDoList.push(tdo);
    this.todo = '';
    this.filterLists();
    this.setData(this.toDoList);
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
    ioi.status = 'Incomplete'
    this.toDoList[index] = ioi;
    this.setData(this.toDoList);
    this.filterLists();

  }

  markComplete(ioi:any)
  {
    let index = this.toDoList.indexOf(ioi);
    ioi.complete = true;
    ioi.status = 'Complete'
    this.toDoList[index] = ioi;
    this.setData(this.toDoList);
    this.filterLists();

  }

  deleteItem(ioi:any)
  {
    let index = this.toDoList.indexOf(ioi);
    this.toDoList.splice(index, 1);
    this.setData(this.toDoList);
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

  setData(data:any)
  {
    localStorage.setItem("savedList", JSON.stringify(data));

  }

  getData()
  {
    return localStorage.getItem("savedList");

  }
  constructor() { }

  ngOnInit(): void {
    var storedList = this.getData();
    if(storedList)
    {
      this.toDoList = JSON.parse(storedList);
      this.filterLists();
    }
    
  }

}
