import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items=[];
  openedItemIdx = 0;
  
  constructor(private _el:ElementRef) { }

  ngOnInit(): void {
  }

  onClick(idx:number){
    if(idx === this.openedItemIdx){
      this.openedItemIdx = -1;
    } else {
      this.openedItemIdx = idx;
    }
  }
}
