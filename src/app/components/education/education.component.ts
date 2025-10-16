import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerAnimation } from '../../animations/animations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  animations: [fadeInUp, staggerAnimation],
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {}
