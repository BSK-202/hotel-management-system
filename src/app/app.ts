import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './components/rooms/rooms';

@Component({
  selector: 'hia-root',
  imports: [Rooms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hotel-inventory-app');
  role = 'Admin';
}
