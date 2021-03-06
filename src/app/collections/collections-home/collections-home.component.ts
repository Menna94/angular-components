import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data= [
    {name: 'James', age: 26, job:'Engineer', employed: true},
    {name: 'Nola', age: 20, job:'Engineer', employed:false},
    {name: 'Esraa', age: 23, job:'Engineer', employed: true}

  ]

  headers = [
    {key:'employed', label:'Has a job?'},
    {key:'name', label:'Name'},
    {key:'age', label:'Age'},
    {key:'job', label:'Job'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
