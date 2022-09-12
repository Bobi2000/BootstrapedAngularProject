import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This will always stay on top cus it is above the <router-outlet>, when using routing it will change only the content in this tag';
}
