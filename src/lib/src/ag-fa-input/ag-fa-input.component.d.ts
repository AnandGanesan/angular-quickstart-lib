import { AfterContentInit } from '@angular/core';
import { InputRefDirective } from "../common/input-ref.directive";
export declare class AgFaInputComponent implements AfterContentInit {
    icon: String;
    input: InputRefDirective;
    ngAfterContentInit(): void;
    constructor();
    readonly isInputFocus: boolean;
    readonly classes: {};
}
