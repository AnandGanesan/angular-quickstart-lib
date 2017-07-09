import {Component, ContentChild, Input, AfterContentInit, HostBinding} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";
import {commonCss} from "../common/common.css";
import {defaultThemeCss} from "../common/default-theme.css";

@Component({
  selector: 'ag-fa-input',
  template: `
              <i class="icon fa" [ngClass]="classes"></i>
              <ng-content></ng-content>
            `,
  styles: [ commonCss, defaultThemeCss ]
})
export class AgFaInputComponent implements AfterContentInit {

  @Input()
  icon:String;

  @ContentChild(InputRefDirective)
  input:InputRefDirective;

  ngAfterContentInit(): void {
    if(!this.input){
      console.error('ag-fa-input component need input inside its content');
    }
  }

  constructor() { }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input ? this.input.focus : false;
  }

  get classes(){
    const cssClasses = {
        //'fa': true
    };
    if(this.icon){
      cssClasses['fa-'+this.icon] = true;
    }
    return cssClasses;
  }
}
