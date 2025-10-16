import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { overlayAnimation, modalAnimation } from '../../animations/animations';

@Component({
  selector: 'app-resume-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-overlay.component.html',
  styleUrls: ['./resume-overlay.component.scss'],
  animations: [overlayAnimation, modalAnimation],
})
export class ResumeOverlayComponent {
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'Dhanasekar-J-Resume.pdf';
    link.download = 'Dhanasekar-J-Resume.pdf';
    link.click();
  }
}
