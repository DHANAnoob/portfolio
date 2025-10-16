import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerAnimation } from '../../animations/animations';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  animations: [fadeInUp, staggerAnimation],
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {}
