import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <ag-fa-input icon="user" id="name-field">
      <input agInput class="normal-input" placeholder="Enter your name">
    </ag-fa-input>

    <ag-fa-input icon="envelope" id="email-field">
      <input agInput class="normal-input" type="email" name="email" placeholder="Enter your E-mail">
    </ag-fa-input>

    <ag-fa-input icon="users">
      <input agInput placeholder="Enter your username">
    </ag-fa-input>

    <ag-fa-input icon="lock" id="password-field">
      <input agInput placeholder="Enter your password">
    </ag-fa-input>

    <ag-fa-input icon="mobile">
      <input agInput placeholder="Eneter your mobile">
    </ag-fa-input>
  `
})
export class AppComponent {

  constructor(){ }
}
