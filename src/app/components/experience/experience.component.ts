import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../animations/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  animations: [fadeInUp],
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {}
