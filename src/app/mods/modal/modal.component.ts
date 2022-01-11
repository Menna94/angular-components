import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();

  constructor(
    private _el:ElementRef
  ) { }

  ngOnInit(): void {
    document.body.appendChild(this._el.nativeElement)
  }

  ngOnDestroy(): void {
    this._el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit();
  }
}
