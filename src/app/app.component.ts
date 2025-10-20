import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeOverlayComponent } from './components/resume-overlay/resume-overlay.component';
import { fadeIn } from './animations/animations';
import AOS from 'aos';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent,
    ResumeOverlayComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn],
})
export class AppComponent implements OnInit {
  showResumeOverlay = false;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
      offset: 100, // Offset from the original trigger point
    });
  }

  openResumeOverlay(): void {
    this.showResumeOverlay = true;
  }

  closeResumeOverlay(): void {
    this.showResumeOverlay = false;
  }
}
