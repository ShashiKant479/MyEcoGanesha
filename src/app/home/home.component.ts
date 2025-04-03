import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to use ngFor
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  columns = 4;
  images = [
    '/assets/images/idol1.png', '/assets/images/idol2.png', '/assets/images/idol1.png',
    '/assets/images/idol2.png', '/assets/images/idol1.png', '/assets/images/idol2.png',
    '/assets/images/idol1.png', '/assets/images/idol2.png', '/assets/images/idol1.png'
  ];
  setGrid(columns: number) {
    this.columns = columns;
  }
}