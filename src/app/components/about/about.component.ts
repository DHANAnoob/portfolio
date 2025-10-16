import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  fadeInUp,
  scaleIn,
  staggerAnimation,
} from '../../animations/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  animations: [fadeInUp, staggerAnimation, scaleIn],
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
