import { Component } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'al meetup de Angular';
  author = 'Ivan Restrepo';
  count = 0;
  imageSource = './../favicon.ico';
  enabled = false;
  buttonText = 'Activo';
  change()
   {
     this.enabled = !this.enabled;
     this.buttonText = !this.enabled ? 'Activo' : 'Inactivo';
   }
 }