import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerAnimation } from '../../animations/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  animations: [fadeInUp, staggerAnimation],
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
