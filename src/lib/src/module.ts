import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AgFaInputComponent} from "./ag-fa-input/ag-fa-input.component";
import {InputRefDirective} from "./common/input-ref.directive";


@NgModule({
  declarations: [AgFaInputComponent, InputRefDirective],
  imports: [
    CommonModule
  ],
  exports: [AgFaInputComponent, InputRefDirective]
})
export class AgInputModule { }


