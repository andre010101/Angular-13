import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userNane = 'Joaquim';

  userData = {
    email:'Joao_123@gmail.com',
    role: 'admin',
  }
  title = 'curso-angular';
}
