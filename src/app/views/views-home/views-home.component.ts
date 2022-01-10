import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 22,
      label: '# of Users'
    },
    {
      value: 900,
      label: '# of Products'
    },
    {
      value: 70 ,
      label: '# of Companies'
    },
  ];

  items = [
    {
      image: './assets/imgs/couch.jpeg',
      title: 'Couch',
      description:'CouchCouchCouchCouchCouchCouch'
    },
    {
      image: './assets/imgs/dresser.jpeg',
      title: 'Dresser',
      description:'DresserDresserDresserDresserDresserDresser'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
