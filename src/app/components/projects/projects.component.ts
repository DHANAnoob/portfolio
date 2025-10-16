import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerAnimation } from '../../animations/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  animations: [fadeInUp, staggerAnimation],
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {}
