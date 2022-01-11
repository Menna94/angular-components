import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen:boolean = false;
  items = [
    {
      title:'Are You Here?',
      content: 'Yes'
    },
    {
      title:'Are You 22222222222222222222222222?',
      content: 'NONONONONONONONONO'
    },
    {
      title:'Are You Here333333333333333333333333333333?',
      content: 'YesYesYesYesYesYesYesYesYesYesYesYesYesYesYesYesYesYesYesYes'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen
  }
}
