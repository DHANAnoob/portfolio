import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { slideIn } from '../../animations/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideIn],
})
export class HeaderComponent {
  @Output() viewResume = new EventEmitter<void>();

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onViewResume(): void {
    this.viewResume.emit();
  }
}
