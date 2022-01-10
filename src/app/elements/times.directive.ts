import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private _vcr:ViewContainerRef,
    private _tr:TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times:number){
    this._vcr.clear();

    for(let i=0; i<times; i++){
      this._vcr.createEmbeddedView(this._tr,{})
    }
  }

}
