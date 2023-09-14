import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = 'Enes';
  items = [
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Okul', action: 'NO' },
    { description: 'Angular', action: 'Yes' },
    { description: 'React', action: 'No' },
  ];
}
