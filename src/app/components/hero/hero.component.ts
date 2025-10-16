import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  fadeInUp,
  staggerAnimation,
  scaleIn,
} from '../../animations/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fadeInUp, staggerAnimation, scaleIn],
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = ['Front-End Developer', 'Angular Specialist', 'UI/UX Enthusiast'];
  currentTitleIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTitleIndex =
        (this.currentTitleIndex + 1) % this.titles.length;
    }, 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
